import '../src/assets/style/Style.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/forms/Login/Index";
import Register from "./component/forms/Register/Index";
import Index from './component/Home/Index';
import Lottery from './component/Lottery/Lottery';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<Index />} />
          <Route path="/lottery" element={<Lottery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
