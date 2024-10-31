import React from "react";
import classNames from "classnames";
import RareImage4 from "../../assets/rare/RareImage4.png";
import RareImage5 from "../../assets/rare/RareImage5.png";
import RareImage6 from "../../assets/rare/RareImage6.png";
import logomember from "../../assets/member/Whalelogo.png";
import { SiMagento } from "react-icons/si";
import { IoInformationCircleSharp } from "react-icons/io5";
import { FaRocketchat } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
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

const interest = [
  {
    id: 1,
    svg: <SiMagento style={{ color: "white" }} />,
    aosDlay: 100,
    color: "bg-blue-300",
    detail: "Album animal diversity and fantacy",
  },
  {
    id: 2,
    svg: <IoInformationCircleSharp style={{ color: "white" }} />,
    aosDlay: 200,
    color: "bg-green-300",
    detail: "Receive daily information updates",
  },
  {
    id: 3,
    svg: <FaRocketchat style={{ color: "white" }} />,
    aosDlay: 300,
    color: "bg-yellow-300",
    detail: "Priority is given to participating and commenting on the forum",
  },
  {
    id: 4,
    svg: <GiTakeMyMoney style={{ color: "white" }} />,
    aosDlay: 400,
    color: "bg-purple-300",
    detail: "Receive vouchers to buy products every week",
  },
];

const RareAnimals = () => {
  return (
    <div className="dark:bg-gray-800 ">
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

      <div className="flex container pt-32">
        <div data-aos="zoom-in" className="flex-1 pl-20  ">
          <img
            src={logomember}
            alt=""
            className="rounded-full h-[400px] drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
          />
        </div>
        <div className="flex-1 space-y-5" data-aos="fade-up">
          <h1 className="text-3xl font-bold dark:text-white">
            A membership card sale upto 50% off
          </h1>
          <p className="text-sm text-gray-500">
            Enjoy the services and amenities we promise will be interesting and
            satisfying for only 200.000 vnđ
          </p>
          <div className="space-y-5">
            {interest.map((inter) => (
              <div
                data-aos="fade-up"
                key={inter.id}
                className="flex items-center "
                data-aos-delay={inter.aosDlay}
              >
                <div className={classNames(`p-5 rounded-full ${inter.color} `)}>
                  {inter.svg}
                </div>
                <p className="ml-4 text-gray-500 dark:text-white font-bold">
                  {inter.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RareAnimals;
