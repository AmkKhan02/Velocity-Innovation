// Chakra imports
import { Icon, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { MdCalendarToday, MdScience, MdMedication, MdMessage, MdSecurity } from "react-icons/md";
import React from "react";

// Mapping notification types to icons
const iconMap = {
  appointment: MdCalendarToday,
  lab: MdScience,
  medication: MdMedication,
  message: MdMessage,
  security: MdSecurity,
};

export function ItemContent({ info, type = "message" }) {
  const textColor = useColorModeValue("navy.700", "white");
  const IconComponent = iconMap[type] || MdMessage; // Default to message icon if type is missing

  return (
    <Flex align="center">
      {/* Notification Icon */}
      <Flex
        justify="center"
        align="center"
        borderRadius="16px"
        minH={{ base: "50px", md: "60px" }}
        h={{ base: "50px", md: "60px" }}
        minW={{ base: "50px", md: "60px" }}
        w={{ base: "50px", md: "60px" }}
        me="14px"
        bg="linear-gradient(135deg, #868CFF 0%, #4318FF 100%)"
      >
        <Icon as={IconComponent} color="white" w={6} h={6} />
      </Flex>

      {/* Notification Text */}
      <Flex flexDirection="column">
        <Text fontWeight="bold" color={textColor} fontSize={{ base: "md", md: "md" }}>
          {info}
        </Text>
      </Flex>
    </Flex>
  );
}
