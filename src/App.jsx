import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Wild from "./components/Wild/Wild";
import Product from "./components/Product/Product";
import RareAnimals from "./components/RareAnimals/RareAnimals";
import Premium from "./components/Premium/Premium";
import Saleproduct from "./components/SaleProduct/Saleproduct";
import Comment from "./components/Comment/Comment";
import Footer from "./components/Footer/Footer";
import AOS from "aos";

import "aos/dist/aos.css";
import User from "./components/User/User";
const App = () => {
  const [userOder, setUserOder] = React.useState(false);
  const handleUserLogin = () => {
    setUserOder(!userOder);
  };
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
      <Navbar handleUserLogin={handleUserLogin} />
      <Wild />
      <Product />
      <RareAnimals />
      <Premium />
      <Saleproduct />
      <Comment />
      <Footer />
      <User userOder={userOder} setUserOder={setUserOder} />
    </div>
  );
};

export default App;
