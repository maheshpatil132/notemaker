import {  createContext, useState } from "react";

const ModalContext = createContext();

export const StateProvider = (props) => {
    const [show, setShow] = useState(false)
    const [editNote , setEditNote] = useState('')
    return(
        <ModalContext.Provider value={{show , setShow ,editNote , setEditNote}}>
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalContext