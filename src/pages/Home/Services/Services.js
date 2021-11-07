import React from "react";
import useHealthContexts from "../../../hooks/useHealthContexts";
import Service from "../Service/Service";

const Services = () => {
const {allServices} = useHealthContexts();
  return (
 <div className="mt-5">
  <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-center text-green-600">Our Services</h2>
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-8 m-8">
      {allServices.map((service) => (
        <Service key={service.id} service={service}></Service>
      ))}
    </div>
 </div>
  );
};

export default Services;
