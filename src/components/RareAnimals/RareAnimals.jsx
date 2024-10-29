import React from "react";

import RareImage4 from "../../assets/rare/RareImage4.png";
import RareImage5 from "../../assets/rare/RareImage5.png";
import RareImage6 from "../../assets/rare/RareImage6.png";

const Rarewilds = [
  {
    id: 1,
    name: "blue whale",
    image: RareImage5,
    description:
      "Currently, the number of blue whales worldwide is estimated to only be about 10,000 to 25,000 individuals and is decreasing due to environmental damage.",
  },
  {
    id: 2,
    image: RareImage4,
    name: "black rhino",
    description:
      "Currently, the number of black rhinos (Diceros bicornis) worldwide is estimated at 6,487 individuals. Due to hunting and the environment.",
  },
  {
    id: 3,
    image: RareImage6,
    name: "Ailuropoda melanoleuca",
    description:
      "The number of giant pandas in the wild is currently estimated at 1,800 individuals and continued protection measures are needed to ensure the long-term survival of this species.",
  },
];

const RareAnimals = () => {
  return (
    <div className="dark:bg-gray-800">
      <div className="container">
        {/* header */}
        <div className="text-left mb-32">
          <p className="text-textcolor text-[18px]" data-aos="fade-up">
            Animals in the red book
          </p>
          <h1
            className="text-3xl font-bold my-2 dark:text-white"
            data-aos="fade-up"
          >
            Rare Animals
          </h1>
          <p className="text-gray-400" data-aos="fade-up">
            The most endangered animals in this year
          </p>
        </div>
        {/* body */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {Rarewilds.map((data, index) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-[#7d754b] hover:text-white relative shadow-xl duration-hight group w-[300px] h-[250px]"
            >
              {/* Image section */}
              <div className="h-[100px]">
                <img
                  src={data.image}
                  alt=""
                  className={`max-w-[210px] block mx-auto transform ${
                    data.id === 3 ? "-translate-y-32" : "-translate-y-24"
                  } group-hover:scale-105 duration-300 drop-shadow-sm `}
                />
              </div>
              {/* details */}
              <div className="p-4 text-center ">
                <h1 className="dark:text-white text-[18px] font-bold">
                  {data.name}
                </h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button className=" mt-2 p-2 rounded-[14px] bg-primary text-left">
                  Views
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RareAnimals;
