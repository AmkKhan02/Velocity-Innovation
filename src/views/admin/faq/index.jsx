// Chakra imports
import {
  Box,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Card,
} from "@chakra-ui/react";

export default function FAQPage() {
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Intro Section */}
      <Card p="24px">
        <VStack spacing={4} align="center">
          <Text fontSize="2xl" fontWeight="bold" color={textColorPrimary}>
            Why Choose VitaLink Over MyConnectedCare?
          </Text>
          <Text fontSize="md" color="gray.400" textAlign="center">
            VitaLink provides a modern, user-friendly interface that simplifies healthcare management for all users. Unlike MyConnectedCare, VitaLink ensures easy navigation, a clean UI, and accessibility for every demographic.
          </Text>
        </VStack>
      </Card>

      {/* Comparison Table */}
      <Card p="24px" mt="20px">
        <Text fontSize="xl" fontWeight="bold" color={textColorPrimary} mb="4">
          VitaLink vs. MyConnectedCare
        </Text>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th fontWeight="bold">Feature</Th>
                <Th fontWeight="bold">VitaLink</Th>
                <Th fontWeight="bold">MyConnectedCare</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td><strong>User Interface</strong></Td>
                <Td>Modern, clean, and easy to navigate</Td>
                <Td>Outdated and cluttered</Td>
              </Tr>
              <Tr>
                <Td><strong>Ease of Use</strong></Td>
                <Td>Designed for all ages and demographics</Td>
                <Td>Complicated menus and hard-to-read data</Td>
              </Tr>
              <Tr>
                <Td><strong>Accessibility</strong></Td>
                <Td>Optimized for mobile and desktop, high contrast for readability</Td>
                <Td>Limited accessibility options</Td>
              </Tr>
              <Tr>
                <Td><strong>Health Data Clarity</strong></Td>
                <Td>Information is presented clearly with actionable insights</Td>
                <Td>Overwhelming medical jargon with no guidance</Td>
              </Tr>
              <Tr>
                <Td><strong>Support & Assistance</strong></Td>
                <Td>AI-powered assistance with quick responses</Td>
                <Td>Slow support with long response times</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Card>


      {/* FAQ Section */}
      <Card p="24px" mt="20px">
        <Text fontSize="xl" fontWeight="bold" color={textColorPrimary} mb="4">
          Frequently Asked Questions (FAQs)
        </Text>
        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                What is VitaLink?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              VitaLink is a modern healthcare platform designed to simplify the way patients interact with their health records, doctors, and medical data. It provides a user-friendly experience that ensures patients of all ages can easily understand their healthcare information.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                How is VitaLink easier to use than MyConnectedCare?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Unlike MyConnectedCare, VitaLink is designed with a **minimalist UI** that makes it easy for anyone to navigate. Whether you're a young adult or a senior, the interface provides **clear information, large readable text, and easy-to-access health insights.**
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                Does VitaLink work on mobile?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Yes! VitaLink is optimized for both **mobile and desktop**, ensuring a seamless experience whether you're using a phone, tablet, or computer.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                Can I track my upcoming appointments?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Absolutely! VitaLink provides an **intuitive dashboard** where you can see upcoming doctor appointments, lab test dates, and prescription reminders.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                Is my data secure with VitaLink?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Yes, VitaLink follows **strict security measures** including end-to-end encryption, multi-factor authentication, and HIPAA-compliant data protection to keep your medical records safe.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Card>
    </Box>
  );
}
