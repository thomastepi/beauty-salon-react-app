import React from "react";
import {
  Box,
  Center,
  Text,
  VStack,
  Heading,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import SharedLayout from "./SharedLayout";
import { PageHeadingBox } from "../components";

const AboutUs = () => {
  const isMobile = useBreakpointValue({ base: true, md: true, lg: false });
  return (
    <SharedLayout>
      <Box>
        <Center>
          <VStack>
            <PageHeadingBox
              title="More Than Just a Salon"
              img={`${process.env.REACT_APP_IMAGEKIT_URL}/salon-app/perfume-bottle.jpg`}
            />
            <Box w="60%" py="90px">
              <HStack flexDir={isMobile && "column"} spacing={5}>
                <VStack spacing={4}>
                  <Text fontSize="lg">
                    My passion for hair and beauty started when I was young.
                    After years of working in salons and honing my skills, I
                    felt it was time to create a space that reflected my own
                    vision for exceptional customer service and a truly relaxing
                    experience. That's how Annette's Beauty & Spa was born!
                  </Text>
                  <Text>
                    We've been open for 5 years now, and it's been incredibly
                    rewarding to see our client base grow and become a part of
                    the salon's community. A big milestone for us was winning
                    the "Best Salon in Bamenda" award last year. It was a great
                    recognition of our team's hard work and dedication.
                  </Text>
                </VStack>
                <Box
                  bg="#413543"
                  bgImg={`${process.env.REACT_APP_IMAGEKIT_URL}/salon-app/face-card.jpg`}
                  p="15rem"
                  bgRepeat={"no-repeat"}
                  bgSize={"cover"}
                  bgPos={"center"}
                ></Box>
              </HStack>
            </Box>
            <Box>
              <Heading fontFamily={"pacifico"} size="2xl" align="center">
                What Makes Us Different
              </Heading>
            </Box>
            <Box w="60%" py="90px">
              <HStack spacing={5} flexDir={isMobile && "column"}>
                <Box
                  bg="#413543"
                  bgImg={`${process.env.REACT_APP_IMAGEKIT_URL}/salon-app/salon-interior2.jpg`}
                  p="15rem"
                  bgRepeat={"no-repeat"}
                  bgSize={"cover"}
                  bgPos={"center"}
                ></Box>
                <VStack spacing={4}>
                  <Text fontSize="lg">
                    We focus on creating a personalized and relaxing experience
                    for each client. Our stylists take the time to understand
                    your individual needs and preferences.
                  </Text>
                  <Text>
                    We use a range of high-end, organic products that are gentle
                    on your hair and skin. In addition to traditional hair and
                    beauty services, we also offer a variety of specialty
                    treatments like hair extensions.
                  </Text>
                  <Text>
                    We go the extra mile! We offer complimentary consultations,
                    scalp massages during hair washes, and a relaxing beverage
                    service to enhance the experience.
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </VStack>
        </Center>
      </Box>
    </SharedLayout>
  );
};

export default AboutUs;
