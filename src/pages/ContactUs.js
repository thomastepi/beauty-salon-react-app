import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Heading,
  Text,
  Button,
  Input,
  Textarea,
  Center,
  VStack,
  HStack,
  FormControl,
  FormErrorMessage,
  Grid,
  useBreakpointValue,
  Icon,
} from "@chakra-ui/react";
import { PageHeadingBox, GoogleMaps, AlertBox } from "../components";
//import contactBg from "../assets/images/posing-together.jpg";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  const [alert, setAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const columns = useBreakpointValue({ base: 1, md: 2 });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      setAlert(false);
      setIsLoading(true);
      setTimeout(() => {
        setAlert(true);
        formik.resetForm();
        setIsLoading(false);
      }, 2000);
    },
  });

  return (
    <Box bg="brand.background">
      <PageHeadingBox
        img={"https://ik.imagekit.io/thormars/salon-app/posing-together.jpg"}
        title="Get In Touch"
      />
      <Center py={{ base: 10, md: 20 }}>
        <Grid
          templateColumns={`repeat(${columns}, 1fr)`}
          gap={10}
          w="90%"
          maxW="1200px"
        >
          <VStack spacing={8} align="flex-start">
            <Heading fontFamily="heading" size="2xl">
              Contact Details
            </Heading>
            <VStack align="flex-start" spacing={5}>
              <HStack spacing={4}>
                <Icon as={FaMapMarkerAlt} w={6} h={6} color="brand.primary" />
                <Box>
                  <Heading size="md" fontFamily="heading">
                    Address
                  </Heading>
                  <Text>Mile 3, Nkwen, Bamenda, North West Region</Text>
                </Box>
              </HStack>
              <HStack spacing={4}>
                <Icon as={FaPhone} w={6} h={6} color="brand.primary" />
                <Box>
                  <Heading size="md" fontFamily="heading">
                    Phone
                  </Heading>
                  <Text>WhatsApp: +1 214 431 4816</Text>
                </Box>
              </HStack>
              <HStack spacing={4}>
                <Icon as={FaEnvelope} w={6} h={6} color="brand.primary" />
                <Box>
                  <Heading size="md" fontFamily="heading">
                    Email
                  </Heading>
                  <Text>hello@thomastepi.com</Text>
                </Box>
              </HStack>
            </VStack>
            <Box
              w="100%"
              h="300px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="lg"
            >
              <GoogleMaps />
            </Box>
          </VStack>

          <VStack spacing={8} align="flex-start" w="100%">
            <Heading fontFamily="heading" size="2xl">
              Send Us a Message
            </Heading>
            {alert && (
              <AlertBox
                setAlert={setAlert}
                status="success"
                title="Success!"
                description="Your message has been received. We will respond within the next 48 hours."
              />
            )}
            <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
              <VStack spacing={5}>
                                <FormControl isInvalid={!!(formik.touched.name && formik.errors.name)}>
                                  <Input
                                    {...formik.getFieldProps("name")}
                                    placeholder="Your Name"
                                    bg="brand.surface"
                                    color="brand.text"
                                    _placeholder={{ color: "brand.textMuted" }}
                                    _focus={{ borderColor: "brand.primary" }}
                                  />
                                  <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={!!(formik.touched.email && formik.errors.email)}>
                                  <Input
                                    {...formik.getFieldProps("email")}
                                    type="email"
                                    placeholder="Your Email"
                                    bg="brand.surface"
                                    color="brand.text"
                                    _placeholder={{ color: "brand.textMuted" }}
                                    _focus={{ borderColor: "brand.primary" }}
                                  />
                                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={!!(formik.touched.message && formik.errors.message)}>
                                  <Textarea
                                    {...formik.getFieldProps("message")}
                                    placeholder="Your Message"
                                    bg="brand.surface"
                                    color="brand.text"
                                    _placeholder={{ color: "brand.textMuted" }}
                                    rows={6}
                                    _focus={{ borderColor: "brand.primary" }}
                                  />
                                  <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
                </FormControl>
                <Button
                  w="full"
                  bg="brand.primary"
                  color="white"
                  _hover={{ bg: "brand.accent" }}
                  type="submit"
                  isLoading={isLoading}
                >
                  Send Message
                </Button>
              </VStack>
            </form>
          </VStack>
        </Grid>
      </Center>
    </Box>
  );
};

export default ContactUs;
