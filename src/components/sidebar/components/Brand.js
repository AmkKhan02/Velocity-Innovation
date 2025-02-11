import React from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import VitalinkLogo from "assets/img/logo.svg"; // Adjust the path based on your project structure

export function SidebarBrand() {
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align="center" direction="column">
      <img src={VitalinkLogo} alt="Vitalink Logo" style={{ width: "175px", height: "auto" }} />
    </Flex>
  );
}

export default SidebarBrand;
