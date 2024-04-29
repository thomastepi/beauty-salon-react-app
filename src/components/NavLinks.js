import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Stack, Link } from "@chakra-ui/react";

const NavLinks = ({ flexDir }) => {
  const links = [
    { title: "About Us", to: "/about-us" },
    { title: "Services", to: "/services" },
    { title: "Gift Cards", to: "/gift-cards" },
    { title: "Gallery", to: "/gallery" },
    { title: "Contact Us", to: "/contact-us" },
  ];

  return (
    <Box>
      <Stack flexDir={flexDir} alignItems="center" spacing={5}>
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
      </Stack>
    </Box>
  );
};

export default NavLinks;
