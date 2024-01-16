import '../src/assets/style/Style.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/forms/Login/Index";
import Register from "./component/forms/Register/Index";
import Index from './component/Home/Index';
import Lottery from './component/Lottery/Lottery';
import OTP from "./component/forms/OTP/Index";
import Forgot from './component/forms/Forgot/Index';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<Index />} />
          <Route path="/lottery" element={<Lottery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/forgot" element={<Forgot />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
