// AppRoute.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Disasters from "../components/Disaster/Disaster";
import MainPage from "../components/MainPage/MainPage";
import Dashboard from "../components/MainPage/Dashboard";
import Responders from "../components/Responder/Responders";
import LogIn from "../pages/loginpage/LogIn";
import Tasks from "../components/Tasks/Tasks";
import Register from "../pages/loginpage/Registration";
const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/disaster" element={<Disasters />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/responders" element={<Responders />} />
        <Route path="/task" element={<Tasks />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
