import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/" element={Home}></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
