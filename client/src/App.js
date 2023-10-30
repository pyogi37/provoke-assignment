import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/AuthPage";
import Homepage from "./pages/Homepage";
import Payment from "./components/Payment";
import { UserState } from "./Context/UserProvider";
import { Box } from "@chakra-ui/react";

function App() {
  const { user } = UserState();
  return (
    <Box className="App" w={"100vw"} h={"100vh"} bgColor={"darkblue"}>
      <Routes>
        <Route path="/" Component={AuthPage}></Route>
        {user && <Route path="/home" Component={Homepage}></Route>}
        {user && <Route path="/payment" Component={Payment}></Route>}
      </Routes>
    </Box>
  );
}

export default App;
