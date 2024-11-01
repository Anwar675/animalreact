import React from "react";
import Slider from "react-slick";
import Avata1 from "../../assets/Avata/avata1.png";
import Avata2 from "../../assets/Avata/avata2.png";
import Avata3 from "../../assets/Avata/avata3.png";
import Avata4 from "../../assets/Avata/avata4.png";
import Avata5 from "../../assets/Avata/avata5.png";

const commentData = [
  {
    id: 1,
    name: "Anwar",
    text: "you need to deverlop the heading part and add more rare animals, a little bit of  information is missing",
    image: Avata1,
  },
  {
    id: 2,
    name: "Tracy",
    text: "you need to deverlop the heading part and add more rare animals, a little bit of  information is missing",
    image: Avata2,
  },
  {
    id: 3,
    name: "Jvka",
    text: "you need to deverlop the heading part and add more rare animals, a little bit of  information is missing",
    image: Avata3,
  },
  {
    id: 4,
    name: "Taylor",
    text: "you need to deverlop the heading part and add more rare animals, a little bit of  information is missing",
    image: Avata4,
  },
  {
    id: 5,
    name: "BoywithUke",
    text: "you need to deverlop the heading part and add more rare animals, a little bit of  information is missing",
    image: Avata5,
  },
];

const Comment = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="container pb-24 text-center">
        <div className="text-center mb-12">
          <p className="text-textcolor text-[18px]" data-aos="fade-up">
            What do people on the forum say?
          </p>
          <h1
            className="text-3xl font-bold my-2 dark:text-white"
            data-aos="fade-up"
          >
            Comments
          </h1>
          <p className="text-gray-400" data-aos="fade-up">
            User reviews and suggestions give us motivation and ideas for
            further development
          </p>
        </div>
        {/* Comment card */}
        <div>
          <Slider {...settings}>
            {commentData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.image}
                      alt=""
                      className="rounded-full w-20  h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-2">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="textd-xl font-bold text-black/80 dark:text-white">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ''
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Comment;
