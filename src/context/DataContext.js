import { createContext, useState } from "react";

const NotesDB = createContext();

export const NoteProvider = ({children}) =>{
    const [loading, setLoading] = useState(false)
    const [notes, setNotes] = useState([])
    return(
       <NotesDB.Provider value={{notes , setNotes , loading , setLoading}}>
        {children}
       </NotesDB.Provider>
    )
}


export default NotesDB