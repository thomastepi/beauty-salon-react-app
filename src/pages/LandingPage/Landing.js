import { useNavigate } from "react-router-dom";
import GoogleMaps from "../../components/GoogleMaps";
import {
  Box,
  Button,
  Center,
  Text,
  VStack,
  Grid,
  Heading,
  HStack,
  useBreakpointValue,
  Link,
  Input,
} from "@chakra-ui/react";

const Landing = () => {
  const isMobile = useBreakpointValue(
    { base: true, md: true, lg: false },
    { ssr: false }
  );
  const navigate = useNavigate();

  return (
    <Box bg="#000" color="white">
      <Box h={!isMobile && "80vh"}>
        <Center>
          <Box w="95%">
            <Grid
              templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)"}
              gap={9}
            >
              <Box
                align="center"
                bg="#413543"
                h="80vh"
                bgImg={`${process.env.REACT_APP_IMAGEKIT_URL}/salon-app/godisable.jpg`}
                bgRepeat={"no-repeat"}
                bgSize={"cover"}
                pos={"relative"}
              >
                <Box color="white" pos={"absolute"} top={5} left={5}></Box>
                <VStack
                  spacing={6}
                  color="white"
                  bg="rgba(0, 0, 0, 0.6)"
                  py={9}
                  pos={"absolute"}
                  bottom={10}
                  right={0}
                  w="60%"
                >
                  <Heading as="h2" size="xl" fontFamily={"Playfair Display"}>
                    Style & Grace
                  </Heading>
                  <Text fontFamily={"Sacramento"} fontSize="3xl">
                    Treat Your Hair
                  </Text>
                  <Button
                    as={Link}
                    href="https://appt.link/meet-with-annettes-beauty-spa-92jVHJt1"
                    target="_blank"
                    rel="no_opener no_referrer"
                    style={{ textDecoration: "none" }}
                    borderRadius={"0"}
                    colorScheme="pink"
                  >
                    Book Now
                  </Button>
                </VStack>
              </Box>
              <Box
                align="center"
                bg="#413543"
                h="80vh"
                bgImg={`${process.env.REACT_APP_IMAGEKIT_URL}/salon-app/bone-straight.jpg`}
                bgRepeat={"no-repeat"}
                bgSize={"cover"}
                pos={"relative"}
              >
                <VStack
                  spacing={6}
                  color="white"
                  bg="rgba(0, 0, 0, 0.6)"
                  py={9}
                  pos={"absolute"}
                  bottom={10}
                  right={0}
                  w="60%"
                >
                  <Heading as="h2" size="xl" fontFamily={"Playfair Display"}>
                    Pure Elegance
                  </Heading>
                  <Text fontFamily={"Sacramento"} fontSize="3xl">
                    Check Us Out
                  </Text>
                  <Button
                    onClick={() => {
                      navigate("/services");
                    }}
                    borderRadius={"0"}
                    colorScheme="pink"
                  >
                    Our Services
                  </Button>
                </VStack>
              </Box>
            </Grid>
          </Box>
        </Center>
      </Box>
      <Center>
        <Box w={isMobile ? "85%" : "70%"} py="6rem" align="center">
          <VStack spacing={8}>
            <Heading fontFamily="pacifico" size="2xl">
              Your Oasis of Relaxation in Mile 3, Bamenda
            </Heading>
            <Text fontSize="lg" lineHeight="tall">
              Annette’s Beauty & Spa has been a cornerstone of beauty and
              relaxation in Mile 3, Bamenda for over 5 years. As our beloved
              community grew, so did we. We've expanded into a modern, larger
              space and welcomed more talented stylists to our family to better
              serve you. Today, we’re proud to be a trusted destination for
              beautiful styles and a welcoming salon experience. We are
              committed to making you feel special, every time you walk through
              our doors.
            </Text>
            <Button
              as={Link}
              href="https://appt.link/meet-with-annettes-beauty-spa-92jVHJt1"
              target="_blank"
              rel="no_opener no_referrer"
              style={{ textDecoration: "none" }}
              borderRadius={"0"}
              p="25px"
              colorScheme="pink"
            >
              SCHEDULE AN APPOINTMENT
            </Button>
          </VStack>
        </Box>
      </Center>

      <Box bg="#1A202C" py="6rem">
        <Center>
          <VStack spacing={8} w="90%">
            <Heading fontFamily="Playfair Display" size="2xl" color="white">
              Our Services
            </Heading>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              gap={8}
              w="100%"
            >
              <Box bg="gray.700" p={6} borderRadius="lg" textAlign="center">
                <Heading size="lg" fontFamily="Playfair Display" color="white">
                  Hair Care
                </Heading>
                <Text color="gray.300" mt={4}>
                  From stylish cuts to vibrant coloring, we'll give you the hair
                  you've always dreamed of.
                </Text>
              </Box>
              <Box bg="gray.700" p={6} borderRadius="lg" textAlign="center">
                <Heading size="lg" fontFamily="Playfair Display" color="white">
                  Nail Services
                </Heading>
                <Text color="gray.300" mt={4}>
                  Indulge in our luxurious manicures and pedicures, and leave
                  with perfectly polished nails.
                </Text>
              </Box>
              <Box bg="gray.700" p={6} borderRadius="lg" textAlign="center">
                <Heading size="lg" fontFamily="Playfair Display" color="white">
                  Spa Treatments
                </Heading>
                <Text color="gray.300" mt={4}>
                  Relax and rejuvenate with our range of spa treatments,
                  including facials and massages.
                </Text>
              </Box>
            </Grid>
          </VStack>
        </Center>
      </Box>

      <Box bg="#000" py="6rem">
        <Center>
          <VStack spacing={8} w="90%">
            <Heading
              fontFamily="Playfair Display"
              size="2xl"
              color="white"
              textAlign="center"
            >
              What Our Clients Say
            </Heading>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              gap={8}
              w="100%"
            >
              <Box bg="gray.800" p={6} borderRadius="lg" textAlign="center">
                <HStack spacing={1} justify="center" mb={4}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} role="img" aria-label="star">
                      ⭐
                    </span>
                  ))}
                </HStack>
                <Text color="gray.300" fontStyle="italic">
                  "Annette's is the best salon in town! I always leave feeling
                  beautiful and refreshed."
                </Text>
                <Text color="white" fontWeight="bold" mt={4}>
                  - Luiza Takem
                </Text>
              </Box>
              <Box bg="gray.800" p={6} borderRadius="lg" textAlign="center">
                <HStack spacing={1} justify="center" mb={4}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} role="img" aria-label="star">
                      ⭐
                    </span>
                  ))}
                </HStack>
                <Text color="gray.300" fontStyle="italic">
                  "I've been coming to Annette's for years, and I'm never
                  disappointed. The stylists are so talented!"
                </Text>
                <Text color="white" fontWeight="bold" mt={4}>
                  - Pamela Ashu
                </Text>
              </Box>
              <Box bg="gray.800" p={6} borderRadius="lg" textAlign="center">
                <HStack spacing={1} justify="center" mb={4}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} role="img" aria-label="star">
                      ⭐
                    </span>
                  ))}
                </HStack>
                <Text color="gray.300" fontStyle="italic">
                  "The best massages in Bamenda! I always leave feeling relaxed
                  and rejuvenated."
                </Text>
                <Text color="white" fontWeight="bold" mt={4}>
                  - Blaise Akoni
                </Text>
              </Box>
            </Grid>
          </VStack>
        </Center>
      </Box>

      <Box bg="#1A202C" py="6rem">
        <Center>
          <VStack spacing={8} w="90%">
            <Heading fontFamily="Playfair Display" size="2xl" color="white">
              Google Reviews
            </Heading>
            <HStack spacing={1} justify="center" mb={4}>
              <Text color="white" fontWeight="bold" fontSize="2xl">
                4.9
              </Text>
              {[...Array(5)].map((_, i) => (
                <span key={i} role="img" aria-label="star">
                  ⭐
                </span>
              ))}
              <Link
                href="https://www.google.com/search?q=site%3Aannette.thomastepi.com
