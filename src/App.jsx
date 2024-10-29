import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Wild from "./components/Wild/Wild";
import Product from "./components/Product/Product";
import RareAnimals from "./components/RareAnimals/RareAnimals";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <Wild />
      <Product />
      <RareAnimals />
    </div>
  );
};

export default App;
