import '../src/assets/style/Style.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/forms/Login/Index";
import Register from "./component/forms/Register/Index";
import Home_page from './component/Home/Home_page';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Home_page" element={<Home_page />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