"
                isExternal
                color="blue.400"
              >
                (245 reviews)
              </Link>
            </HStack>
          </VStack>
        </Center>
      </Box>

      <Box bg="#000" py="6rem">
        <Center>
          <VStack spacing={8} w="90%">
            <Heading fontFamily="Playfair Display" size="2xl" color="white">
              Our Gallery
            </Heading>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              gap={8}
              w="100%"
            >
              <Box
                h="300px"
                bgImg={`${process.env.REACT_APP_IMAGEKIT_URL}/salon-app/curly-hair.jpg?updatedAt=1714865888596`}
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPos="center"
                borderRadius="lg"
              ></Box>
              <Box
                h="300px"
                bgImg={`${process.env.REACT_APP_IMAGEKIT_URL}/salon-app/good-faces.jpg?updatedAt=1714865898309`}
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPos="center"
                borderRadius="lg"
              ></Box>
              <Box
                h="300px"
                bgImg={`${process.env.REACT_APP_IMAGEKIT_URL}/salon-app/black-braids.jpg`}
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPos="center"
                borderRadius="lg"
              ></Box>
              <Box
                h="300px"
                bgImg={`${process.env.REACT_APP_IMAGEKIT_URL}/salon-app/cream-braids.jpg`}
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPos="center"
                borderRadius="lg"
              ></Box>
            </Grid>
          </VStack>
        </Center>
      </Box>

      <Box bg="#1A202C" py="6rem">
        <Center>
          <VStack spacing={8} w={{ base: "90%", md: "60%" }} textAlign="center">
            <Heading fontFamily="Playfair Display" size="2xl" color="white">
              Subscribe to Our Newsletter
            </Heading>
            <Text color="gray.300">
              Stay up to date with our latest news, offers, and promotions.
            </Text>
            <HStack>
              <Input
                placeholder="Enter your email"
                size="lg"
                bg="gray.800"
                color="white"
                borderColor="gray.700"
              />
              <Button colorScheme="pink" size="lg">
                Subscribe
              </Button>
            </HStack>
          </VStack>
        </Center>
      </Box>

      <Center bg="#1A202C">
        <Box w={isMobile ? "85%" : "50%"}>
          <GoogleMaps h="200px" />
        </Box>
      </Center>
    </Box>
  );
};

export default Landing;
