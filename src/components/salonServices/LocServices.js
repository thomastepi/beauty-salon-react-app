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

const LocServices = () => {
  return (
    <Box w={{ base: "95%", md: "80%", lg: "70%" }}>
      <TableContainer>
        <Heading>Loc Services</Heading>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td>Sisterlocks</Td>
              <Td whiteSpace="normal" wordBreak="break-word">
                Creates small, permanent locs for low-maintenance style. (Price
                varies based on hair length and desired loc size - CFA
                50,000frs)
              </Td>
            </Tr>
          </Tbody>
          <Tbody>
            <Tr>
              <Td>Traditional Loc Start-up</Td>
              <Td whiteSpace="normal" wordBreak="break-word">
                Creates new locs using the interlocking method. (Price varies
                based on hair length and desired loc size - CFA 30,000frs)
              </Td>
            </Tr>
            <Tr>
              <Td>Loc Retwist</Td>
              <Td whiteSpace="normal" wordBreak="break-word">
                Tightens and maintains existing locs. (Price varies based on loc
                length and density - CFA 20,000frs)
              </Td>
            </Tr>
            <Tr>
              <Td>Loc Detox</Td>
              <Td whiteSpace="normal" wordBreak="break-word">
                Removes build-up and promotes healthy scalp. (Price varies based
                on loc length and density - CFA 20,000frs)
              </Td>
            </Tr>
          </Tbody>
          <Tbody>
            <Tr>
              <Td>Loc Jewelry Installation</Td>
              <Td whiteSpace="normal" wordBreak="break-word">
                Personalize your locs with decorative accents. (Price varies
                based on complexity - CFA 10,000frs)
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LocServices;
