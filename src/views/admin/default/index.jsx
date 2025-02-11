// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/MedicationReminderTask";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import Information from "views/admin/profile/components/Information";
import Card from "components/card/Card.js";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";

import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import PatientRow from "components/tables/PatientRow";
import { patientData } from "variables/patientData";

import HealthStatCard from "components/card/HealthStatCard";
import { MdBloodtype, MdFavorite, MdMonitorHeart, MdOutlineCoronavirus, MdLocalHospital } from "react-icons/md";

import UpcomingAppointmentsTable from "components/tables/UpcomingAppointmentsTable";

export default function UserReports(props) {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px' mb='20px'>
        <Card mb={{ base: "0px", "2xl": "20px" }} shadow="md" {...rest}>
          <Text
            color={textColorPrimary}
            fontWeight='bold'
            fontSize='2xl'
            mt='10px'
            mb='4px'>
            Looking Stellar Ronit!
          </Text>
          <Text color={textColorSecondary} fontSize='md'>
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
          colorScheme="red.400"
        />

        <HealthStatCard
          icon={MdMonitorHeart}
          title="Blood Pressure"
          value="--"
          colorScheme="blue.400"
        />

        <HealthStatCard
          icon={MdOutlineCoronavirus}
          title="WBC (Infection Fighters)"
          value="3.5 K/ML"
          status="risk"
          message="Risk of infections."
          colorScheme="yellow.400"
        />

        <HealthStatCard
          icon={MdBloodtype}
          title="RBC (Energy Cells)"
          value="4.2 M/ML"
          status="stable"
          message="Oxygen levels are stable."
          colorScheme="green.400"
        />

        <HealthStatCard
          icon={MdFavorite}
          title="eGFR (Kidney Function)"
          value="--"
          colorScheme="purple.400"
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
