import { NavLink, useLocation } from "react-router-dom";
import { Box, Stack, Link } from "@chakra-ui/react";

const NavLinks = ({ flexDir, onClose }) => {
  const links = [
    { id: 1, title: "Home", to: "/" },
    { id: 2, title: "About Us", to: "/about-us" },
    { id: 3, title: "Services", to: "/services" },
    { id: 4, title: "Gift Cards", to: "/gift-cards" },
    { id: 5, title: "Gallery", to: "/gallery" },
    { id: 6, title: "Contact Us", to: "/contact-us" },
  ];

  const location = useLocation();
  const currentPath = location.pathname;
  console.log("currentPath", currentPath);

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
            display={{ base: "block", md: link.id === 1 ? "none" : "block" }}
            fontSize="16px"
            transition="font-size 0.3s"
            textDecoration="none"
            color={currentPath === link.to ? "gray.300" : "gray.500"}
            fontWeight={500}
            onClick={onClose}
          >
            {link.title}
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default NavLinks;
