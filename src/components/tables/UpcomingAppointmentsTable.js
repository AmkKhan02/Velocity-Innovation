import {
	Box,
	Flex,
	Icon,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useColorModeValue,
  } from "@chakra-ui/react";
  import Card from "components/card/Card";
  import { MdEvent, MdLocationOn, MdPerson, MdAccessTime } from "react-icons/md";
  
  const appointmentsData = [
	{
	  type: "Follow Up",
	  doctor: "Dr. Shah",
	  location: "MediCare Room",
	  dateTime: "Thu, Feb 13 @ 2 PM",
	},
	{
	  type: "MRI Scan",
	  doctor: "Unassigned",
	  location: "Alphalab",
	  dateTime: "Mon, Feb 18 @ 9 AM",
	}
  ];
  
  export default function UpcomingAppointmentsTable() {
	const textColor = useColorModeValue("secondaryGray.900", "white");
	const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  
	return (
	  <Card w="100%" px="0px" overflowX="auto">
		<Flex px="25px" mb="8px" justifyContent="space-between" align="center">
		  <Text color={textColor} fontSize="22px" fontWeight="700">
			Upcoming Appointments
		  </Text>
		</Flex>
  
		<Box>
		  <Table variant="simple" color="gray.500">
			<Thead>
			  <Tr>
				<Th color="gray.400">Type</Th>
				<Th color="gray.400">Doctor</Th>
				<Th color="gray.400">Location</Th>
				<Th color="gray.400">Date/Time</Th>
			  </Tr>
			</Thead>
			<Tbody>
			  {appointmentsData.map((appointment, index) => (
				<Tr key={index}>
				  <Td fontWeight="bold">{appointment.type}</Td>
				  <Td>
					<Flex align="center">
					  <Icon as={MdPerson} color="blue.500" mr={2} />
					  <Text>{appointment.doctor}</Text>
					</Flex>
				  </Td>
				  <Td>
					<Flex align="center">
					  <Icon as={MdLocationOn} color="green.500" mr={2} />
					  <Text>{appointment.location}</Text>
					</Flex>
				  </Td>
				  <Td>
					<Flex align="center">
					  <Icon as={MdAccessTime} color="purple.500" mr={2} />
					  <Text>{appointment.dateTime}</Text>
					</Flex>
				  </Td>
				</Tr>
			  ))}
			</Tbody>
		  </Table>
		</Box>
	  </Card>
	);
  }
  