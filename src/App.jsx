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
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userOder, setUserOder] = React.useState(false);
  React.useEffect(() => {
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem("isLogin") === "true";
    setIsLoggedIn(isLoggedIn);

    // Initialize AOS (animation on scroll)
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  const handleUserLogin = () => {
    setIsLoggedIn(false);
    setUserOder(!userOder);
  };

  return (
    <div>
      <Navbar handleUserLogin={handleUserLogin} isLoggedIn={isLoggedIn} />
      <Wild />
      <Product />
      <RareAnimals />
      <Premium />
      <Saleproduct handleUserLogin={handleUserLogin} />
      <Comment />
      <Footer />
      <User
        userOder={userOder}
        setUserOder={setUserOder}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
};

export default App;
