import { Route, Routes } from "react-router";
import Login from "./features/login/Login";
import Register from "./features/register/Register";
import LoginSuccess from "./features/loginSuccess/LoginSuccess";
import ForgotPasswordEmail from "./features/forgotPassword/ForgotPasswordEmail";
import ForgotPasswordCode from "./features/forgotPassword/ForgotPasswordCode";
import ForgotPasswordConfirm from "./features/forgotPassword/ForgotPasswordConfirm";
import Home from "./pages/home/Home";

function App() {
  return <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotPasswordEmail" element={<ForgotPasswordEmail />} />
      <Route path="/forgotPasswordCode" element={<ForgotPasswordCode />} />
      <Route path="/forgotPasswordConfirm" element={<ForgotPasswordConfirm />} />
      <Route path="/loginSuccess" element={<LoginSuccess />} />
      <Route path="/home" element={<Home />} />
    </Routes>;
}

export default App;
