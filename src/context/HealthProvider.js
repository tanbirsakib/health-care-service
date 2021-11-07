import { createContext } from "react";
import useServices from "../hooks/useServices";


export const HealthContext = createContext();

const HealthProvider = ({children}) =>{
    const allContext = useServices();
    return (
        <HealthContext.Provider value={allContext}>
            {children}
        </HealthContext.Provider>
    );

}

export default HealthProvider;