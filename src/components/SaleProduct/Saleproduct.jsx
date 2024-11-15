import React from "react";
import product1 from "../../assets/Products/product1.png";
import product5 from "../../assets/Products/product5.jpg";
import product3 from "../../assets/Products/product3.png";
import product4 from "../../assets/Products/product4.jpg";
import { FaStar } from "react-icons/fa";
const itemsPro = [
  {
    id: 1,
    image: product1,
    name: "Keychain",
    star: 5,
  },
  {
    id: 2,
    image: product5,
    name: "Amigurumi",
    star: 4.5,
  },
  {
    id: 3,
    image: product3,
    name: "Cotton pillow",
    star: 4,
  },
  {
    id: 4,
    image: product4,
    name: "Balo",
    star: 3.9,
  },
];

const Saleproduct = ({ handleUserLogin }) => {
  return (
    <div className="dark:bg-gray-800">
      <div className="container py-24 text-center">
        <div className="text-center mb-12">
          <p className="text-textcolor text-[18px]" data-aos="fade-up">
            Our exclusive products
          </p>
          <h1
            className="text-3xl font-bold my-2 dark:text-white"
            data-aos="fade-up"
          >
            Items cute
          </h1>
          <p className="text-gray-400" data-aos="fade-up">
            Support us by purchasing our quality products
          </p>
        </div>
        <div className="grid sm:grid-cols-4 grid-cols-1 gap-5 place-items-center ">
          {itemsPro.map((item) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={item.id * 100}
              className="text-left space-y-2"
            >
              <img
                src={item.image}
                alt=""
                className=" object-cover rounded-md"
              />
              <p className="text-lg font-bold dark:text-white">{item.name}</p>
              <p className="text-sm text-gray-500">In stock</p>
              <div className=" flex items-center gap-1 dark:text-white">
                <FaStar className="fill-yellow-400" />
                <span>{item.star}</span>
              </div>
            </div>
          ))}
        </div>
        <button
          className="p-3 rounded-full bg-primary mt-12 text-gray-500"
          onClick={() => handleUserLogin()}
        >
          Buy now
        </button>
      </div>
    </div>
  );
};

export default Saleproduct;
