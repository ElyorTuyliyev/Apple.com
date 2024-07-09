import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Mac from "./pages/Mac";
import IPad from "./pages/IPad";
import Iphone from "./pages/Iphone";
import Watch from "./pages/Watch";
import Vision from "./pages/Vision";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Mac" element={<Mac />}></Route>
        <Route path="/IPad" element={<IPad />}></Route>
        <Route path="/Iphone" element={<Iphone />}></Route>
        <Route path="/Watch" element={<Watch />}></Route>
        <Route path="/Vision" element={<Vision />}></Route>
        <Route path="/Mac" element={<Mac />}></Route>
      </Routes>
    </div>
  );
}

export default App;
