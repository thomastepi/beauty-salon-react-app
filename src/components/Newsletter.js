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
import AlertBox from "./AlertBox";

const Newsletter = () => {
  const [alert, setAlert] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const isMobile = useIsMobile();

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlert(false);
    setIsLoading(true);
    setTimeout(() => {
      setAlert(true);
      setIsLoading(false);
      setEmail("");
    }, 2000);
  };
  return (
    <Box>
      <Center mt={isMobile && "20px"}>
        <Box>
          <VStack spacing={4}>
            <Heading>Subscribe</Heading>
            <Text align="center">
              Get the latest news and updates from Annette's Beauty & SPA
            </Text>
            <form style={{ width: "100%" }} onSubmit={handleSubmit}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <HStack flexDir={isMobile && "column"}>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    borderRadius="none"
                    type="email"
                  />
                  <Button
                    isLoading={isLoading}
                    disabled={isLoading}
                    type="submit"
                  >
                    Subscribe
                  </Button>
                </HStack>
                <FormHelperText align={isMobile && "center"}>
                  We'll never share your email.
                </FormHelperText>
              </FormControl>
            </form>
            {alert && (
              <AlertBox
                status="success"
                title="Success!"
                description={`You have successfully subscribed to our newsletter.`}
                setAlert={setAlert}
              />
            )}
          </VStack>
        </Box>
      </Center>
    </Box>
  );
};

export default Newsletter;
