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

  const { pathname } = useLocation();

  const isGiftCardsContext =
    pathname === "/gift-cards" ||
    pathname.startsWith("/gift-cards/") ||
    pathname.startsWith("/product/") ||
    pathname === "/cart" ||
    pathname === "/checkout";

  const isActive = (linkTo) =>
    linkTo === "/gift-cards"
      ? isGiftCardsContext
      : pathname === linkTo || pathname.startsWith(`${linkTo}/`);

  return (
    <Box>
      <Stack flexDir={flexDir} alignItems="center" spacing={5}>
        {links.map((link) => {
          const active = isActive(link.to);
          return (
            <Link
              key={link.title}
              as={NavLink}
              to={link.to}
              _hover={{ fontSize: "19px" }}
              display={{ base: "block", md: link.id === 1 ? "none" : "block" }}
              fontSize="16px"
              transition="font-size 0.3s"
              textDecoration="none"
              color={active ? "gray.300" : "gray.500"}
              fontWeight={active ? 700 : 500}
              borderBottom={active ? "2px solid" : "2px solid transparent"}
              borderColor={active ? "gray.300" : "transparent"}
              onClick={onClose}
            >
              {link.title}
            </Link>
          );
        })}
      </Stack>
    </Box>
  );
};

export default NavLinks;
