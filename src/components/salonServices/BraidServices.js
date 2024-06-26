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

const BraidServices = () => {
  return (
    <Box w={{ base: "95%", md: "80%", lg: "70%" }}>
      <TableContainer>
        <Heading>Braiding Services:</Heading>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td>Njangala Cornrows</Td>
              <Td whiteSpace="normal" wordBreak="break-word">
                Classic cornrows in various styles and patterns. (Price varies
                based on length and complexity - CFA 10,000frs){" "}
              </Td>
            </Tr>
          </Tbody>
          <Tbody>
            <Tr>
              <Td>Fulani Braids</Td>
              <Td whiteSpace="normal" wordBreak="break-word">
                Intricate braided style with intricate details and cowrie shells
                (optional). (Price varies based on length and complexity - CFA
                15,000frs){" "}
              </Td>
            </Tr>
            <Tr>
              <Td>Plaited Braids</Td>
              <Td whiteSpace="normal" wordBreak="break-word">
                Braided hairstyle styled into an elegant updo. (Price varies
                based on length and complexity - CFA 15,000frs){" "}
              </Td>
            </Tr>
            <Tr>
              <Td>Goddess Faux Locs</Td>
              <Td whiteSpace="normal" wordBreak="break-word">
                Temporary loc extensions for a protective and stylish look.
                (Price varies based on length and desired style - CFA 20,000frs){" "}
              </Td>
            </Tr>
          </Tbody>
          <Tbody>
            <Tr>
              <Td>Box Braids</Td>
              <Td whiteSpace="normal" wordBreak="break-word">
                Offered in various lengths and thicknesses. (Price varies based
                on length and desired thickness - CFA 20,000frs){" "}
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BraidServices;
