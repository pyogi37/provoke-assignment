import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { UserState } from "../Context/UserProvider";
import PlanTable from "../components/PlanTable";

const Homepage = () => {
  const { user } = UserState();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <Box>
      {/* Navbar */}
      {user && (
        <Flex
          p={4}
          alignItems="center"
          boxShadow="base"
          bg="lavenderblush"
          w={"100vw"}
        >
          <Text fontSize="lg" color={"GrayText"}>
            Welcome, {user.name} !!
          </Text>
          <Spacer />
          <Button colorScheme="red" onClick={logoutHandler}>
            Logout
          </Button>
        </Flex>
      )}

      <Box
        bg="white"
        w="100%"
        p={4}
        color="black"
        borderRadius="lg"
        borderWidth="1px"
        mt={"10vh"}
      >
        <PlanTable />
      </Box>
    </Box>
  );
};

export default Homepage;
