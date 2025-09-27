import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import Main from "../pages/main";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";

const Index = ({ isDark, setIsDark }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main isDark={isDark} setIsDark={setIsDark} />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/Register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default Index;
