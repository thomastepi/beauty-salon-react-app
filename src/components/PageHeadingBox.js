import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const PageHeadingBox = ({ title, img }) => {
  return (
    <>
      <Box
        w="90%"
        bg="#413543"
        bgImg={img}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        bgPos={"center"}
        py="12rem"
        mb="70px"
      >
        <Heading fontFamily={"pacifico"} size="2xl" align="center">
          {title}
        </Heading>
      </Box>
    </>
  );
};

export default PageHeadingBox;
