import { Route, Routes } from "react-router";
import Login from "./features/Login";

function App() {
  return <Routes>
      <Route path="/" element={<Login />} />
    </Routes>;
}

export default App;