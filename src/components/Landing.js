import React from "react";
import img from "../assets/images/simple-yogo.jpg";
import img2 from "../assets/images/korede-braids.jpg";
import img3 from "../assets/images/salon-interior.jpg";
import img4 from "../assets/images/foundation.jpg";
import Newsletter from "./Newsletter";
import {
  Box,
  Button,
  Center,
  Text,
  VStack,
  Grid,
  Heading,
  HStack,
} from "@chakra-ui/react";
import useIsMobile from "../hooks/useIsMobile";

const Landing = () => {
  const isMobile = useIsMobile();
  return (
    <Box bg="#000" color="white">
      <Box h={!isMobile && "80vh"}>
        <Center>
          <Box w="95%">
            <Grid
              templateColumns={
                isMobile ? "repeat(1, 1fr)" : "repeat(1, 1fr 1fr)"
              }
              gap={9}
            >
              <Box
                align="center"
                bg="green"
                h="80vh"
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
                h="80vh"
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
                    Check Us Out
                  </Text>
                  <Button>Our Services</Button>
                </VStack>
              </Box>
            </Grid>
          </Box>
        </Center>
      </Box>
      <Center>
        <Box w="50%" py="6rem" align="center">
          <VStack spacing={8}>
            <Heading fontFamily="pacifico">
              Your Oasis of Relaxation in Mile 3, Bamenda
            </Heading>
            <Text fontSize="lg">
              At Annette's Beauty & SPA, we offer a complete range of services
              to pamper you from head to toe. Whether you're looking for a
              luxurious hair treatment, a refreshing manicure and pedicure, or a
              relaxing head and foot wash, our skilled team is dedicated to
              providing you with a rejuvenating experience.
            </Text>
            <Button p="25px">SCHEDULE AN APPOINTMENT</Button>
          </VStack>
        </Box>
      </Center>
      <Center py="60px">
        <HStack
          w="70%"
          flexDir={isMobile && "column"}
          justifyContent={"space-between"}
        >
          <Box>
            <HStack spacing={6}>
              <Box
                p={{ base: "5rem", lg: "9rem" }}
                bgImg={img3}
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPos="center"
              ></Box>
              <Box
                p={{ base: "5rem", lg: "9rem" }}
                bgImg={img4}
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPos="center"
              ></Box>
            </HStack>
          </Box>
          <Box w="50%">
            <Newsletter />
          </Box>
        </HStack>
      </Center>
    </Box>
  );
};

export default Landing;
