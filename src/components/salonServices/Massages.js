import React from "react";
import {
  Heading,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Box,
} from "@chakra-ui/react";

const Massages = () => {
  return (
    <Box w={{ base: "95%", md: "80%", lg: "70%" }}>
      <TableContainer>
        <Heading>Massages:</Heading>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td>The Blissful Escape</Td>
              <Td whiteSpace="normal" wordBreak="break-word">
                A full-body Swedish massage that focuses on relaxation and
                stress relief
              </Td>
              <Td>$100</Td>
            </Tr>
          </Tbody>
          <Tbody>
            <Tr>
              <Td>The Tension Tamer</Td>
              <Td whiteSpace="normal" wordBreak="break-word">
                A deep tissue massage that targets muscle knots and tension.
                Perfect for athletes or those with chronic pain.
              </Td>
              <Td>$110</Td>
            </Tr>
          </Tbody>
          <Tbody>
            <Tr>
              <Td>The Aromatic Journey</Td>
              <Td whiteSpace="normal" wordBreak="break-word">
                A relaxing massage with your choice of essential oils.
              </Td>
              <Td>$100</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Massages;
