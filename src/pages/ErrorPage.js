import React from "react";
import {
  Box,
  Image,
  Text,
  Link,
  Heading,
  VStack,
  Button,
  Center,
} from "@chakra-ui/react";

const ErrorPage = () => {
  return (
    <Box>
      <Center pt="18px">
        <VStack spacing={7}>
          <Image
            src={`${process.env.REACT_APP_IMAGEKIT_URL}/salon-app/page_not_found.svg`}
            alt="Page Not Found"
          />
          <Heading>Page Not Found</Heading>
          <Text>Sorry, the page you are looking for does not exist.</Text>
          <Link href="/">
            <Button colorScheme="blackAlpha">Go Back Home</Button>
          </Link>
        </VStack>
      </Center>
    </Box>
  );
};

export default ErrorPage;
