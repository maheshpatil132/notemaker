import {  createContext, useState } from "react";

const ModalContext = createContext();

export const StateProvider = (props) => {
    const [show, setShow] = useState(false)
    return(
        <ModalContext.Provider value={{show , setShow}}>
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalContext