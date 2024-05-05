import React from "react";
import SharedLayout from "./SharedLayout";
import {
  Box,
  Heading,
  Text,
  Button,
  Input,
  Textarea,
  Center,
  VStack,
  FormControl,
  HStack,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { PageHeadingBox, GoogleMaps } from "../components";

const ContactUs = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
      <SharedLayout>
        <Center>
          <VStack w="100%">
            <PageHeadingBox img={`${process.env.REACT_APP_IMAGEKIT_URL}/salon-app/afro.jpg`} title="We'd love to hear from you!" />
            <HStack
              spacing={9}
              w={isMobile ? "80%" : "40%"}
              justify={"space-between"}
              pb="70px"
              flexDir={isMobile && "column"}
            >
              <VStack>
                <Heading>Address</Heading>
                <VStack spacing={0}>
                  <Text align="center">Mile 3, Nkwen</Text>
                  <Text align="center">Bamenda</Text>
                  <Text align="center">North West Region</Text>
                </VStack>
              </VStack>
              <VStack>
                <Heading>Phone/Email</Heading>
                <VStack spacing={0}>
                  <Text align="center">Tel +237 6 711 00 11</Text>
                  <Text align="center">annettes-beauty-spa@gmail.com</Text>
                  <Text></Text>
                </VStack>
              </VStack>
            </HStack>
            <Box w="100%" h="25rem">
              <GoogleMaps />
            </Box>
            <Stack w={isMobile ? "90%" : "50%"} spacing={2} p="4" mt="75px">
              <Heading align="center" as="h2" size="lg" mb="4">
                Send us a message
              </Heading>
              <Text align="center" mb="4">
                Have a question, comment, or concern? Fill out the form below
                and we'll get back to you as soon as possible.
              </Text>
              <form>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    mb="4"
                    focusBorderColor="white"
                    borderRadius="0"
                    borderStyle="none none solid none"
                    _focus={{ borderStyle: "solid" }}
                  />
                </FormControl>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    mb="4"
                    focusBorderColor="white"
                    borderRadius="0"
                    borderStyle="none none solid none"
                    _focus={{ borderStyle: "solid" }}
                  />
                </FormControl>
                <FormControl>
                  <Textarea
                    placeholder="Your Message"
                    mb="4"
                    focusBorderColor="white"
                    borderRadius="0"
                    borderStyle="none none solid none"
                    _focus={{ borderStyle: "solid" }}
                  />
                </FormControl>
                <Button w="full" colorScheme="whiteAlpha" type="submit">
                  Send Message
                </Button>
              </form>
            </Stack>
          </VStack>
        </Center>
      </SharedLayout>
    </>
  );
};

export default ContactUs;
