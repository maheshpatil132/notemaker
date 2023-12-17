import { createContext, useState } from "react";

const PinNoteContext = createContext()


export const PinNoteProvider = ({children})=>{
    const [pinNotes, setPinNotes] = useState( JSON.parse(localStorage.getItem('PinedNotes')) || [] )
    return(
        <PinNoteContext.Provider value={{pinNotes , setPinNotes}}>
            {children}
        </PinNoteContext.Provider>
    )
}

export default PinNoteContext