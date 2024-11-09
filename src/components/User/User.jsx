import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoCloseOutline } from "react-icons/io5";
import logo2 from "../../assets/img/logo2.png";

const User = ({ userOder, setUserOder }) => {
  return (
    <>
      {userOder && (
        <div className="user">
          <div className="h-screen w-screen fixed top-0 left-0 bg-orange-300 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  duration-200">
              <div className="flex justify-center py-6 items-center">
                <img src={logo2} alt="" className="w-8 h-8" />
                <h1 className="text-2xl text-white font-bold">TWilAni</h1>
              </div>
              <div className="p-8  shadow-md bg-white rounded-md grid gap-5 w-[500px]">
                <div className="flex justify-between  ">
                  <h1 className="text-3xl font-bold">
                    sign in to your account
                  </h1>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer"
                    onClick={() => setUserOder(false)}
                  />
                </div>
                <div>
                  <p className="py-2">Your email</p>
                  <input
                    className="p-2 w-full outline-textcolor border border-gray-400 rounded-md"
                    type="text"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div>
                  <p className="py-2">Password</p>
                  <input
                    className="p-2 w-full outline-textcolor  border border-gray-400 rounded-md"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>
                <div className="flex justify-between">
                  <div>
                    <input type="checkbox" />
                    <span className="ml-2 text-gray-500">Remember me </span>
                  </div>
                  <a href="#" className="text-textcolor">
                    Forgot password?
                  </a>
                </div>
                <button className="p-3 bg-secondary rounded-lg text-white font-bold">
                  Sign in
                </button>
                <p className="text-gray-300">
                  Dont't you have an account yet?{" "}
                  <a href="" className="text-textcolor font-bold">
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default User;
