import React from "react";
import Banner from "../../assets/banner/bannerfooter.jpg";
import Logo2 from "../../assets/img/logo2.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLink = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Blog",
    link: "/blog",
  },
];

const partner = [
  {
    name: "Tracy",
    logo: "",
    link: "",
  },
];

const Footer = () => {
  return (
    <div
      className="text-primary"
      style={{
        backgroundImage: `url(${Banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44  pt-5">
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={Logo2} alt="" className="max-w-[70px]" />
              TWilAni
            </h1>
            <p>
              This is place where everybody can know more details knowlage about
              animal contribute save wild life
            </p>
          </div>
          {/* footer Link */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul>
                  {FooterLink.map((link) => (
                    <li
                      className="cursor-pointer hover:text-textcolor hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul>
                  {FooterLink.map((link) => (
                    <li
                      className="cursor-pointer hover:text-textcolor hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="flex gap-3">
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>221B Baker Street</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+84 869125008</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
