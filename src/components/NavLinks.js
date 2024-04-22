import React from "react";
import { NavLink } from "react-router-dom";
import { Box, HStack, Link } from "@chakra-ui/react";

const NavLinks = () => {
  const links = [
    { title: "About Us", to: "/about-us" },
    { title: "Services", to: "/services" },
    { title: "Gift Cards", to: "/gift-cards" },
    { title: "Refer a Friend", to: "/refer-a-friend" },
    { title: "Contact Us", to: "/contact-us" },
  ];

  return (
    <Box>
      <HStack spacing={5}>
        {links.map((link) => (
          <Link
            key={link.title}
            as={NavLink}
            to={link.to}
            _hover={{
              fontSize: "19px",
            }}
            fontSize="16px"
            transition="font-size 0.3s"
            textDecoration="none"
            color="white"
            fontWeight={500}
          >
            {link.title}
          </Link>
        ))}
      </HStack>
    </Box>
  );
};

export default NavLinks;
