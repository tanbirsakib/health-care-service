import React from "react";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <>
      <div>
        <div className="relative py-16 bg-white shadow flex justify-center items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-10 text-white">
              How can we help you?
            </h1>
            <div className="bg-indigo-800 rounded relative mt-6 lg:mt-14 py-4 pl-4 flex items-center w-full">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-search"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx={10} cy={10} r={7} />
                  <line x1={21} y1={21} x2={15} y2={15} />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search for answers"
                className=" ml-4 w-full bg-transparent text-base leading-none text-white placeholder-white focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto py-9 flex flex-col items-center justify-center">
          <div
            role="list"
            className="w-11/12 md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div role="listitem" className="focus:outline-none">
              <Link
                to="/lskdfd"
                className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer"
              >
                <div className="flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-settings"
                      width={32}
                      height={32}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#3730A3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium leading-none text-gray-800">
                      Getting Started
                    </p>
                    <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12">
                      Get started fast with installation and theme setup
                      instructions
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div role="listitem" className="focus:outline-none">
              <Link
                to="/afjdsd"
                className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer"
              >
                <div className="flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-users"
                      width={32}
                      height={32}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#3730A3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx={9} cy={7} r={4} />
                      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium leading-none text-gray-800">
                      User Account
                    </p>
                    <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12">
                      Get started fast with installation and theme setup
                      instructions
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div role="listitem" className="focus:outline-none">
              <Link
                to="/sdffj"
                className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer"
              >
                <div className="flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-adjustments-horizontal"
                      width={32}
                      height={32}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#3730A3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx={14} cy={6} r={2} />
                      <line x1={4} y1={6} x2={12} y2={6} />
                      <line x1={16} y1={6} x2={20} y2={6} />
                      <circle cx={8} cy={12} r={2} />
                      <line x1={4} y1={12} x2={6} y2={12} />
                      <line x1={10} y1={12} x2={20} y2={12} />
                      <circle cx={17} cy={18} r={2} />
                      <line x1={4} y1={18} x2={15} y2={18} />
                      <line x1={19} y1={18} x2={20} y2={18} />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium leading-none text-gray-800">
                      Product Features
                    </p>
                    <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12">
                      Get started fast with installation and theme setup
                      instructions
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div role="listitem" className="focus:outline-none">
              <Link
                to="/dsfjj"
                className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer"
              >
                <div className="flex">
                  <div>
                    <svg
                      width={33}
                      height={33}
                      viewBox="0 0 33 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3125 23.7188L2.0625 16.5L10.3125 9.28125M22.6875 23.7188L30.9375 16.5L22.6875 9.28125"
                        stroke="#3730A3"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium leading-none text-gray-800">
                      Customization Options
                    </p>
                    <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12">
                      Get started fast with installation and theme setup
                      instructions
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div role="listitem" className="focus:outline-none">
              <Link
                to="/dsjfj"
                className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer"
              >
                <div className="flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-credit-card"
                      width={32}
                      height={32}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#3730A3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <rect x={3} y={5} width={18} height={14} rx={3} />
                      <line x1={3} y1={10} x2={21} y2={10} />
                      <line x1={7} y1={15} x2="7.01" y2={15} />
                      <line x1={11} y1={15} x2={13} y2={15} />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium leading-none text-gray-800">
                      Payment Gateways
                    </p>
                    <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12">
                      Get started fast with installation and theme setup
                      instructions
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div role="listitem" className="focus:outline-none">
              <Link
                to="/dlffd"
                className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer"
              >
                <div className="flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-lock"
                      width={32}
                      height={32}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#3730A3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <rect x={5} y={11} width={14} height={10} rx={2} />
                      <circle cx={12} cy={16} r={1} />
                      <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium leading-none text-gray-800">
                      Security Options
                    </p>
                    <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12">
                      Get started fast with installation and theme setup
                      instructions
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="mt-9 md:mt-11 lg:mt-16">
            <div className="text-center">
              <h1 className="text-3xl font-medium leading-loose text-gray-800">
                Didn’t find an answer?
              </h1>
              <p className="mx-4 md:mx-0 mb-4 text-base leading-none text-gray-600 mt-4">
                Our team is just an email away and ready to answer your
                questions
              </p>
            </div>
            <div
              role="list"
              aria-label="Our Team mates"
              className="flex flex-wrap items-center justify-around mt-2 "
            >
              <div role="listitem" className="focus:outline-none">
                <img
                  src="https://i.ibb.co/7J00pbq/sakib-2.jpg"
                  alt="Display avatar of julia john"
                />
                <p className="text-base font-semibold leading-none text-gray-800 mt-2">
                  Tanbir Sakib
                </p>
                <p className="text-base leading-none text-gray-600 mt-2">CEO</p>
              </div>
              <div role="listitem" className="focus:outline-none">
                <img
                  src="https://i.ibb.co/FDpCPS5/tan.jpg"
                  alt="Display avatar of Tom Koch"
                />
                <p className="text-base font-semibold leading-none text-gray-800 mt-2">
                  Jonayed Tanjim
                </p>
                <p className="text-base leading-none text-gray-600 mt-2">
                  Product Manager
                </p>
              </div>
              <div role="listitem" className="focus:outline-none">
                <img
                  src="https://i.ibb.co/4sTHWt0/aidul.jpg"
                  alt="Display avatar of Kera Ann"
                />
                <p className="text-base font-semibold leading-none text-gray-800 mt-2">
                  Aidul Islam
                </p>
                <p className="text-base leading-none text-gray-600 mt-2">
                  Service Manager
                </p>
              </div>
              <div role="listitem" className="focus:outline-none">
                <img
                  src="https://i.ibb.co/RCtkFtm/younus.jpg"
                  alt="Display Avatar of Glenn Jo"
                />
                <p className="text-base font-semibold leading-none text-gray-800 mt-2">
                  Emon Younus
                </p>
                <p className="text-base leading-none text-gray-600 mt-2">
                  Support
                </p>
              </div>
              <div role="listitem" className="focus:outline-none mt-2">
                <img
                  src="https://i.ibb.co/xhNQjQ4/fahim.jpg"
                  alt="Display avatar of Shing Co"
                />
                <p className="text-base font-semibold leading-none text-gray-800 mt-2">
                  Mir Fahim
                </p>
                <p className="text-base leading-none text-gray-600 mt-2">
                  Developer
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className="mt-4 md:mt-6 py-3 px-6 bg-indigo-800 hover:bg-indigo-700 rounded text-white text-center font-medium text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
