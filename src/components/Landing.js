import React from "react";
import { useNavigate } from "react-router-dom";
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
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";

const Landing = () => {
  const isMobile = useBreakpointValue({ base: true, md: true, lg: false });
  const navigate = useNavigate();

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
                bg="grey"
                h="80vh"
                bgImg={`${process.env.REACT_APP_IMAGEKIT_URL}/salon-app/simple-yogo.jpg`}
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
                  <Button
                    as={Link}
                    href="https://appt.link/meet-with-annettes-beauty-spa-92jVHJt1"
                    target="_blank"
                    rel="no_opener no_referrer"
                    style={{ textDecoration: "none" }}
                    borderRadius={"0"}
                  >
                    Book Now
                  </Button>
                </VStack>
              </Box>
              <Box
                align="center"
                bg="grey"
                h="80vh"
                bgImg={`${process.env.REACT_APP_IMAGEKIT_URL}/salon-app/korede-braids.jpg`}
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
                  <Button
                    onClick={() => {
                      navigate("/services");
                    }}
                  >
                    Our Services
                  </Button>
                </VStack>
              </Box>
            </Grid>
          </Box>
        </Center>
      </Box>
      <Center>
        <Box w={isMobile ? "85%" : "50%"} py="6rem" align="center">
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
            <Button
              as={Link}
              href="https://appt.link/meet-with-annettes-beauty-spa-92jVHJt1"
              target="_blank"
              rel="no_opener no_referrer"
              style={{ textDecoration: "none" }}
              borderRadius={"0"}
              p="25px"
            >
              SCHEDULE AN APPOINTMENT
            </Button>
          </VStack>
        </Box>
      </Center>
      <Center py="60px">
        <HStack
          w="90%"
          flexDir={isMobile && "column"}
          justifyContent={"center"}
        >
          <Box>
            <HStack spacing={6}>
              <Box
                p={{ base: "5rem", md: "7rem", lg: "9rem" }}
                bgImg={
                  `${process.env.REACT_APP_IMAGEKIT_URL}/salon-app/salon-interior.jpg` ||
                  img3
                }
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPos="center"
              ></Box>
              <Box
                p={{ base: "5rem", md: "7rem", lg: "9rem" }}
                bgImg={
                  `${process.env.REACT_APP_IMAGEKIT_URL}/salon-app/foundation.jpg` ||
                  img4
                }
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPos="center"
              ></Box>
            </HStack>
          </Box>
          <Box w={isMobile ? "85%" : "50%"}>
            <Newsletter />
          </Box>
        </HStack>
      </Center>
    </Box>
  );
};

export default Landing;
