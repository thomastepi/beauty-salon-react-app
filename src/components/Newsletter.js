import React from "react";
import useIsMobile from "../hooks/useIsMobile";
import {
  Box,
  Button,
  Center,
  Text,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  HStack,
} from "@chakra-ui/react";

const Newsletter = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <Center>
        <Box>
          <VStack spacing={4}>
            <Heading>Subscribe</Heading>
            <Text align="center">
              Get the latest news and updates from Annette's Beauty & SPA
            </Text>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <HStack flexDir={isMobile && "column"}>
                <Input borderRadius="none" type="email" />
                <Button>Subscribe</Button>
              </HStack>
              <FormHelperText align={isMobile && "center"}>
                We'll never share your email.
              </FormHelperText>
            </FormControl>
          </VStack>
        </Box>
      </Center>
    </>
  );
};

export default Newsletter;
