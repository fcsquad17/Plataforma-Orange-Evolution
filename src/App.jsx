import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onboarding from "./pages/Onboarding/Onboarding";
import Trails from "./pages/Trails/Trails";
import TrailsContent from "./pages/TrailsContent/TrailsContent";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./pages/Profile/Profile";
import AdminControl from "./pages/AdminControl/AdminControl";
import NotFound from "./pages/NotFound/NotFound";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import { ResetPassword } from "./pages/ResetPassword/ResetPassword";
import { EventsTab } from "./pages/EventsTab/EventsTab";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/trails/" element={<Trails />} />
          <Route path="/trailscontent/:idTrail" element={<TrailsContent />} />
          <Route path="/eventstab" element={<EventsTab />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/profile/" element={<Profile />} />
          <Route path="/admin/" element={<AdminControl />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
