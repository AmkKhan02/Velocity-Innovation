// Chakra imports
import {
  Box,
  SimpleGrid,
  Text,
  useColorModeValue,
  Input,
  Button,
  VStack,
  HStack,
  Textarea,
  Avatar,
  Divider,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  MdSend,
  MdVideoCall,
  MdPhone,
  MdEvent,
  MdLocalPharmacy,
} from "react-icons/md";
import Card from "components/card/Card.js";

export default function ContactDoctor(props) {
  const brandColor = useColorModeValue("brand.500", "white");
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { sender: "doctor", text: "Hello! How are you feeling today?" },
    { sender: "patient", text: "Hi Dr. Shah, I'm feeling more fatigued than usual." },
    { sender: "doctor", text: "That’s understandable. Fatigue can be a side effect of treatment. Are you also experiencing any pain or nausea?" },
    { sender: "patient", text: "A little pain in my legs but no nausea." },
    { sender: "doctor", text: "I see. Make sure to rest and stay hydrated. I’ll adjust your medication slightly. Let me know if the pain persists." },
  ]);
  const [medication, setMedication] = useState("");
  const [quantity, setQuantity] = useState("");

  const sendMessage = () => {
    if (message.trim() === "") return;
    setMessages([...messages, { sender: "patient", text: message }]);
    setMessage(""); // Clear input after sending
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
              <Flex
                key={index}
                justify={msg.sender === "patient" ? "flex-end" : "flex-start"}
              >
                <Box
                  bg={msg.sender === "doctor" ? "blue.100" : "gray.200"}
                  p="10px"
                  borderRadius="10px"
                  maxW="75%"
                >
                  <Text fontSize="sm">{msg.text}</Text>
                </Box>
              </Flex>
            ))}
          </VStack>
          <Divider my="4" />
          <HStack>
            <Textarea
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
            <Button leftIcon={<MdVideoCall />} colorScheme="purple" width="full">
              Start Video Consultation
            </Button>
            <Button leftIcon={<MdPhone />} colorScheme="red" width="full">
              Emergency Contact
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
            <Input placeholder="Select Date & Time" type="datetime-local" />
            <Button leftIcon={<MdEvent />} colorScheme="green">
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
            <Button leftIcon={<MdLocalPharmacy />} colorScheme="orange">
              Request Refill
            </Button>
          </VStack>
        </Card>
      </SimpleGrid>
    </Box>
  );
}
