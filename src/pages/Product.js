import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../utils/products";
import {
  Center,
  VStack,
  Grid,
  useBreakpointValue,
  Box,
  Heading,
  Text,
  FormControl,
  Input,
  Textarea,
  FormLabel,
  Button,
  useToast,
} from "@chakra-ui/react";
import { PageHeadingBox, StaticGiftCard } from "../components";
import SharedLayout from "./SharedLayout";
import { addToCart } from "../features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  updateRecipientEmail,
  updateSenderName,
  updateMessage,
  resetForm,
} from "../features/giftCard/giftCardFormSlice";

const Product = () => {
  const toast = useToast();
  const { productId } = useParams();
  const parsedProductId = parseInt(productId);
  const product = products.find((product) => product.id === parsedProductId);

  const cardFormData = useSelector((state) => state.giftCardForm);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (!cardFormData.recipientEmail || !cardFormData.senderName) {
      toast({
        description: "Please fill out the recipient and sender fields",
        status: "error",
        position: "top",
      });
      return;
    }
    dispatch(addToCart({ ...product, ...cardFormData }));
    dispatch(resetForm());
    navigate("/cart");
  };

  return (
    <>
      <SharedLayout>
        <Center>
          <VStack w="100%">
            <PageHeadingBox
              img={`${process.env.REACT_APP_IMAGEKIT_URL}/salon-app/black-braids.jpg`}
              title="Personalize Your Gift Card"
            />
            <Grid
              templateColumns={useBreakpointValue({
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
              })}
              gap={9}
            >
              <Box>
                <StaticGiftCard price={product.price} />
              </Box>
              <Box>
                <VStack alignItems="start" spacing={3}>
                  <Heading>${product.price} Gift Card</Heading>
                  <Text>${product.price}</Text>
                  <Box w="100%">
                    <form>
                      <FormControl mt="15px" isRequired id="name">
                        <FormLabel>Recipient</FormLabel>
                        <Input
                          borderRadius={0}
                          placeholder="Enter Recipient Email"
                          type="email"
                          value={cardFormData.recipientEmail}
                          onChange={(e) =>
                            dispatch(updateRecipientEmail(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormControl mt="15px" isRequired id="email">
                        <FormLabel>From</FormLabel>
                        <Input
                          borderRadius={0}
                          placeholder="Enter Your Name"
                          type="text"
                          value={cardFormData.senderName}
                          onChange={(e) =>
                            dispatch(updateSenderName(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormControl mt="15px" id="message">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderRadius={0}
                          placeholder="Add a Message (Optional)"
                          value={cardFormData.message}
                          onChange={(e) =>
                            dispatch(updateMessage(e.target.value))
                          }
                        />
                      </FormControl>
                    </form>
                  </Box>
                  <Button onClick={handleAddToCart} size="lg">
                    Add to Cart
                  </Button>
                </VStack>
              </Box>
            </Grid>
          </VStack>
        </Center>
      </SharedLayout>
    </>
  );
};

export default Product;
