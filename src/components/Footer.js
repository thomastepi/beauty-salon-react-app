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
  faInstagram,
  faWhatsapp,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
const Footer = ({ m = "0 0 0 0" }) => {
  return (
    <>
      <Box bg="#191919" color="white" pt={4} borderTop="1px solid white" m={m}>
        <Center>
          <VStack spacing={"50px"}>
            <VStack>
              <Heading>Hours</Heading>
              <Text>Monday - Friday: 9am - 7pm</Text>
              <Text>Saturday: 9am - 5pm</Text>
              <Text>Sunday: Closed</Text>
            </VStack>
            <HStack>
              <Button
                as="a"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer noopener"
                colorScheme="black"
              >
                {<FontAwesomeIcon size="2xl" icon={faFacebook} />}
              </Button>
              <Button
                as="a"
                href="https://wa.me/12144314816"
                target="_blank"
                rel="noreferrer noopener"
                colorScheme="black"
              >
                {<FontAwesomeIcon size="2xl" icon={faWhatsapp} />}
              </Button>
              <Button
                as="a"
                href="https://www.tiktok.com/@phase_nine"
                target="_blank"
                rel="noreferrer noopener"
                colorScheme="black"
              >
                {<FontAwesomeIcon size="2xl" icon={faTiktok} />}
              </Button>
              <Button
                as="a"
                href="https://www.instagram.com/tt_tepi"
                target="_blank"
                rel="noreferrer noopener"
                colorScheme="black"
              >
                {<FontAwesomeIcon size="2xl" icon={faInstagram} />}
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
