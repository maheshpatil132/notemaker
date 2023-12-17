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

const Note = ({ data }) => {
    const { setShow, setEditNote } = useContext(ModalContext)
    const {setNotes} = useContext(NotesDB)
    const {setPinNotes} = useContext( PinNoteContext )
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
         localStorage.setItem('PinedNotes' , JSON.stringify(item))
         return enqueueSnackbar("Pined successfully" , {variant : 'success'})
       }
        // localStorage.setItem('PinedNotes' , data)
    }

    const DeleteNote = async() => {
        const { error } = await supabase
            .from('notes')
            .delete()
            .eq('id', data.id).select('*')

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