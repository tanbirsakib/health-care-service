import React from 'react';
import { useParams } from 'react-router';
import useHealthContexts from '../../hooks/useHealthContexts';

const ServiceDetails = ( ) => {
    const [allServices] = useHealthContexts();
    const {id} = useParams();
    const desiredId = id -1;
    const myService = allServices[desiredId]
  console.log(myService);

    return (
        <div>
            <h1>product is : </h1>
           </div>
       
    );
};

export default ServiceDetails;