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
} from "@chakra-ui/react";
import img from "../assets/images/black-braids.jpg";
import { PageHeadingBox, StaticGiftCard } from "../components";
import SharedLayout from "./SharedLayout";
import { addToCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const Product = () => {
  const { productId } = useParams();
  const parsedProductId = parseInt(productId);
  const product = products.find((product) => product.id === parsedProductId);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <>
      <SharedLayout>
        <Center>
          <VStack w="100%">
            <PageHeadingBox img={img} title="Product" />
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
                        />
                      </FormControl>
                      <FormControl mt="15px" isRequired id="email">
                        <FormLabel>From</FormLabel>
                        <Input
                          borderRadius={0}
                          placeholder="Enter Your Name"
                          type="text"
                        />
                      </FormControl>
                      <FormControl mt="15px" id="message">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderRadius={0}
                          placeholder="Add a Message (Optional)"
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
