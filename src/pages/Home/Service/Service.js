import {
  faCalendarAlt,
  faMoneyCheckAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

// creating font elements 
const calender = <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>;
const money = <FontAwesomeIcon icon={faMoneyCheckAlt}></FontAwesomeIcon>;

const Service = (props) => {
  const service = props.service;
  const {id, name, img, price, subscription } = service;

  // const {id} = useParams();
  // console.log(id)
  //service button handler
//   const history = useHistory();
// const handleServiceDetails = ()=>{
//   history.push(`/service/${id}`);
// }
  return (
    <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal  w-full lg:max-w-full lg:flex  hover:shadow-xl border rounded">
      <div className="mb-8">
        <img className="mx-auto" src={img} alt="" />
        <div className="text-gray-900 font-bold md:text-base sm:text-sm lg:text-xl mb-2">
          {name}
        </div>
        {/* <p className="text-gray-700 text-base text-justify">{description}</p> */}
      </div>
      <div className="flex flex-row justify-between p-1">
        <p className="border p-1 rounded font-bolder text-xl">
          Subscription : {subscription}{" "}
          <span className="text-green-600">{calender}</span>
        </p>
        <p className="border p-1 rounded font-bolder text-xl">
          Price : {price} <span className="text-red-600">{money}</span>
        </p>
      </div>
      <Link
      to={`/service/${id}`}
      className="flex items-center justify-center border p-2 hover:shadow-lg hover:text-green-600">
        <img
          className="w-10 h-10 rounded-full"
          src={img}
          alt="Avatar of Writer"
        />
        <p className="leading-none text-xl ">Take the service</p>
      </Link>
      
    </div>
  
  );
};

export default Service;
