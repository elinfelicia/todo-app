import { BrowserRouter, Route, Routes } from "react-router-dom";
// import './styles/reset.css';
import './styles/index.css'
import Home from './components/Home';
import Header from './components/Header';
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
