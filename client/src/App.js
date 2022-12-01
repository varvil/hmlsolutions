import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Nopage from "./Components/Nopage/Nopage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Additem from "./Components/Additem/Additem";
import Item from "./Components/Item/Item";
import Modify from "./Components/Modify/Modify";


function App() {

  return (
    <>
      <Navbar />

      <Routes>
      <Route path="/cloud13/project/build" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/cloud13/project/build/item/:id" element={<Item />} />
        <Route path="/cloud13/project/build/modify/:id" element={<Modify />} />
        <Route path="/cloud13/project/build/login" element={<Login />} />
        <Route path="/cloud13/project/build/register" element={<Register />} />
        <Route path="/cloud13/project/build/add" element={<Additem />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </>
  );
}

export default App;
