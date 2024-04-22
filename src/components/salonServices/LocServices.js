import React from "react";
import {
  Heading,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const LocServices = () => {
  return (
    <>
      <TableContainer w={{ base: "20rem", md: "30rem", lg: "45rem" }}>
        <Heading>Loc Services</Heading>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td>Sisterlocks</Td>
              <Td whiteSpace="normal" wordBreak="break-word">
                Creates small, permanent locs for low-maintenance style. (Price
                varies based on hair length and desired loc size)
              </Td>
              <Td>$200+</Td>
            </Tr>
          </Tbody>
          <Tbody>
            <Tr>
              <Td>Traditional Loc Start-up</Td>
              <Td whiteSpace="normal" wordBreak="break-word">
                Creates new locs using the interlocking method. (Price varies
                based on hair length and desired loc size)
              </Td>
              <Td>$150+</Td>
            </Tr>
            <Tr>
              <Td>Loc Retwist</Td>
              <Td whiteSpace="normal" wordBreak="break-word">
                Tightens and maintains existing locs. (Price varies based on loc
                length and density)
              </Td>
              <Td>$50+</Td>
            </Tr>
            <Tr>
              <Td>Loc Detox</Td>
              <Td whiteSpace="normal" wordBreak="break-word">
                Removes build-up and promotes healthy scalp. (Price varies based
                on loc length and density)
              </Td>
              <Td>$40+</Td>
            </Tr>
          </Tbody>
          <Tbody>
            <Tr>
              <Td>Loc Jewelry Installation</Td>
              <Td whiteSpace="normal" wordBreak="break-word">
                Personalize your locs with decorative accents. (Price varies
                based on complexity)
              </Td>
              <Td>$40+</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default LocServices;
