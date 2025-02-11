// Chakra imports
import {
  Box,
  SimpleGrid,
  Text,
  useColorModeValue,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  Progress,
  Stat,
  StatLabel,
  StatNumber,
  Flex,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import {
  MdOutlineCoronavirus,
  MdBloodtype,
  MdLocalHospital,
  MdScience,
  MdOutlineHealing,
  MdOutlineFitnessCenter,
  MdPsychology,
  MdMedicalServices,
  MdOutlineMedication,
} from "react-icons/md";
import Card from "components/card/Card.js";
import HealthStatCard from "components/card/HealthStatCard";

const treatmentRoadmap = [
  { phase: "Diagnosis", start: "Jan 10, 2025", end: "Jan 20, 2025", status: "Completed" },
  { phase: "Chemotherapy", start: "Feb 1, 2025", end: "May 15, 2025", status: "Active" },
  { phase: "Radiation Therapy", start: "June 1, 2025", end: "July 30, 2025", status: "Planned" },
  { phase: "Post-Treatment Monitoring", start: "Aug 1, 2025", end: "Ongoing", status: "Planned" },
];

const medicationList = [
  { name: "Tamoxifen", dosage: "20mg", frequency: "Once daily" },
  { name: "Ibuprofen", dosage: "200mg", frequency: "As needed" },
];

export default function MedicalProfile(props) {
  const { ...rest } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "navy.700");
  const brandColor = useColorModeValue("brand.500", "brand.400");

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap="20px" mb="20px">
        <HealthStatCard
          icon={MdLocalHospital}
          title="Allergy"
          value="Penicillin, Shellfish"
          status="risk"
          message="Ensure medical staff are aware of these allergies before any treatment or medication changes."
          colorScheme="red.400"
        />

        <HealthStatCard
          icon={MdScience}
          title="Alkaline Phosphate"
          value="98 U/L"
          status="stable"
          message="Normal range: 44-147 U/L. Liver and bone function appear normal."
          colorScheme="blue.400"
        />

        <HealthStatCard
          icon={MdOutlineCoronavirus}
          title="Platelets"
          value="150 K/µL"
          status="risk"
          message="Slightly low. Monitor for bruising or prolonged bleeding. Normal range: 150-450 K/µL."
          colorScheme="yellow.400"
        />
      </SimpleGrid>

      <Card p="20px" align="center" direction="column" w="100%" {...rest}>
        <Text color={textColor} fontSize="lg" fontWeight="700" mb="20px">
          Treatment Roadmap
        </Text>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Phase</Th>
              <Th>Start Date</Th>
              <Th>End Date</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {treatmentRoadmap.map((row, index) => (
              <Tr key={index}>
                <Td>{row.phase}</Td>
                <Td>{row.start}</Td>
                <Td>{row.end}</Td>
                <Td>{row.status}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Progress value={50} size="lg" colorScheme="blue" mt="20px" />
      </Card>

      <Divider my="40px" />

      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap="20px" mb="20px">
        <HealthStatCard
          icon={MdOutlineHealing}
          title="Pain Management Plan"
          value="Current Strategy"
          status="stable"
          message="Regularly assess pain levels. Current medication: Acetaminophen 500mg PRN. Consider alternative therapies if needed."
          colorScheme="teal.400"
        />

        <HealthStatCard
          icon={MdOutlineFitnessCenter}
          title="Physical Activity Log"
          value="Recommended: Light Exercise"
          status="stable"
          message="Daily walks and gentle stretching are encouraged. Avoid high-impact activities until cleared by a doctor."
          colorScheme="orange.400"
        />

        <HealthStatCard
          icon={MdPsychology}
          title="Mental Health Support"
          value="Counseling & Support Groups"
          status="stable"
          message="Weekly counseling sessions available. Support groups for sarcoma patients meet on Wednesdays at 6 PM."
          colorScheme="purple.400"
        />
      </SimpleGrid>

      <Card p="20px" align="center" direction="column" w="100%" {...rest}>
        <Text color={textColor} fontSize="lg" fontWeight="700" mb="20px">
          Medication List
        </Text>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Medication</Th>
              <Th>Dosage</Th>
              <Th>Frequency</Th>
            </Tr>
          </Thead>
          <Tbody>
            {medicationList.map((med, index) => (
              <Tr key={index}>
                <Td>{med.name}</Td>
                <Td>{med.dosage}</Td>
                <Td>{med.frequency}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Card>
    </Box>
  );
}
