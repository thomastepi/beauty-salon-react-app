import React from "react";
import img from "../assets/images/pineapple.jpg";
import img2 from "../assets/images/bone-straight.jpg";
import { Box, Button, Center, Text, VStack, Grid } from "@chakra-ui/react";
import useIsMobile from "../hooks/useIsMobile";

const Landing = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <Center bg="#000">
        <Box w="95%">
          <Grid
            templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(1, 1fr 1fr)"}
            gap={9}
          >
            <Box
              align="center"
              bg="green"
              py="45vh"
              bgImg={img}
              bgRepeat={"no-repeat"}
              bgSize={"cover"}
              pos={"relative"}
            >
              <Box color="white" pos={"absolute"} top={5} left={5}></Box>
              <VStack
                spacing={6}
                color="white"
                bg="black"
                py={9}
                pos={"absolute"}
                bottom={10}
                right={0}
                w="60%"
              >
                <Text fontFamily={"Sacramento"} fontSize="3xl">
                  Treat Your Hair
                </Text>
                <Button> Book Now</Button>
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
              <VStack
                spacing={6}
                color="white"
                bg="black"
                py={9}
                pos={"absolute"}
                bottom={10}
                right={0}
                w="60%"
              >
                <Text fontFamily={"Sacramento"} fontSize="3xl">
                  Let us Introduce Ourselves
                </Text>
                <Button>Read More</Button>
              </VStack>
            </Box>
          </Grid>
        </Box>
      </Center>
    </>
  );
};

export default Landing;
