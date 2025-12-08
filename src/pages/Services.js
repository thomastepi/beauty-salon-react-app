import React from "react";
import {
  Box,
  VStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
} from "@chakra-ui/react";
import { PageHeadingBox, HairServices, SpaServices } from "../components";

const Services = () => {
  return (
    <Box bg="brand.background">
      <PageHeadingBox
        title="Relax, Rejuvenate, and Beautify"
        img={`${process.env.REACT_APP_IMAGEKIT_URL}/salon-app/spa-natural-background.jpg`}
      />
      <Center py={{ base: 10, md: 20 }}>
        <VStack w="100%" maxW="1200px" spacing={12}>
          <Tabs variant="soft-rounded" colorScheme="purple" size="lg">
            <TabList justifyContent="center">
              <Tab
                _selected={{ color: "white", bg: "brand.primary" }}
                _hover={{ bg: "brand.accent" }}
                m={2}
              >
                Hair Services
              </Tab>
              <Tab
                _selected={{ color: "white", bg: "brand.primary" }}
                _hover={{ bg: "brand.accent" }}
                m={2}
              >
                SPA Services
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <HairServices />
              </TabPanel>
              <TabPanel>
                <SpaServices />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </Center>
    </Box>
  );
};

export default Services;
