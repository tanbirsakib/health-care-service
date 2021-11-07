import { useContext } from "react";
import { HealthContext } from "../context/HealthProvider";

const useHealthContexts = () =>{
    return useContext(HealthContext);
}

export default useHealthContexts;