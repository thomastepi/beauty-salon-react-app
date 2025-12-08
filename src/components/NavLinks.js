import { NavLink, useLocation } from "react-router-dom";
import { Box, Stack, Link } from "@chakra-ui/react";

const NavLinks = ({ flexDir, onClose, isScrolled }) => {
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

  const getLinkStyle = (active) => {
    if (isScrolled) {
      return {
        color: active ? "brand.primary" : "brand.text",
        borderColor: active ? "brand.primary" : "transparent",
      };
    }
    return {
      color: active ? "white" : "brand.textMuted", // Use textMuted for inactive links on transparent background
      borderColor: active ? "white" : "transparent",
    };
  };

  return (
    <Box>
      <Stack flexDir={flexDir} alignItems="center" spacing={8}>
        {links.map((link) => {
          const active = isActive(link.to);
          const styles = getLinkStyle(active);
          return (
            <Link
              key={link.title}
              as={NavLink}
              to={link.to}
              _hover={{
                textDecoration: "none",
                color: isScrolled ? "brand.primary" : "brand.accent", // Use brand.accent for hover on transparent background
              }}
              display={{ base: "block", md: link.id === 1 ? "none" : "block" }}
              fontSize="16px"
              transition="color 0.3s"
              textDecoration="none"
              color={styles.color}
              fontWeight={active ? "700" : "500"}
              borderBottom="2px solid"
              borderColor={styles.borderColor}
              pb={1}
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

