import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../assets/css/gallery.css";
import { galleryImages } from "../utils/galleryImages";
import { PageHeadingBox } from "../components";
import { Box, Center, VStack, Heading, Text } from "@chakra-ui/react";

const Gallery = () => {
  return (
    <Box bg="brand.background">
      <PageHeadingBox
        img={`${process.env.REACT_APP_IMAGEKIT_URL}/salon-app/hair-dresser.jpg`}
        title="Our Canvas of Creativity"
      />
      <Center py={{ base: 10, md: 20 }}>
        <VStack w="90%" maxW="1200px" spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading as="h2" fontFamily="heading" size="2xl">
              A Visual Journey
            </Heading>
            <Text maxW="600px">
              Explore our gallery to see the transformations we’ve created. From
              intricate braids to stunning updos, see how our stylists can craft
              a look that perfectly complements your unique style and
              personality.
            </Text>
          </VStack>
          <Box w="100%" boxShadow="xl" borderRadius="lg" overflow="hidden">
            <ImageGallery items={galleryImages} />
          </Box>
        </VStack>
      </Center>
    </Box>
  );
};

export default Gallery;
