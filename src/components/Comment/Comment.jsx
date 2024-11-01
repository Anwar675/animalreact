import React from "react";

const commentData = [
  {
    id: 1,
    name: "Anwar",
    text: "you need to deverlop the heading part and add more rare animals, a little bit of  information is missing",
  },
];

const Comment = () => {
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
      </div>
    </div>
  );
};

export default Comment;
