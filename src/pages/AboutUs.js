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
import { PageHeadingBox } from "../components";

const AboutUs = () => {
  const isMobile = useBreakpointValue({ base: true, md: true, lg: false });
  return (
    <>
      <Center>
        <VStack>
          <PageHeadingBox
            title="More Than Just a Salon"
            img={`${process.env.REACT_APP_IMAGEKIT_URL}/salon-app/perfume-bottle.jpg`}
          />
          <Box w="60%" py="90px">
            <HStack flexDir={isMobile && "column"} spacing={5}>
              <VStack spacing={4}>
                <Text>
                  My passion for hair and beauty began at a young age. After
                  years of refining my skills in salons, I wanted to create a
                  space that reflected my own vision. That dream became
                  Annette’s Beauty & Spa.
                </Text>
                <Text>
                  For 5 years, we’ve grown alongside our clients. Last year, we
                  moved into a larger, modern space in Mile 3 to better welcome
                  our increasing clientele. With more braiding seats and five
                  new stylists, our team is now able to serve more guests while
                  maintaining the same warmth and attention that built our
                  reputation.
                </Text>
                <Text>
                  Annette’s Beauty & Spa is more than a salon, it’s a community
                  space where confidence and beauty meet in a welcoming
                  environment.
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
                <Text>
                  We focus on creating a personalized and relaxing experience
                  for each client. Our stylists take the time to understand your
                  individual needs and preferences.
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
    </>
  );
};

export default AboutUs;
