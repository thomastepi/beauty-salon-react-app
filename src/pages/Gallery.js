import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { galleryImages } from "../utils/galleryImages";
import { PageHeadingBox } from "../components";
import { Box, Center, VStack, Heading } from "@chakra-ui/react";
import SharedLayout from "./SharedLayout";

const Gallery = () => {
  return (
    <SharedLayout>
      <Center>
        <VStack w="100%">
          <PageHeadingBox
            img={`${process.env.REACT_APP_IMAGEKIT_URL}/salon-app/hair-dresser.jpg`}
            title="The Art of Hair: A Visual Inspiration"
          />
          <Heading w="80%" align="center" size="lg" pb="75px">
            See how our stylists can create a look that flatters your unique
            features
          </Heading>
          <Box w="90%">
            <ImageGallery sizes="lg" items={galleryImages} />
          </Box>
        </VStack>
      </Center>
    </SharedLayout>
  );
};

export default Gallery;
