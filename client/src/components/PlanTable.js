import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Container,
} from "@chakra-ui/react";
import { Switch } from "@chakra-ui/switch";
import { useNavigate } from "react-router-dom";
import { UserState } from "../Context/UserProvider";

const PlanTable = () => {
  const { setPlan } = UserState();
  const [isYearly, setIsYearly] = useState(false);
  const navigate = useNavigate();

  const plans = [
    {
      type: "Mobile",
      monthlyPrice: "₹100",
      yearlyPrice: "₹1000",
      videoQuality: "Good",
      resolution: "480p",
      devices: ["Phone"],
    },
    {
      type: "Basic",
      monthlyPrice: "₹200",
      yearlyPrice: "₹2000",
      videoQuality: "Good",
      resolution: "720p",
      devices: ["Phone", "Tablet"],
    },
    {
      type: "Standard",
      monthlyPrice: "₹500",
      yearlyPrice: "₹5000",
      videoQuality: "Better",
      resolution: "1080p",
      devices: ["Phone", "Tablet", "Computer"],
    },
    {
      type: "Premium",
      monthlyPrice: "₹700",
      yearlyPrice: "₹7000",
      videoQuality: "Best",
      resolution: "4K + HDR",
      devices: ["Phone", "Tablet", "Computer", "TV"],
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(plans[0]);

  const handlePlanClick = (index) => {
    const selected = plans[index];
    setSelectedPlan(selected);

    // Determine the billing cycle and set the price accordingly
    const price = isYearly ? selected.yearlyPrice : selected.monthlyPrice;

    // Create an object with selected plan data
    const planData = {
      type: selected.type,
      billingCycle: isYearly ? "Yearly" : "Monthly",
      price: price,
    };

    setPlan(planData);
  };

  const handleNextButtonClick = () => {
    navigate("/payment");
  };

  return (
    <Container>
      <h2>Choose the right plan for you</h2>
      <Switch
        colorScheme="teal"
        size="lg"
        isChecked={isYearly}
        onChange={() => setIsYearly(!isYearly)}
        mr={4}
      >
        {isYearly ? "Yearly" : "Monthly"}
      </Switch>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th></Th>
            {plans.map((plan, index) => (
              <Th
                key={index}
                onClick={() => handlePlanClick(index)}
                cursor="pointer"
                color={selectedPlan.type === plan.type ? "blue" : "black"}
              >
                {plan.type}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{isYearly ? "Yearly Price" : "Monthly Price"}</Td>
            {plans.map((plan, index) => (
              <Td
                key={index}
                style={{
                  color: selectedPlan === plan ? "blue" : "black",
                }}
              >
                {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              </Td>
            ))}
          </Tr>
          <Tr>
            <Td>Video Quality</Td>
            {plans.map((plan, index) => (
              <Td
                key={index}
                style={{
                  color: selectedPlan === plan ? "blue" : "black",
                }}
              >
                {plan.videoQuality}
              </Td>
            ))}
          </Tr>
          <Tr>
            <Td>Resolution</Td>
            {plans.map((plan, index) => (
              <Td
                key={index}
                style={{
                  color: selectedPlan === plan ? "blue" : "black",
                }}
              >
                {plan.resolution}
              </Td>
            ))}
          </Tr>
          <Tr>
            <Td>Devices You Can Watch</Td>
            {plans.map((plan, index) => (
              <Td
                key={index}
                style={{
                  color: selectedPlan === plan ? "blue" : "black",
                }}
              >
                {plan.devices.join(", ")}
              </Td>
            ))}
          </Tr>
        </Tbody>
      </Table>

      <Button
        mt={4}
        bgColor="darkblue"
        color="white"
        w="30%"
        borderRadius="none"
        onClick={handleNextButtonClick}
      >
        Next
      </Button>
    </Container>
  );
};

export default PlanTable;
