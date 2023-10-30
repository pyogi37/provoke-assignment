import React, { useState } from "react";
import {
  Container,
  Box,
  Text,
  Input,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Center,
} from "@chakra-ui/react";
import { UserState } from "../Context/UserProvider";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const { plan } = UserState();
  const navigate = useNavigate();
  console.log("**************************", plan);

  if (plan.type === undefined) {
    navigate("/home");
  }

  // States for the input fields
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCVV] = useState("");

  const handleConfirmPayment = () => {
    // Handle the payment confirmation here
    if (plan.type == "Mobile")
      window.location.href = "http://buy.stripe.com/test_bIY4iufBR9M32E8aEEs";
  };

  return (
    <Center>
      <Box
        display="flex"
        justifyContent="space-around"
        w={"60vw"}
        h={"32vh"}
        mt={"34vh"}
        borderRadius={"xl"}
        p={2}
      >
        <Box
          width="60%"
          bgColor={"white"}
          display={"flex"}
          flexDir={"column"}
          p={2}
        >
          <Text fontWeight={"bold"}>Complete Payment</Text>
          <Text alignSelf={"flex-start"}>
            Enter your credit or debit card details below:
          </Text>
          <Input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            mt={4}
            mb={2}
            w={"100%"}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Input
              type="text"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              w={"48%"}
            />
            <Input
              type="text"
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
              w={"48%"}
            />
          </div>
          <Button
            bg="darkblue"
            color="white"
            w="50%"
            borderRadius="md"
            mt={2}
            mb={4}
            onClick={handleConfirmPayment}
          >
            Confirm Payment
          </Button>
        </Box>
        <Box width="40%" bgColor={"gray.300"}>
          <Text fontWeight={"bold"}>Order Summary</Text>
          <Table variant="striped">
            <Tbody>
              <Tr>
                <Td fon>Plan Name</Td>
                <Td>{plan.type}</Td>
              </Tr>
              <Tr>
                <Td>Billing Cycle</Td>
                <Td>{plan.billingCycle}</Td>
              </Tr>
              <Tr>
                <Td>Plan Price</Td>
                <Td>{plan.price}</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Center>
  );
};

export default Payment;
