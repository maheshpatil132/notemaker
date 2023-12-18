import { createContext, useState } from "react";

const LoaderContext = createContext();

export const LoaderProvider = (props) => {
    const [loader, setLoader] = useState(false)
    return(
        <LoaderContext.Provider value={{ loader , setLoader }}>
            {props.children}
        </LoaderContext.Provider>
    );
}

export default LoaderContext