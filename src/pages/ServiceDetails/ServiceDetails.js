import React from "react";
import { useParams } from "react-router";
import useHealthContexts from "../../hooks/useHealthContexts";

const ServiceDetails = () => {
  const { id } = useParams();
  console.log("service id", id);
  const {allServices} = useHealthContexts();
  const myService= allServices[id - 1];
  console.log(myService);
  return (
  <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal  w-full lg:max-w-full lg:flex  hover:shadow-xl border rounded">
  <div className="mb-8">
    <img className="mx-auto" src={myService.img} alt="" />
    <div className="text-gray-900 font-bold md:text-base sm:text-sm lg:text-xl mb-2">
      {myService.name}
    </div>
  </div>
  <div className="mx-auto text-center p-2 shadow-b">
    <p>{myService.description}</p>
  </div>
</div>
  );
};

export default ServiceDetails;
