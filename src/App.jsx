import { Route, Routes } from "react-router";
import Login from "./features/login/Login";
import Register from "./features/register/Register";
import LoginSuccess from "./features/loginSuccess/LoginSuccess";
import ForgotPasswordEmail from "./features/forgotPassword/ForgotPasswordEmail";
import ForgotPasswordCode from "./features/forgotPassword/ForgotPasswordCode";
import ForgotPasswordConfirm from "./features/forgotPassword/ForgotPasswordConfirm";
import Home from "./pages/home/Home";
import LineChart from "./components/chart/LineChart";
import BarChart from "./components/chart/BarChart";
import HomeChart from "./components/chart/HomeChart";

function App() {

  return <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotPasswordEmail" element={<ForgotPasswordEmail />} />
      <Route path="/forgotPasswordCode" element={<ForgotPasswordCode />} />
      <Route path="/forgotPasswordConfirm" element={<ForgotPasswordConfirm />} />
      <Route path="/loginSuccess" element={<LoginSuccess />} />
      <Route path="/home" element={<Home />} />
      <Route path="/homeChart" element={<HomeChart />} />
      <Route path="/lineChart" element={<LineChart />} />
      <Route path="/barChart" element={<BarChart />} />
    </Routes>;
}

export default App;
