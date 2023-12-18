import React, { useContext } from 'react'
import PushPinIcon from '@mui/icons-material/PushPin';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ModalContext from '../../context/ModalContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { supabase } from '../../Database/ConnectDB';
import { useSnackbar } from 'notistack';
import NotesDB from '../../context/DataContext';
import PinNoteContext from '../../context/PinNoteContext';
import LoaderContext from '../../context/LoaderContext';

const Note = ({ data }) => {
    const { setShow, setEditNote } = useContext(ModalContext)
    const {setNotes , notes , pageIndex , ShowNumber , setPageIndex} = useContext(NotesDB)
    const {setPinNotes} = useContext( PinNoteContext )
    const { setLoader } = useContext(LoaderContext)

    const { enqueueSnackbar} = useSnackbar()
    const EditNote = () => {
        setShow(true);
        setEditNote(data)
    }


    const pinNote = () =>{

       let item = JSON.parse(localStorage.getItem('PinedNotes')) 

       if(!item){
          localStorage.setItem('PinedNotes',JSON.stringify([data]))
       }

       
       if(item){
        item.push(data)
        setNotes((prev)=>{
            let updatearr = prev.filter((elem)=> elem.id !== data.id )
             return updatearr
         })  
         setPinNotes(item)
         
         if(notes.slice(pageIndex * ShowNumber - ShowNumber, pageIndex * ShowNumber).length <= 0){
            setPageIndex((prev)=>prev -1)
         }

         localStorage.setItem('PinedNotes' , JSON.stringify(item))
         return enqueueSnackbar("Pined successfully" , {variant : 'success'})
       }
        
    }

    const DeleteNote = async() => {
        setLoader(true)
        const { error } = await supabase
            .from('notes')
            .delete()
            .eq('id', data.id).select('*')
        setLoader(false)
        if(!error){

            setNotes((prev)=>{
               let updatearr = prev.filter((elem)=> elem.id !== data.id )
                return updatearr
            })

            

            return enqueueSnackbar("deleted successfully" , {variant : 'success'})
        }else{
            return enqueueSnackbar(error , {variant:'error'})
        }
    }
    return (
        <div className='note bg-white border py-4 shadow-sm px-6 rounded-[1.6rem] '>
            <div className=' border-b-2 pb-3'>
                <div className='flex mb-2 items-center justify-between'>
                    <h1 className=' font-semibold text-2xl'>{ data.title.length > 15 ? data.title.slice(0,15)+ '...':data.title}</h1>
                    <div className=' flex gap-1 items-center'>
                        <IconButton onClick={DeleteNote}>
                            <DeleteIcon fontSize='medium' />
                        </IconButton>
                        <IconButton onClick={pinNote}>
                            <PushPinIcon fontSize='medium' />
                        </IconButton>
                        <IconButton onClick={EditNote}>
                            <EditIcon fontSize='medium' />
                        </IconButton>
                    </div>
                </div>
                <div>
                    <p className='text-gray-800'>{ data.tagline.length > 30 ? data.tagline.slice(0,30) + ' ...' : data.tagline}</p>
                </div>
            </div>
            <div className=' h-44 overflow-hidden hover:overflow-y-scroll'>
                <p className=' text-gray-600 mt-2'>
                    {data.body}
                </p>
            </div>
        </div>
    )
}

export default Note