import React, { useState } from "react";
import { Box, FormLabel, FormControl, Input, Text } from "@chakra-ui/react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import "../assets/css/billingInfo.css";
const BillingInfo = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const selectCountry = (val) => {
    setCountry(val);
  };

  const selectRegion = (val) => {
    setRegion(val);
  };

  return (
    <>
      <Box>
        <Text fontSize="xl" fontWeight="bold" mb="10px">
          Billing Information
        </Text>
        <FormControl id="name" isRequired>
          <FormLabel>Full Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="address" isRequired>
          <FormLabel>Address</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="city" isRequired>
          <FormLabel>City</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="country" isRequired>
          <FormLabel>Country</FormLabel>
          <CountryDropdown
            value={country}
            onChange={(val) => selectCountry(val)}
            priorityOptions={["CA", "US"]}
          />
        </FormControl>
        <FormControl id="region" isRequired>
          <FormLabel>State/Province</FormLabel>
          <RegionDropdown
            country={country}
            value={region}
            onChange={(val) => selectRegion(val)}
            disableWhenEmpty={true}
            defaultOptionLabel="Select State/Province"
          />
        </FormControl>
        <FormControl id="zip" isRequired>
          <FormLabel>Zip/Postal Code</FormLabel>
          <Input type="text" />
        </FormControl>
      </Box>
    </>
  );
};

export default BillingInfo;
