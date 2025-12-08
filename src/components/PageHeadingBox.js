import React from "react";
import { Box, Heading, Center } from "@chakra-ui/react";

const PageHeadingBox = ({ title, img }) => {
  return (
    <Box
      w="100%"
      bgImage={`url(${img})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      py={{ base: "8rem", md: "10rem" }}
      position="relative"
      _after={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        zIndex: 1,
      }}
    >
      <Center position="relative" zIndex={2}>
        <Heading
          color="white"
          fontFamily="heading"
          fontSize={{ base: "4xl", md: "6xl" }}
          textAlign="center"
        >
          {title}
        </Heading>
      </Center>
    </Box>
  );
};

export default PageHeadingBox;
