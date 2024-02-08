import "../src/assets/style/Style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/forms/Login/Index";
import Register from "./component/forms/Register/Index";
import Index from "./component/Home/Index";
import Lottery from "./component/Lottery/Lottery";
import OTP from "./component/forms/OTP/Index";
import Forgot from "./component/forms/Forgot/Index";
import { Provider } from "react-redux";
import store from "./redux/store";
import ModalBottom from "./component/Lottery/BigSmall/OffCanvas/ModalBottom";
import Profile from "./component/profile/Index";
import WinPop from "./component/Lottery/WinPop";
import LossPop from "./component/Lottery/LossPop";
import Withdraw from "./component/Lottery/Withdraw/Withdraw";
import Deposit from "./component/Lottery/Deposit/Deposit";
import Setting from "./component/profile/Setting/Seting";
import ChangePassword from "./component/profile/Setting/ChangePassword/ChangePassword";
import Notification from "./component/profile/Notification/Notification";
import CycleDetail from "./component/Lottery/Deposit/CycleDetail/CycleDetail";
import Feedback from "./component/profile/Feedback/Feedback";
import About from "./component/profile/About/About";
import Service from "./component/profile/Service/Service";


// export

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/lottery" element={<Lottery />} />
          <Route path="/home_page" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/modalbottom" element={<ModalBottom />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/winner" element={<WinPop />} />
          <Route path="/loss" element={<LossPop />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/cycle_detail" element={<CycleDetail />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
