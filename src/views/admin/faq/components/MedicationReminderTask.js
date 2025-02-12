// Chakra imports
import {
	Box,
	Flex,
	Text,
	Icon,
	useColorModeValue,
	Checkbox,
  } from "@chakra-ui/react";
  // Custom components
  import Card from "components/card/Card.js";
  import Menu from "components/menu/MainMenu";
  import IconBox from "components/icons/IconBox";
  
  // Assets
  import { MdMedicalServices, MdDragIndicator } from "react-icons/md";
  import React from "react";
  
  const reminders = [
	{ id: 1, name: "Take Chemotherapy Medication", checked: false },
	{ id: 2, name: "Attend Radiation Therapy Session", checked: true },
	{ id: 3, name: "Track Side Effects (Nausea, Fatigue, Pain)", checked: false },
  ];
  
  export default function MedicationReminders(props) {
	const { ...rest } = props;
  
	// Chakra Color Mode
	const textColor = useColorModeValue("secondaryGray.900", "white");
	const boxBg = useColorModeValue("secondaryGray.300", "navy.700");
	const brandColor = useColorModeValue("brand.500", "brand.400");
  
	return (
	  <Card p='20px' align='center' direction='column' w='100%' {...rest}>
		<Flex alignItems='center' w='100%' mb='30px'>
		  <IconBox
			me='12px'
			w='38px'
			h='38px'
			bg={boxBg}
			icon={<Icon as={MdMedicalServices} color={brandColor} w='24px' h='24px' />}
		  />
  
		  <Text color={textColor} fontSize='lg' fontWeight='700'>
			Medication & Treatment Reminders
		  </Text>
		  <Menu ms='auto' />
		</Flex>
		<Box px='11px'>
		  {reminders.map((reminder) => (
			<Flex key={reminder.id} mb='20px'>
			  <Checkbox me='16px' colorScheme='brandScheme' defaultChecked={reminder.checked} />
			  <Text
				fontWeight='bold'
				color={textColor}
				fontSize='md'
				textAlign='start'>
				{reminder.name}
			  </Text>
			  <Icon
				ms='auto'
				as={MdDragIndicator}
				color='secondaryGray.600'
				w='24px'
				h='24px'
			  />
			</Flex>
		  ))}
		</Box>
	  </Card>
	);
  }
  