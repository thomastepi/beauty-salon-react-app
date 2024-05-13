import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  CloseButton,
} from "@chakra-ui/react";

const AlertBox = ({ status, title, description, setAlert }) => {
  return (
    <Box>
      <Alert status={status} bg="#31363F">
        <AlertIcon />
        <Box>
          <AlertTitle>{title}</AlertTitle>
          <AlertDescription>{description}</AlertDescription>
        </Box>
        <CloseButton
          alignSelf="flex-start"
          position="relative"
          right={-1}
          top={-1}
          onClick={() => {
            setAlert(false);
          }}
        />
      </Alert>
    </Box>
  );
};

export default AlertBox;
