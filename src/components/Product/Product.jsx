import React from "react";
import wildImage1 from "../../assets/TypeAnimals/wildImage1.png";
import wildImage2 from "../../assets/TypeAnimals/wildImage2.png";
import wildImage3 from "../../assets/TypeAnimals/wildImage3.png";
import wildImage4 from "../../assets/TypeAnimals/wildImage4.png";
import wildImage5 from "../../assets/TypeAnimals/wildImage5.png";
import wildImage6 from "../../assets/TypeAnimals/wildImage6.png";
import { FaFire } from "react-icons/fa";

const TypeAnimals = [
  { id: 1, img: wildImage1, title: "Mammals", views: 6495, aosDelay: 100 },
  { id: 2, img: wildImage2, title: "Herbivores", views: 7453, aosDelay: 200 },
  { id: 3, img: wildImage3, title: "Omnivores", views: 4468, aosDelay: 300 },
  {
    id: 4,
    img: wildImage4,
    title: "Marine Animals",
    views: 4910,
    aosDelay: 400,
  },
  { id: 5, img: wildImage5, title: "Birds", views: 10363, aosDelay: 500 },
  { id: 6, img: wildImage6, title: "Amphibians", views: 3424, aosDelay: 600 },
];

const Product = () => {
  return (
    <div className="py-[80px] dark:bg-gray-800">
      <div className="container">
        <div className="text-center">
          <p className="text-textcolor text-[18px]" data-aos="fade-up">
            Top Search
          </p>
          <h1
            className="text-3xl font-bold my-2 dark:text-white"
            data-aos="fade-up"
          >
            Animals
          </h1>
          <p className="text-gray-400" data-aos="fade-up">
            Animals of different species are most searched for this month
          </p>
        </div>

        {/* Body section */}
        <div className="grid grid-cols-1 pt-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 place-items-center gap-5">
          {/* Card section with alternating positioning */}
          {TypeAnimals.map((data, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className={`space-y-2 flex flex-col transform ${
                index % 2 === 0
                  ? "-translate-y-8 -mt-12"
                  : " mt-20 translate-y-8"
              }`}
            >
              <img
                src={data.img}
                className="rounded-[12px] w-[180px] h-[280px] cursor-pointer"
              />
              <h1 className="text-lg font-[550] dark:text-white">
                {data.title}
              </h1>
              <div className="flex">
                <FaFire className="fill-orange-600" />
                <p className="text-gray-400 text-[15px]">
                  {data.views} species
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="text-center mt-10"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="600"
        >
          <button className="p-2 rounded-[8px] bg-[#f1db6c] text-white">
            View All More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
