import {
	Flex,
	Stat,
	StatLabel,
	StatNumber,
	useColorModeValue,
	Text,
	Icon,
	Box,
  } from "@chakra-ui/react";
  import Card from "components/card/Card.js";
  import React from "react";
  import { MdOutlineWarningAmber, MdCheckCircle } from "react-icons/md";
  
  export default function HealthStatCard(props) {
	const { icon, title, value, status, message, colorScheme } = props;
	const textColor = useColorModeValue("secondaryGray.900", "white");
	const textColorSecondary = "secondaryGray.600";
	const statusColor = status === "stable" ? "green.400" : "yellow.400";
	const statusIcon = status === "stable" ? MdCheckCircle : MdOutlineWarningAmber;
  
	return (
	  <Card py="15px">
		<Flex direction="column" align="flex-start">
		  <Flex align="center">
			<Icon as={icon} w={8} h={8} color={colorScheme} />
			<Stat ms="15px">
			  <StatLabel fontSize="md" color={textColorSecondary}>
				{title}
			  </StatLabel>
			  <StatNumber fontSize="2xl" color={textColor}>
				{value}
			  </StatNumber>
			</Stat>
		  </Flex>
  
		  {message && (
			<Flex mt="10px" align="center">
			  <Icon as={statusIcon} w={5} h={5} color={statusColor} />
			  <Text ml="8px" fontSize="sm" color={textColor}>
				{message}
			  </Text>
			</Flex>
		  )}
		</Flex>
	  </Card>
	);
  }
  