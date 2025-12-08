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
  FormHelperText,
  Button,
} from "@chakra-ui/react";
import { PageHeadingBox, StaticGiftCard } from "../components";
import { addToCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { resetForm } from "../features/giftCard/giftCardFormSlice";
import { useFormik } from "formik";
import { currencify } from "../utils/currencify";
import * as Yup from "yup";

const Product = () => {
  const { productId } = useParams();
  const parsedProductId = parseInt(productId);
  const product = products.find((product) => product.id === parsedProductId);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      recipientEmail: "",
      senderName: "",
      message: "",
    },
    validationSchema: Yup.object({
      recipientEmail: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      senderName: Yup.string().required("Required"),
      message: Yup.string().max(99, "Must be 100 characters or less"),
    }),
    onSubmit: (values) => {
      dispatch(addToCart({ ...product, ...values }));
      dispatch(resetForm());
      navigate("/cart");
    },
  });

  return (
    <>
      <Center>
        <VStack w="100%">
          <PageHeadingBox
            img={`${process.env.REACT_APP_IMAGEKIT_URL}/salon-app/smiling-mary.jpg`}
            title="Personalize Your Gift Card"
          />
          <Grid
            py="5rem"
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
                <Heading>
                  {currencify(product.price, "xaf", "symbol", "", "prefix")}{" "}
                  Gift Card
                </Heading>
                <Text>
                  {currencify(product.price, "xaf", "symbol", "", "prefix")}
                </Text>
                <Box w="100%">
                  <form onSubmit={formik.handleSubmit}>
                    <VStack alignItems="start">
                      <FormControl
                        isRequired
                        isInvalid={
                          formik.touched.recipientEmail &&
                          formik.errors.recipientEmail
                        }
                      >
                        <FormLabel>Recipient Email</FormLabel>
                        <Input
                          id="recipientEmail"
                          name="recipientEmail"
                          {...formik.getFieldProps("recipientEmail")}
                          borderRadius={0}
                          placeholder="Enter Recipient Email"
                          type="email"
                        />
                        <FormHelperText color="red">
                          {formik.errors.recipientEmail}
                        </FormHelperText>
                      </FormControl>
                      <FormControl
                        isRequired
                        isInvalid={
                          formik.touched.senderName && formik.errors.senderName
                        }
                      >
                        <FormLabel>From</FormLabel>
                        <Input
                          name="senderName"
                          id="senderName"
                          {...formik.getFieldProps("senderName")}
                          borderRadius={0}
                          placeholder="Enter Your Name"
                          type="text"
                        />
                        <FormHelperText color="red">
                          {formik.errors.senderName}
                        </FormHelperText>
                      </FormControl>
                      <FormControl
                        isInvalid={
                          formik.touched.message && formik.errors.message
                        }
                      >
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          name="message"
                          id="message"
                          {...formik.getFieldProps("message")}
                          borderRadius={0}
                          placeholder="Add a Message (Optional)"
                          maxLength={100}
                          value={formik.values.message}
                        />
                        <FormHelperText>
                          {formik.values.message.length}/100 characters
                        </FormHelperText>
                        <FormHelperText color="red">
                          {formik.errors.message}
                        </FormHelperText>
                      </FormControl>
                      <Button type="submit" size="lg">
                        Add to Cart
                      </Button>
                    </VStack>
                  </form>
                </Box>
              </VStack>
            </Box>
          </Grid>
        </VStack>
      </Center>
    </>
  );
};

export default Product;
