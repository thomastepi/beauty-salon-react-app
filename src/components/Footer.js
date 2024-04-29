import React from "react";
import {
  Box,
  Center,
  Text,
  VStack,
  Heading,
  HStack,
  Button,
  Link,
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
      <Box
        bg="#191919"
        color="white"
        pt={4}
        borderTop="1px solid white"
        mt="75px"
      >
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
        <Center bg="black" mt="30px">
          <VStack borderTop="1px solid white" spacing={1} w="80%" py="7px">
            <Text>Made with ❤️ by Thomas Tepi</Text>
            <Link
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.thomastepi.com"
            >
              www.thomastepi.com
            </Link>
          </VStack>
        </Center>
      </Box>
    </>
  );
};

export default Footer;
