import React from "react";
import Logo from "../../assets/img/logoAnimal.png";
import { IoSearch } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { FaAngleUp } from "react-icons/fa6";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Wild Animals",

    // subMenu: [
    //   {
    //     name: "Birds",
    //     link: "/wildbird",
    //   },
    //   {
    //     name: "Reptile",
    //     link: "/reptile",
    //   },
    //   {
    //     name: "Insect",
    //     link: "/insect ",
    //   },
    //   {
    //     name: "Marine life",
    //     link: "/marinelife",
    //   },
    // ],
  },
  {
    id: 3,
    name: "Rare Animals",
    link: "/rare",
  },
  {
    id: 4,
    name: "video",
    link: "/#video",
  },
  {
    id: 5,
    name: "Image",
    link: "/#image",
  },
];

const Dropdownlink2 = [
  {
    id: 1,
    name: "Birds",
    link: "/wildbird",
  },
  {
    id: 2,
    name: "Reptile",
    link: "/reptile",
  },
  {
    id: 3,
    name: "Insect",
    link: "/insect ",
  },
  {
    id: 4,
    name: "Marine life",
    link: "/marinelife",
  },
];

const Dropdownlink = [
  {
    id: 1,
    name: "Contribute comments",
    link: "/#comment",
  },
  {
    id: 2,
    name: "Technical problem",
    link: "/#report",
  },
];
const Navbar = () => {
  return (
    <div className="shadow-lg dark:bg-gray-900 dark:text-white">
      <div className="bg-primary/50 py-1">
        <div className="container pl-0 pr-0 flex justify-between items-center">
          <div>
            <a href="#">
              <img src={Logo} alt="Logo" className="w-[70px]" />
            </a>
          </div>
          {/* seach bar and order bottom */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px]
                group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300
                px-2 py-1 outline-none focus:border-1 dark:text-[black]
                focus:border-primary"
              />
              <IoSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 wid" />
            </div>
            <div>
              <DarkMode />
            </div>
            {/* order button */}
            <button className="bg-gradient-to-r from-primary to-[#ffc05b] transition-all duration-200 py-1 px-4 rounded-full">
              <FaRegCircleUser className="fill-white text-2xl" />
            </button>
          </div>
        </div>
      </div>
      {/* Lower navbar */}
      <div className="flex justify-center dark:bg-slate-800">
        <ul className="sm:flex hidden items-center lg:gap-[6.25rem] gap-4 ">
          {Menu.map((data) => (
            <li key={data.id} className="relative group p-1">
              <a
                href={data.link}
                className="hover:text-primary flex items-center gap-[2px] py-2 "
              >
                {data.name}
                {data.id === 2 ? (
                  <span>
                    <FaAngleUp className="ml-1 transition-transform duration-200 group-hover:rotate-180" />
                  </span>
                ) : (
                  ""
                )}
              </a>
              {data.id === 2 ? (
                <div className="absolute z-[9999] hidden group-hover:block w-[180px]  rounded-md bg-white  text-black">
                  <ul>
                    {Dropdownlink2.map((data) => (
                      <li
                        key={data.id}
                        className="rounded-md w-full p-3 hover:bg-primary"
                      >
                        <a href={data.link}>{data.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                ""
              )}
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Help
              <span>
                <FaAngleUp className="ml-1 transition-transform duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[180px]  rounded-md bg-white  text-black">
              <ul>
                {Dropdownlink.map((data) => (
                  <li
                    key={data.id}
                    className="rounded-md w-full p-3 hover:bg-primary"
                  >
                    <a href={data.link}>{data.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
