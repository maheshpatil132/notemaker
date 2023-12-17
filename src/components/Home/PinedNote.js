import React, { useContext }  from 'react'
import { IconButton } from '@mui/material';
import { PinOff } from 'lucide-react';
import NotesDB from '../../context/DataContext';
import { useSnackbar } from 'notistack';


const PinedNote = ({data , ind , setPinNotes}) => {
    
    const {setNotes} = useContext(NotesDB)
    const {enqueueSnackbar} = useSnackbar()

    const pinOut = () =>{
      let items = JSON.parse(localStorage.getItem('PinedNotes'))
      let updateItems = items.filter((e ,index)=> index !== ind)
      setPinNotes(updateItems)
      setNotes((prev)=> [...prev , data] )
      enqueueSnackbar('Pinned Out successfully' , { variant: 'success'})
      if(items.length > 0){
        localStorage.setItem('PinedNotes' , JSON.stringify(updateItems))
      }

    }


  return (
    <div className='note bg-white border py-4 shadow-sm px-6 rounded-[1.6rem] '>
            <div className=' border-b-2 pb-3'>
                <div className='flex mb-2 items-center justify-between'>
                    <h1 className=' font-semibold text-2xl'>{data.title}</h1>
                    <div className=' flex gap-1 items-center'>
                        <IconButton onClick={pinOut}>
                            <PinOff fontSize='medium' />
                        </IconButton>
                    </div>
                </div>
                <div>
                    <p className='text-gray-800'>{data.tagline}</p>
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

export default PinedNote