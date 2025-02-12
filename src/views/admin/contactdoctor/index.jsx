// Chakra imports
import {
  Box,
  SimpleGrid,
  Text,
  useColorModeValue,
  useDisclosure,
  Input,
  Button,
  VStack,
  HStack,
  Textarea,
  Avatar,
  Divider,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import {
  MdSend,
  MdVideoCall,
  MdPhone,
  MdEvent,
  MdLocalPharmacy,
} from "react-icons/md";
import Card from "components/card/Card.js";

const WEBSOCKET_URL = "ws://9860-24-114-29-178.ngrok-free.app"; // WebSocket server URL

export default function ContactDoctor(props) {
  const brandColor = useColorModeValue("brand.500", "white");
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { sender: "doctor", text: "Hello! How are you feeling today?", read: false },
    { sender: "patient", text: "Hi Dr. Shah, I'm feeling more fatigued than usual." },
    { sender: "doctor", text: "That’s understandable. Fatigue can be a side effect of treatment. Are you also experiencing any pain or nausea?", read: false },
    { sender: "patient", text: "A little pain in my legs but no nausea." },
    { sender: "doctor", text: "I see. Make sure to rest and stay hydrated. I’ll adjust your medication slightly. Let me know if the pain persists.", read: false },
  ]);
  const [doctorTyping, setDoctorTyping] = useState(false);
  const typingTimeout = useRef(null);
  const ws = useRef(null);
  const messagesEndRef = useRef(null);

  // Initialize WebSocket connection
  useEffect(() => {
    ws.current = new WebSocket(WEBSOCKET_URL);

    ws.current.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    ws.current.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);

      if (receivedData.type === "history") {
        setMessages(receivedData.messages);
      } else if (receivedData.type === "message") {
        setMessages((prev) => [...prev, receivedData]);
      } else if (receivedData.type === "typing") {
        setDoctorTyping(receivedData.sender === "doctor");

        // Clear any existing timeout before setting a new one
        if (typingTimeout.current) {
          clearTimeout(typingTimeout.current);
        }

        // Hide the typing indicator after 2 seconds of no typing
        typingTimeout.current = setTimeout(() => {
          setDoctorTyping(false);
        }, 400);
      } else if (receivedData.type === "read") {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.sender === "doctor" ? { ...msg, read: true } : msg
          )
        );
      }
    };

    ws.current.onclose = () => {
      console.log("Disconnected from WebSocket server");
    };

    return () => {
      ws.current.close();
    };
  }, []);

  // Scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Send message to WebSocket server
  const sendMessage = () => {
    if (!message.trim()) return;

    const newMessage = { sender: "patient", text: message, read: false };
    ws.current.send(JSON.stringify({ type: "message", ...newMessage }));
    setMessage("");

    // Notify doctor that the message has been read
    ws.current.send(JSON.stringify({ type: "read" }));
  };

  // Send typing indicator when the user starts typing
  const handleTyping = (e) => {
    setMessage(e.target.value);
    ws.current.send(JSON.stringify({ type: "typing", sender: "patient" }));
  };

  const [medication, setMedication] = useState("");
  const [quantity, setQuantity] = useState("");

  // Modal controls
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Handle the refill request
  const handleRequestRefill = () => {
    if (!medication || !quantity) {
      alert("Please enter both medication name and quantity.");
      return;
    }
    onOpen(); // Open modal when successful
  };

  const [selectedDateTime, setSelectedDateTime] = useState("");

  const handleScheduleClick = () => {
    if (!selectedDateTime) {
      alert("Please select a date and time for the appointment.");
      return;
    }

    // Convert datetime-local format to Google Calendar format (YYYYMMDDTHHMMSSZ)
    const dateObj = new Date(selectedDateTime);
    const startUTC = dateObj.toISOString().replace(/[-:.]/g, "").slice(0, -4) + "Z"; // YYYYMMDDTHHMMSSZ
    const endUTC = new Date(dateObj.getTime() + 60 * 60 * 1000).toISOString().replace(/[-:.]/g, "").slice(0, -4) + "Z"; // +1 hour

    // Google Calendar URL
    const googleCalendarURL = `https://calendar.google.com/calendar/u/0/r/eventedit?text=Doctor%20Consultation&details=Follow-up%20with%20Dr.%20Patel&location=Grand%20River%20Hospital&dates=${startUTC}/${endUTC}&vcon=meet&hl=en`;

    // Open the link in a new tab
    window.open(googleCalendarURL, "_blank");
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Doctor Profile Section */}
      <Card p="24px">
        <Flex alignItems="center">
          <Avatar size="lg" name="Dr. Shah" src="https://via.placeholder.com/150" mr="4" />
          <VStack align="flex-start">
            <Text fontSize="xl" fontWeight="bold" color={textColorPrimary}>
              Dr. Shah
            </Text>
            <Text fontSize="md" color={textColorSecondary}>
              Sarcoma Specialist, Grand River Hospital
            </Text>
            <Text fontSize="sm" color="gray.500">
              Available: Mon - Fri, 9 AM - 5 PM
            </Text>
          </VStack>
        </Flex>
      </Card>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap="20px" mt="20px">
        {/* Secure Messaging with History */}
        <Card p="24px">
          <Text fontSize="xl" fontWeight="bold" color={textColorPrimary} mb="4">
            Message Your Doctor
          </Text>
          <VStack spacing={3} align="stretch" maxH="300px" overflowY="auto" p="2">
            {messages.map((msg, index) => (
              <Flex key={index} justify={msg.sender === "patient" ? "flex-end" : "flex-start"}>
                <Box
                  bg={msg.sender === "doctor" ? "blue.100" : "gray.200"}
                  p="10px"
                  borderRadius="10px"
                  maxW="75%"
                >
                  <Text fontSize="sm">{msg.text}</Text>
                  {msg.sender === "doctor" && msg.read && (
                    <Text fontSize="xs" color="gray.500">
                      Seen
                    </Text>
                  )}
                </Box>
              </Flex>
            ))}
            <div ref={messagesEndRef} />
          </VStack>

          {doctorTyping && (
            <Text fontSize="sm" color="gray.500">
              Dr. Shah is typing...
            </Text>
          )}

          <Divider my="4" />
          <HStack>
            <Textarea
              placeholder="Type your message..."
              value={message}
              onChange={handleTyping}
              size="md"
              bg={useColorModeValue("gray.100", "gray.700")}
            />
            <Button leftIcon={<MdSend />} colorScheme="blue" onClick={sendMessage}>
              Send
            </Button>
          </HStack>
        </Card>

        {/* Video Consultation & Emergency Contact */}
        <Card p="24px">
          <Text fontSize="xl" fontWeight="bold" color={textColorPrimary} mb="4">
            Connect with Your Doctor
          </Text>
          <VStack spacing={4}>
            {/* Video Consultation Hyperlink */}
            <Button
              as="a"
              href="https://calendar.google.com/calendar/u/0/r/eventedit?vcon=meet&dates=now&hl=en&pli=1" // Replace with actual video call link
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<MdVideoCall />}
              colorScheme="purple"
              width="full"
            >
              Start Video Consultation
            </Button>

            {/* Emergency Contact - Dials the Number */}
            <Button
              as="a"
              href="tel:+15197423611"
              leftIcon={<MdPhone />}
              colorScheme="red"
              width="full"
            >
              Call Grand River Hospital Emergency
            </Button>

            <Button
              as="a"
              href="tel:+15197494227"
              leftIcon={<MdPhone />}
              colorScheme="orange"
              width="full"
            >
              Call Grand River Hospital Pharmacy
            </Button>
          </VStack>
        </Card>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap="20px" mt="20px">
        {/* Appointment Scheduling */}
        <Card p="24px">
          <Text fontSize="xl" fontWeight="bold" color={textColorPrimary} mb="4">
            Book an Appointment
          </Text>
          <VStack spacing={3} align="stretch">
            <Input
              placeholder="Select Date & Time"
              type="datetime-local"
              value={selectedDateTime}
              onChange={(e) => setSelectedDateTime(e.target.value)}
            />
            <Button leftIcon={<MdEvent />} colorScheme="green" onClick={handleScheduleClick}>
              Schedule Appointment
            </Button>
          </VStack>
        </Card>

        {/* Prescription Refill Request */}
        <Card p="24px">
          <Text fontSize="xl" fontWeight="bold" color={textColorPrimary} mb="4">
            Request Prescription Refill
          </Text>
          <VStack spacing={3} align="stretch">
            <Input
              placeholder="Medication Name"
              value={medication}
              onChange={(e) => setMedication(e.target.value)}
            />
            <Input
              placeholder="Quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <Button leftIcon={<MdLocalPharmacy />} colorScheme="orange" onClick={handleRequestRefill}>
              Request Refill
            </Button>
          </VStack>
        </Card>

        {/* Success Modal */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Prescription Refill Requested</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Your refill request for <strong>{medication}</strong> (Quantity: {quantity}) has been submitted successfully. 
              Your pharmacy will process the request soon.
            </ModalBody>
          </ModalContent>
        </Modal>
      </SimpleGrid>
    </Box>
  );
}
