import { faCapsules } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import aidul from "../../images/aidul.jpg";
import fahim from "../../images/fahim.jpg";
import jhankar from "../../images/jhankar.jpg";
import tanbir from "../../images/sakib (2).jpg";
import img from "../../images/sakib.jpg";
import tanjim from "../../images/tan.jpg";
import younus from "../../images/younus.jpg";

const logo = <FontAwesomeIcon icon={faCapsules}></FontAwesomeIcon>;
const About = () => {
  return (
    <div>
      <h1 className="text-center text-green-700 font-bold text-3xl mt-4">
        About Health Freak {logo}
      </h1>
      <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 mx-auto">
        <div className="flex justify-center md:justify-end -mt-16">
          <img
            className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            alt=""
            src={img}
          />
        </div>
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold">
            CEO & Founder, <small>Health Freak</small>
          </h2>
          <p className="mt-2 text-gray-600">
            At Health Freak,we try to provide valuable services at reasonable
            price
          </p>
        </div>
        <div className="flex justify-end mt-4">
          <Link className="text-xl font-medium text-indigo-500" to="/home">
            Tanbir Sakib
          </Link>
        </div>
      </div>

      {/*--------------------- instructors------------------ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
          <h2 className="text-base font-bold text-indigo-600">
            We have the best equipment in the market
          </h2>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            Check our awesome team members
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
              <img
                className="object-center object-cover h-auto w-full"
                src={tanbir}
                alt=""
              />
            </div>
            <div className="text-center py-8 sm:py-6">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Tanbir Sakib
              </p>
              <p className="text-base text-gray-400 font-normal">HR</p>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
              <img
                className="object-center object-cover h-auto w-full"
                src={aidul}
                alt=""
              />
            </div>
            <div className="text-center py-8 sm:py-6">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Aidul Islam
              </p>
              <p className="text-base text-gray-400 font-normal">
                Service Manager
              </p>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
              <img
                className="object-center object-cover h-auto w-full"
                src={tanjim}
                alt=""
              />
            </div>
            <div className="text-center py-8 sm:py-6">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Jonayed Tanjim
              </p>
              <p className="text-base text-gray-400 font-normal">IT Head</p>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
              <img
                className="object-center object-cover h-auto w-full"
                src={jhankar}
                alt=""
              />
            </div>
            <div className="text-center py-8 sm:py-6">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Jhankar Mahbub
              </p>
              <p className="text-base text-gray-400 font-normal">
                Managing Director
              </p>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
              <img
                className="object-center object-cover h-auto w-full"
                src={younus}
                alt=""
              />
            </div>
            <div className="text-center py-8 sm:py-6">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Emon Younus
              </p>
              <p className="text-base text-gray-400 font-normal">Chairman</p>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
              <img
                className="object-center object-cover h-auto w-full"
                src={fahim}
                alt=""
              />
            </div>
            <div className="text-center py-8 sm:py-6">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Mir Fahim
              </p>
              <p className="text-base text-gray-400 font-normal">
                Product Handler
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
