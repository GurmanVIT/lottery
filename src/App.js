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

import { createBrowserHistory } from "history";
import { io } from "socket.io-client";
import ModalBottom from "./component/Lottery/BigSmall/OffCanvas/ModalBottom";

const history = createBrowserHistory();

// export

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/lottery" element={<Lottery />} />
          <Route path="/home_page" element={<Index history={history} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/modalbottom" element={<ModalBottom />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
