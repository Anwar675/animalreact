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
    link: "/wildanimal",
    subMenu: [
      {
        name: "Birds",
        link: "/wildbird",
      },
      {
        name: "Reptile",
        link: "/reptile",
      },
      {
        name: "Insect",
        link: "/insect ",
      },
      {
        name: "Marine life",
        link: "/marinelife",
      },
    ],
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
  {
    id: 6,
    name: "Help",
    link: "/#help",
    subMenu: [
      {
        name: "Góp Ý kiến thêm ",
        link: "/document",
      },
      {
        name: "Vấn đề kĩ thuật",
        link: "/report ",
      },
    ],
  },
];

const Navbar = () => {
  const [type, setType] = React.useState(null);
  const handleMountEnter = (id) => {
    setType(id);
  };
  const handleMountleave = (id) => {
    setType(null);
  };
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
        <ul className="sm:flex hidden items-center gap-[7.25rem] ">
          {Menu.map((data) => (
            <li
              key={data.id}
              onMouseEnter={() => handleMountEnter(data.id)}
              onMouseLeave={handleMountleave}
              className="relative group py-1"
            >
              <a
                href={data.link}
                className="hover:text-primary flex items-center"
              >
                {data.name}{" "}
                {data.subMenu && (
                  <FaAngleUp
                    className={`ml-1 transition-transform duration-200 ${
                      type === data.id ? "rotate-180" : ""
                    }  `}
                  />
                )}
              </a>
              {data.subMenu && type === data.id && (
                <ul className="absolute left-0 my-1 bg-transparent z-50 dark:bg-white w-[150px] rounded-[10px] overflow-hidden">
                  {data.subMenu.map((sub, index) => (
                    <li
                      key={index}
                      className="py-1 text-gray-800 hover:text-primary dark:hover:bg-[#ffeaa6]  dark:hover:text-black"
                    >
                      <a href={sub.link}>{sub.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
