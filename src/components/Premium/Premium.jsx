import React from "react";
import classNames from "classnames";
import backg from "../../assets/member/Doggie.png";

const Premium = () => {
  return (
    <div
      className={classNames(`block text-center pb-8`)}
      style={{
        backgroundImage: `url(${backg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="space-y-5 container">
        <div className="text-3xl font-bold text-white pt-14 ">
          <h1>Get Notified About Latest Updates On Your Benefits</h1>
        </div>
        <div>
          <input
            className="w-full p-3 max-w-2xl rounded-sm mt-9 outline-gray-400"
            type="text"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <input
            className="w-full p-3 max-w-2xl rounded-sm outline-gray-400"
            type="text"
            placeholder="Enter your phone"
          />
        </div>
        <button className="p-3 bg-secondary rounded-full text-white font-bold">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Premium;
