import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onboarding from "./pages/Onboarding/Onboarding";
import Trails from "./pages/Trails/Trails";
import TrailsContent from "./pages/TrailsContent/TrailsContent";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onboarding />}/>
          <Route path="/trails/:id" element={<Trails />}/>
          <Route path="/trailscontent/:id" element={<TrailsContent />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/forgotpassword/:id" element={<ForgotPassword />} />
          <Route path="/profile/:id" element={<Profile />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
