import React from "react";
import adImg1 from "../../assets/ad/adimg1.png";
import adImg2 from "../../assets/ad/adimg2.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    image: adImg1,
    title: "Update news every day",
    description:
      "The dictionary of all types of animals provides detailed descriptions and is easy to use for learning more about animal knowledge.",
  },
  {
    id: 2,
    image: adImg2,
    title: "About 15 animal species are at risk of extinction by 2024",
    description:
      "Animal species are at risk of extinction, mainly due to humans. Let's join hands to prevent and reduce the risk of harm to innocent animals.",
  },
];

const Wild = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinity: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div
      className="relative overflow-hidden min-h-[450px] sm:min-h-[550px]
     bg-gray-100 flex justify-center items-center dark:bg-gray-950
      dark:text-white duration-200"
    >
      {/* Background patter */}
      <div
        className="h-[600px] w-[600px] right-0 bg-primary/50 
        absolute -top-1/3  rounded-3xl rotate-45 "
      ></div>
      {/* Wild Animal silder */}

      <div className="container relative pd-7 sm:pd-0">
        <Slider {...settings}>
          {ImageList.map((item) => (
            <div key={item.id} className="relative">
              {/* Image section */}
              <div>
                <div
                  data-aos="fade up"
                  data-aos-duaration="500"
                  data-aos-delay="100"
                  className="relative"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="sm:h-[500px] sm:w-[1000px]  h-[400px] w-[380px]"
                  />
                  <div className="absolute bottom-10 left-8 text-left sm:w-[500px] w-[300px] ">
                    <h1
                      className=" sm:text-6xl lg:text-4xl text-white font-bold mb-4"
                      data-aos="fade up"
                      data-aos-duaration="500"
                      data-aos-delay="300"
                    >
                      {item.title}
                    </h1>
                    <p
                      className="text-sm text-white my-4"
                      data-aos="fade up"
                      data-aos-duaration="500"
                      data-aos-delay="300"
                    >
                      {item.description}
                    </p>
                    <div>
                      <button
                        data-aos="fade up"
                        data-aos-duaration="500"
                        data-aos-delay="500"
                        className="bg-gradient-to-r from-primary to-[#bdb487] hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                      >
                        Views More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Text contain section */}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Wild;
