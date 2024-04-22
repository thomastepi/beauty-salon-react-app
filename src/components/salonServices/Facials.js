import React from "react";
import {
  Heading,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const Facials = () => {
  return (
    <>
      <TableContainer w={{ base: "20rem", md: "30rem", lg: "45rem" }}>
        <Heading>Facials:</Heading>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td>The Parisian Glow</Td>
              <Td whiteSpace="normal" wordBreak="break-word">
                This luxurious facial uses French skincare products to deeply
                cleanse, exfoliate, and hydrate your skin. Includes a facial
                massage and mask.
              </Td>
              <Td isNumeric>{"$"}120</Td>
            </Tr>
          </Tbody>
          <Tbody>
            <Tr>
              <Td>The Gentleman's Recharge</Td>
              <Td whiteSpace="normal" wordBreak="break-word">
                A facial designed specifically for men's skin. Includes a deep
                cleanse, exfoliation, and hydrating mask to leave skin feeling
                refreshed and invigorated.
              </Td>
              <Td isNumeric>{"$"}150</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Facials;
