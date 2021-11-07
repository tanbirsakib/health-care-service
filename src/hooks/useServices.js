import { useEffect, useState } from "react";

const useServices = ()=>{
    const [allServices, setAllServices] = useState([]);
   useEffect(()=>{
    fetch("/services.json")
    .then(res => res.json())
    .then(data => setAllServices(data));
   }, [])
   return {allServices};
}


export default useServices;