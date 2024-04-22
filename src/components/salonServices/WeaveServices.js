import React from "react";
import {
  Heading,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const WeaveServices = () => {
  return (
    <>
      <TableContainer w={{ base: "20rem", md: "30rem", lg: "45rem" }}>
        <Heading>Weaving Services:</Heading>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td>Ghana Weaving</Td>
              <Td whiteSpace="normal" wordBreak="break-word">
                Sew-in weave with intricate cornrow base for a sleek and stylish
                look. (Price varies based on hair type, weave quality, and
                length)
              </Td>
              <Td isNumeric>$120+</Td>
            </Tr>
          </Tbody>
          <Tbody>
            <Tr>
              <Td>Microlink Weaves</Td>
              <Td whiteSpace="normal" wordBreak="break-word">
                Protective weave technique with minimal tension on natural hair.
                (Price varies based on hair type, weave quality, and length)
              </Td>
              <Td isNumeric>$150+</Td>
            </Tr>
            <Tr>
              <Td>Kinky Twist Weave</Td>
              <Td whiteSpace="normal" wordBreak="break-word">
                Provides natural-looking volume and length. (Price varies based
                on hair type, weave quality, and length)
              </Td>
              <Td isNumeric>$100+</Td>
            </Tr>
            <Tr>
              <Td>Frontal Sew-In</Td>
              <Td whiteSpace="normal" wordBreak="break-word">
                Creates a seamless and natural-looking weave. (Additional
                service)
              </Td>
              <Td isNumeric>$50+</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default WeaveServices;
