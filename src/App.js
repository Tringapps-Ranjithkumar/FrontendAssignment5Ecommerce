import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Container from "./components/container";
import React, { useState, createContext } from "react";
import View from "./components/viewaddeditems";
export const cartContext = createContext();
export const FilterContext = createContext();
function App() {
  let arr = [
    {
      id: 1,
      image: "casio1.jpeg",
      brand: "Casio",
      Disp: "Casio G-Shock Black Dial Mens Watch-G987",
      price: "₹1,000",
    },
    {
      id: 2,
      image: "casio2.jpeg",
      brand: "Casio",
      Disp: "Casio Enticer White Dial Men's Watch -A1174 ",
      price: "₹3,000",
    },
    {
      id: 3,
      image: "casio3.jpeg",
      brand: "Casio",
      Disp: "Casio Enticer Rose Gold Dial Women's Watch -A1548 ",
      price: "₹5,000",
    },
    {
      id: 4,
      image: "fossil1.jpeg",
      brand: "Fossil",
      Disp: "Fossil Machine Chrono Black Dial Men's Watch -FS4656 ",
      price: "₹1,000",
    },
    {
      id: 5,
      image: "fossil2.jpeg",
      brand: "Fossil",
      Disp: "Fossil Townsman Blue Dial Men's Watch -ME3110",
      price: "₹3,000",
    },
    {
      id: 6,
      image: "fossil3.jpeg",
      brand: "Fossil",
      Disp: "Fossil Gen 6 Display Dial Women's Smart Watch - FTW6077",
      price: "₹5,000",
      type: "digital",
    },
    {
      id: 7,
      image: "fastrack1.jpeg",
      brand: "Fastrack",
      Disp: "Fastrack Reflex Hello 1.69 HD Display BT Calling",
      price: "₹1,000",
      type: "digital",
    },
    {
      id: 8,
      image: "fastrack2.jpeg",
      brand: "Fastrack",
      Disp: "FK Exclusive Analog Watch - For Men F-TWEG202021",
      price: "₹3,000",
    },
    {
      id: 9,
      image: "fastrack3.jpeg",
      brand: "Fastrack",
      Disp: "Bare Basic Analog Watch - For Men M-TWEG2024",
      price: "₹5,000",
    },
    {
      id: 10,
      image: "timex1.jpeg",
      brand: "Timex",
      Disp: "Timex Analog Watch - For Men E-TWEG20200",
      price: "₹1,000",
    },
    {
      id: 11,
      image: "timex2.jpeg",
      brand: "Timex",
      Disp: "Timex E Class Chrono Black Dial Men's Watch -TWEG19301",
      price: "₹3,000",
    },
    {
      id: 12,
      image: "timex3.jpeg",
      brand: "Timex",
      Disp: "Timex Fria Purple Dial Women's Watch -TWEL14104",
      price: "₹5,000",
    },
  ];
  const [cart, setCart] = useState([]);
  const [filter, setfilter] = useState([]);
  return (
    <div>
      <BrowserRouter>
        <FilterContext.Provider value={{ filter, setfilter }}>
          <cartContext.Provider value={{ cart, setCart }}>
            <Navbar value={cart.length}></Navbar>
            <Routes>
              <Route path="/" element={<Container arr={arr} />}></Route>
              <Route path="/viewcart" element={<View arr={arr} />}></Route>
            </Routes>
            {/* <Container arr={arr} />
        <View /> */}
          </cartContext.Provider>
        </FilterContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
