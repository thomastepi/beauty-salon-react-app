import React from "react";
import {
  Box,
  Center,
  Text,
  VStack,
  Heading,
  HStack,
  Button,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <Box bg="black" color="white" py={4} borderTop="2px solid white" mt='75px'>
        <Center>
          <VStack spacing={"50px"}>
            <VStack>
              <Heading>Hours</Heading>
              <Text>Monday - Friday: 9am - 7pm</Text>
              <Text>Saturday: 9am - 5pm</Text>
              <Text>Sunday: Closed</Text>
            </VStack>
            <HStack>
              <Button colorScheme="black">
                {<FontAwesomeIcon size="2xl" icon={faFacebook} />}
              </Button>
              <Button colorScheme="black">
                {<FontAwesomeIcon size="2xl" icon={faTwitter} />}
              </Button>
              <Button colorScheme="black">
                {<FontAwesomeIcon size="2xl" icon={faLinkedin} />}
              </Button>
            </HStack>
            <Text>© {new Date().getFullYear()} Annette's Beauty & SPA</Text>
          </VStack>
        </Center>
      </Box>
    </>
  );
};

export default Footer;
