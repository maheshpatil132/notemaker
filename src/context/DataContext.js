import { createContext, useState } from "react";

const NotesDB = createContext();

export const NoteProvider = ({children}) =>{
    const [loading, setLoading] = useState(false)
    const [notes, setNotes] = useState([])
    const [pageIndex, setPageIndex] = useState(1)
    let ShowNumber = 6;
    return(
       <NotesDB.Provider value={{notes , setNotes , loading , setLoading , pageIndex , setPageIndex , ShowNumber}}>
        {children}
       </NotesDB.Provider>
    )
}


export default NotesDB