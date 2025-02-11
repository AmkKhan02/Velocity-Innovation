import { Avatar, Badge, Td, Text, Tr, Flex } from "@chakra-ui/react";

const PatientRow = ({ avatar, name, email, dob, healthCard, sex, province }) => {
  return (
    <Tr>
      <Td>
        <Flex align="center">
          <Avatar src={avatar} size="sm" mr={3} />
          <Flex direction="column">
            <Text fontSize="sm" fontWeight="bold">{name}</Text>
            <Text fontSize="xs" color="gray.500">{email}</Text>
          </Flex>
        </Flex>
      </Td>
      <Td>
        <Text fontSize="sm">{dob}</Text>
      </Td>
      <Td>
        <Text fontSize="sm" fontWeight="bold">{healthCard}</Text>
      </Td>
      <Td>
        <Badge colorScheme={sex === "Male" ? "blue" : "pink"}>{sex}</Badge>
      </Td>
      <Td>
        <Text fontSize="sm">{province}</Text>
      </Td>
    </Tr>
  );
};

export default PatientRow;
