import React from "react";
import img from "../assets/images/pineapple.jpg";
import img2 from "../assets/images/bone-straight.jpg";
import DrawerPanel from "./DrawerPanel";
import {
  Box,
  Button,
  Center,
  Heading,
  Text,
  VStack,
  HStack,
  Grid,
} from "@chakra-ui/react";

const Landing = () => {
  return (
    <Center bg="grey" h="100vh">
      <Box w="95%">
        <Grid templateColumns="repeat(1, 1fr 1fr)" gap={9}>
          <Box
            align="center"
            bg="green"
            py="45vh"
            bgImg={img}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            pos={"relative"}
          >
            <Box color="white" pos={"absolute"} top={5} left={5}>
              <HStack spacing={5}>
                <Heading size="3xl" fontFamily={"Montserrat"}>
                  ANNETTE'S
                </Heading>
                <Text fontSize="3xl" fontFamily={"Montserrat"}>
                  Beauty Salon
                </Text>
              </HStack>
            </Box>
            <VStack
              color="white"
              bg="black"
              py={6}
              pos={"absolute"}
              bottom={0}
              w="100%"
            >
              <Text fontFamily={"Sacramento"} fontSize="3xl">
                Relax and Indulge
              </Text>
              <Heading fontFamily={"Montserrat"}>SPA</Heading>
              <Button> SPA Services</Button>
            </VStack>
          </Box>
          <Box
            align="center"
            bg="black"
            py="45vh"
            bgImg={img2}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            pos={"relative"}
          >
            <Box pos={"absolute"} top={5} right={5}>
              <DrawerPanel />
            </Box>

            <VStack
              color="white"
              bg="black"
              py={6}
              pos={"absolute"}
              bottom={0}
              w="100%"
            >
              <Text fontFamily={"Sacramento"} fontSize="3xl">
                Treat Your Hair
              </Text>
              <Heading fontFamily={"Montserrat"}>SALON</Heading>
              <Button>Salon Services</Button>
            </VStack>
          </Box>
        </Grid>
      </Box>
    </Center>
  );
};

export default Landing;
