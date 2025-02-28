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
  FormControl,
  FormHelperText,
  HStack,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { PageHeadingBox, GoogleMaps, AlertBox } from "../components";

const ContactUs = () => {
  const [alert, setAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string().required("Required"),
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
    <>
      <Center>
        <VStack w="100%">
          <PageHeadingBox
            img={`${process.env.REACT_APP_IMAGEKIT_URL}/salon-app/posing-together.jpg`}
            title="We'd love to hear from you!"
          />
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
              Have a question, comment, or concern? Fill out the form below and
              we'll get back to you as soon as possible.
            </Text>
            <form onSubmit={formik.handleSubmit}>
              <VStack>
                <FormControl
                  isInvalid={formik.touched.name && formik.errors.name}
                >
                  <Input
                    {...formik.getFieldProps("name")}
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    focusBorderColor="white"
                    borderRadius="0"
                    borderStyle="none none solid none"
                    _focus={{ borderStyle: "solid" }}
                  />
                  <FormHelperText color="red">
                    {formik.errors.name}
                  </FormHelperText>
                </FormControl>
                <FormControl
                  isInvalid={formik.touched.email && formik.errors.email}
                >
                  <Input
                    {...formik.getFieldProps("email")}
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    focusBorderColor="white"
                    borderRadius="0"
                    borderStyle="none none solid none"
                    _focus={{ borderStyle: "solid" }}
                  />
                  <FormHelperText color="red">
                    {formik.errors.email}
                  </FormHelperText>
                </FormControl>
                <FormControl
                  isInvalid={formik.touched.message && formik.errors.message}
                >
                  <Textarea
                    {...formik.getFieldProps("message")}
                    name="message"
                    placeholder="Your Message"
                    focusBorderColor="white"
                    borderRadius="0"
                    borderStyle="none none solid none"
                    _focus={{ borderStyle: "solid" }}
                  />
                  <FormHelperText color="red">
                    {formik.errors.message}
                  </FormHelperText>
                </FormControl>
                <Button
                  w="full"
                  colorScheme="whiteAlpha"
                  type="submit"
                  disabled={isLoading}
                  isLoading={isLoading}
                >
                  Send Message
                </Button>
              </VStack>
            </form>
            {alert && (
              <Box mt="15px" w={!isMobile && "70%"}>
                <AlertBox
                  setAlert={setAlert}
                  status="success"
                  title="Success!"
                  description="Your message has been received. We will respond within the next 48 hours."
                />
              </Box>
            )}
          </Stack>
        </VStack>
      </Center>
    </>
  );
};

export default ContactUs;
