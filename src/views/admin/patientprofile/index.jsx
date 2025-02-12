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
  Avatar,
  FormControl,
  FormLabel,
  Switch,
  IconButton,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  MdEdit,
  MdSave,
  MdLock,
  MdPerson,
  MdDevices,
  MdHistory,
  MdShield,
} from "react-icons/md";
import Card from "components/card/Card.js";
import SwitchField from "components/fields/SwitchField";
import Menu from "components/menu/MainMenu";

export default function ProfilePage(props) {
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");

  // Personal Info State
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState("ronit.nachnani@example.com");
  const [phone, setPhone] = useState("(123) 456-7890");
  const [address, setAddress] = useState("123 Grand River St, Waterloo, ON");
  const [emergencyContact, setEmergencyContact] = useState("(987) 654-3210");

  // Medical Preferences State
  const [bloodType, setBloodType] = useState("O+");
  const [allergies, setAllergies] = useState("None");
  const [primaryPhysician, setPrimaryPhysician] = useState("Dr. Patel");
  const [medications, setMedications] = useState("Tamoxifen 20mg");
  const [familyHistory, setFamilyHistory] = useState("No major hereditary conditions");
  const [chronicConditions, setChronicConditions] = useState("Hypertension");

  // Notification Preferences
  const [notifications, setNotifications] = useState({
    appointmentReminders: true,
    testResults: true,
    medicationRefills: false,
    labReports: true,
    doctorMessages: false,
  });

  // Modal Controls
  const modalControls = {
    password: useDisclosure(),
    twoFactor: useDisclosure(),
    devices: useDisclosure(),
    history: useDisclosure(),
    account: useDisclosure(),
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Profile Card */}
      <Card p="24px">
        <VStack spacing={4} align="center">
          <Avatar size="2xl" name="Ronit Nachnani" bg="navy" color="white" />
          <Text fontSize="2xl" fontWeight="bold" color={textColorPrimary}>
            Ronit Nachnani
          </Text>
          <Text fontSize="md" color="gray.400">
            Sarcoma Patient • Grand River Hospital
          </Text>
        </VStack>
      </Card>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap="20px" mt="20px">
        {/* Personal Information Section */}
        <Card p="24px">
          <HStack justifyContent="space-between">
            <Text fontSize="xl" fontWeight="bold" color={textColorPrimary}>
              Personal Information
            </Text>
            <IconButton
              icon={isEditing ? <MdSave /> : <MdEdit />}
              aria-label="Edit Profile"
              onClick={() => setIsEditing(!isEditing)}
            />
          </HStack>
          <VStack spacing={4} align="stretch" mt="4">
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input value="Ronit Nachnani" isReadOnly bg="gray.200" />
            </FormControl>
            <FormControl>
              <FormLabel>Date of Birth</FormLabel>
              <Input value="12/08/2001" isReadOnly bg="gray.200" />
            </FormControl>
            <FormControl>
              <FormLabel>Health Card Number</FormLabel>
              <Input value="234-567-890-DF" isReadOnly bg="gray.200" />
            </FormControl>
            <FormControl>
              <FormLabel>Sex</FormLabel>
              <Input value="Male" isReadOnly bg="gray.200" />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input value={email} isReadOnly={!isEditing} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input value={phone} isReadOnly={!isEditing} onChange={(e) => setPhone(e.target.value)} />
            </FormControl>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input value={address} isReadOnly={!isEditing} onChange={(e) => setAddress(e.target.value)} />
            </FormControl>
            <FormControl>
              <FormLabel>Emergency Contact</FormLabel>
              <Input value={emergencyContact} isReadOnly={!isEditing} onChange={(e) => setEmergencyContact(e.target.value)} />
            </FormControl>
          </VStack>
        </Card>

        {/* Medical Preferences */}
        <Card p="24px">
          <Text fontSize="xl" fontWeight="bold" color={textColorPrimary} mb="4">
            Medical Preferences
          </Text>
          <VStack spacing={4} align="stretch">
            <FormControl>
              <FormLabel>Blood Type</FormLabel>
              <Input value={bloodType} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>Allergies</FormLabel>
              <Input value={allergies} isReadOnly={!isEditing} bg={isEditing ? "white" : "gray.100"} onChange={(e) => setAllergies(e.target.value)} />
            </FormControl>
            <FormControl>
              <FormLabel>Primary Physician</FormLabel>
              <Input value={primaryPhysician} isReadOnly={!isEditing} bg={isEditing ? "white" : "gray.100"} onChange={(e) => setPrimaryPhysician(e.target.value)} />
            </FormControl>
            <FormControl>
              <FormLabel>Current Medications</FormLabel>
              <Input value={medications} isReadOnly={!isEditing} bg={isEditing ? "white" : "gray.100"} onChange={(e) => setMedications(e.target.value)} />
            </FormControl>
            <FormControl>
              <FormLabel>Family Medical History</FormLabel>
              <Input value={familyHistory} isReadOnly={!isEditing} bg={isEditing ? "white" : "gray.100"} onChange={(e) => setFamilyHistory(e.target.value)} />
            </FormControl>
            <FormControl>
              <FormLabel>Chronic Conditions</FormLabel>
              <Input value={chronicConditions} isReadOnly={!isEditing} bg={isEditing ? "white" : "gray.100"} onChange={(e) => setChronicConditions(e.target.value)} />
            </FormControl>
            <FormControl>
              <FormLabel>Organ Donor Status</FormLabel>
              <Switch isChecked />
            </FormControl>
          </VStack>
        </Card>
      </SimpleGrid>

      {/* Security & Notifications - Split 50/50 */}
      <SimpleGrid columns={{ base: 1, md: 2 }} gap="20px" mt="20px">
        {/* Security Settings */}
        <Card p="24px">
          <Text fontSize="xl" fontWeight="bold" color={textColorPrimary} mb="4">
            Security Settings
          </Text>
          <VStack spacing={4} align="stretch">
            {Object.entries({
              password: ["Change Password", MdLock, "red"],
              twoFactor: ["Enable Two-Factor Authentication", MdShield, "blue"],
              devices: ["Manage Devices", MdDevices, "purple"],
              history: ["View Login History", MdHistory, "orange"],
              account: ["Manage Account", MdPerson, "gray"],
            }).map(([key, [label, Icon, color]]) => (
              <Button key={key} leftIcon={<Icon />} colorScheme={color} onClick={modalControls[key].onOpen}>
                {label}
              </Button>
            ))}
          </VStack>
        </Card>

        {/* Notifications */}
        <Card p="24px">
          <Flex align="center" justify="space-between" mb="10px">
            <Text fontSize="xl" fontWeight="bold" color={textColorPrimary}>
              Patient Notifications
            </Text>
            <Menu />
          </Flex>
          <VStack spacing={4} align="stretch">
            {Object.entries(notifications).map(([key, value]) => {
              const formattedLabel = key
                .replace(/([A-Z])/g, " $1") // Insert spaces before uppercase letters
                .replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize first letter of every word
                .trim(); // Remove extra spaces

              return (
                <SwitchField
                  key={key}
                  isChecked={value}
                  reversed={true}
                  fontSize="md"
                  id={`notif-${key}`}
                  label={formattedLabel}
                  onChange={() => setNotifications({ ...notifications, [key]: !value })}
                />
              );
            })}
          </VStack>
        </Card>
      </SimpleGrid>

      {/* Security Modals */}
      {Object.entries(modalControls).map(([key, { isOpen, onClose }]) => (
        <Modal key={key} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{key.replace(/([A-Z])/g, " $1")}</ModalHeader>
            <ModalCloseButton />
            <ModalBody><Input placeholder={`Enter new ${key}`} /></ModalBody>
          </ModalContent>
        </Modal>
      ))}
    </Box>
  );
}
