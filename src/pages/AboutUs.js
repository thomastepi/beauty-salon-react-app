import {
  Box,
  VStack,
  Heading,
  Text,
  Grid,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { PageHeadingBox } from "../components";
import faceCard from "../assets/images/face-card.jpg";
import salonInterior from "../assets/images/salon-interior2.jpg";

const AboutUs = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const Section = ({ image, title, children, reverse = false }) => (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
      gap={10}
      alignItems="center"
      py={{ base: 10, md: 20 }}
      px={{ base: 6, md: 12 }}
    >
      <Box order={isMobile ? 1 : reverse ? 2 : 1}>
        <Image src={image} alt={title} borderRadius="lg" boxShadow="xl" />
      </Box>
      <VStack
        order={isMobile ? 2 : reverse ? 1 : 2}
        spacing={5}
        align="flex-start"
      >
        <Heading as="h2" fontFamily="heading" size="2xl">
          {title}
        </Heading>
        {children}
      </VStack>
    </Grid>
  );

  return (
    <Box bg="brand.background">
      <PageHeadingBox
        title="More Than Just a Salon"
        img={`${process.env.REACT_APP_IMAGEKIT_URL}/salon-app/perfume-bottle.jpg`}
      />

      <Box maxW="1200px" mx="auto">
        <Section image={faceCard} title="Our Story">
          <Text>
            My passion for hair and beauty began at a young age. After years of
            refining my skills in salons, I wanted to create a space that
            reflected my own vision. That dream became Annette’s Beauty & Spa.
          </Text>
          <Text>
            For 5 years, we’ve grown alongside our clients. Last year, we moved
            into a larger, modern space in Mile 3 to better welcome our
            increasing clientele. With more braiding seats and five new
            stylists, our team is now able to serve more guests while
            maintaining the same warmth and attention that built our reputation.
          </Text>
          <Text>
            Annette’s Beauty & Spa is more than a salon, it’s a community space
            where confidence and beauty meet in a welcoming environment.
          </Text>
        </Section>

        <Section image={salonInterior} title="What Makes Us Different" reverse>
          <Text>
            We focus on creating a personalized and relaxing experience for each
            client. Our stylists take the time to understand your individual
            needs and preferences.
          </Text>
          <Text>
            We use a range of high-end, organic products that are gentle on your
            hair and skin. In addition to traditional hair and beauty services,
            we also offer a variety of specialty treatments like hair
            extensions.
          </Text>
          <Text>
            We go the extra mile! We offer complimentary consultations, scalp
            massages during hair washes, and a relaxing beverage service to
            enhance the experience.
          </Text>
        </Section>
      </Box>
    </Box>
  );
};

export default AboutUs;
