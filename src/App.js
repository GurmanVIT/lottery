import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./component/forms/Register/Index";
import '../src/assets/style/Style.scss';
import Login from "./component/forms/Login/Index";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
