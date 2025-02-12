import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/admin/profile/components/Information";

export default function MedicalHistory(props) {
  const { conditions, medications, ...rest } = props;
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue("0px 18px 40px rgba(112, 144, 176, 0.12)", "unset");

  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text color={textColorPrimary} fontWeight="bold" fontSize="2xl" mt="10px" mb="4px">
        Medical History
      </Text>
      <Text color={textColorSecondary} fontSize="md" me="26px" mb="40px">
        Ronit Nachnani's medical history includes the following conditions and treatments.
      </Text>
      <SimpleGrid columns="2" gap="20px">
        <Information boxShadow={cardShadow} title="Diagnosed Conditions" value={conditions.join(", ")} />
        <Information boxShadow={cardShadow} title="Current Medications" value={medications.join(", ")} />
        <Information boxShadow={cardShadow} title="Last Checkup" value="January 2025" />
        <Information boxShadow={cardShadow} title="Primary Physician" value="Dr. Smith, Oncology Dept." />
      </SimpleGrid>
    </Card>
  );
}
