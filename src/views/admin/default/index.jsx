// Chakra imports
import {
  Box,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import {
  MdMonitorHeart,
  MdOutlineCoronavirus,
  MdBloodtype,
  MdFavorite,
  MdLocalHospital,
  MdHealthAndSafety,
  MdShield,
} from "react-icons/md";
import Card from "components/card/Card.js";
import HealthStatCard from "components/card/HealthStatCard";
import UpcomingAppointmentsTable from "components/tables/UpcomingAppointmentsTable";
import Tasks from "views/admin/default/components/MedicationReminderTask";
import MiniCalendar from "components/calendar/MiniCalendar";

import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import PatientRow from "components/tables/PatientRow";
import { patientData } from "variables/patientData";

export default function MainDashboard(props) {
  const brandColor = useColorModeValue("brand.500", "white");
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px" mb="20px">
        <Card mb={{ base: "0px", "2xl": "20px" }} shadow="md" {...props}>
          <Text color={textColorPrimary} fontWeight="bold" fontSize="2xl" mt="10px" mb="4px">
            Looking Stellar Ronit!
          </Text>
          <Text color={textColorSecondary} fontSize="md">
            Your health journey is on track—your next appointment with Dr. Patel is on February 15 at 10:00 AM, and don’t forget your Tamoxifen 20mg at 8:00 PM. Your latest test results look stable—great news! Stay hydrated, take a short walk, and join our community yoga on February 18 if you’re up for it. Need support? We’re here for you with one-on-one counseling anytime. Keep going, Ronit—you’re doing amazing!
          </Text>
        </Card>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px" mb="20px">
        <Card bg={useColorModeValue("white", "gray.800")} borderRadius="20px" p="24px">
          <Text fontSize="lg" fontWeight="bold" color={useColorModeValue("secondaryGray.900", "white")} mb="4">
            Patient Information
          </Text>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th color={useColorModeValue("gray.500", "gray.400")}>Patient</Th>
                <Th color={useColorModeValue("gray.500", "gray.400")}>Date of Birth</Th>
                <Th color={useColorModeValue("gray.500", "gray.400")}>Health Card Number</Th>
                <Th color={useColorModeValue("gray.500", "gray.400")}>Sex</Th>
                <Th color={useColorModeValue("gray.500", "gray.400")}>Province</Th>
              </Tr>
            </Thead>
            <Tbody>
              {patientData.map((row, index) => (
                <PatientRow key={index} {...row} />
              ))}
            </Tbody>
          </Table>
        </Card>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap="20px" mb="20px">
        <HealthStatCard
          icon={MdLocalHospital}
          title="Recent Appointment"
          value="Sarcoma Diagnosis"
          status="stable"
          message="Last visit at GRH with Dr. Shah on Jan 27th, 2025. Follow up on treatment and monitor any symptoms."
          colorScheme="red.400"
          statusIcon={MdShield}
        />

        <HealthStatCard
          icon={MdMonitorHeart}
          title="Blood Pressure (Heart & Vessel Health)"
          value="145/92 mmHg"
          status="risk"
          message="High, needs watching. Advise low-sodium diet, daily BP monitoring, and review antihypertensive meds."
          colorScheme="blue.400"
        />

        <HealthStatCard
          icon={MdOutlineCoronavirus}
          title="WBC (Infection Fighters)"
          value="3.5 K/ML"
          status="risk"
          message="Lower than ideal. You might be more prone to infections, especially during treatment. Wash hands often, avoid crowds, and report fever or chills immediately."
          colorScheme="yellow.400"
        />

        <HealthStatCard
          icon={MdBloodtype}
          title="RBC (Energy Cells)"
          value="4.2 M/ML"
          status="stable"
          message="Good! Your oxygen levels are stable, but we’ll keep an eye out for tiredness or weakness. Eat iron-rich foods (like spinach or red meat) and let us know if you feel unusually tired."
          colorScheme="green.400"
        />

        <HealthStatCard
          icon={MdFavorite}
          title="eGFR (Kidney Filter Power)"
          value="75 mL/min/1.73m²"
          status="risk"
          message="Kidneys working, but keep an eye. Healthy patients have 90 mL/min/1.73m²."
          colorScheme="purple.400"
        />

        <HealthStatCard
          icon={MdHealthAndSafety}
          title="Hemoglobin Levels (Oxygen Transport)"
          value="13.5 g/dL"
          status="stable"
          message="Normal Range: 13.2-16.6 g/dL. Hemoglobin levels are within the normal range. Ensure you maintain a balanced diet rich in iron and vitamins. Report any signs of fatigue or dizziness."
          colorScheme="orange.400"
        />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <UpcomingAppointmentsTable />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <Tasks />
          <MiniCalendar h='100%' minW='100%' selectRange={false} />
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
}
