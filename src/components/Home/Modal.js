import { Dialog } from '@mui/material'
import { X } from 'lucide-react'
import React, { useContext, useEffect, useState} from 'react'
import ModalContext from '../../context/ModalContext'
import { useSnackbar } from 'notistack'
import { supabase } from '../../Database/ConnectDB'
import NotesDB from '../../context/DataContext'
import LoaderContext from '../../context/LoaderContext'

const Modal = ({NoteData}) => {

    const {show , setShow} = useContext(ModalContext)   
    const {setNotes} = useContext(NotesDB)
    const { setLoader  } = useContext(LoaderContext)
    const [title, setTitle] = useState('')
    const [bodyContent, setBodyContent] = useState('')
    const [tagline, setTagLine] = useState('')
    const { enqueueSnackbar} = useSnackbar()
    

    const titlehandler = (e)=>{
      setTitle(e.target.value)
    }

    const taglinehandler = (e)=>{
        setTagLine(e.target.value)
      }

      const bodyhandler = (e)=>{
        setBodyContent(e.target.value)
      }

    const submitHandle = async(e)=>{
      e.preventDefault();

      if(!title) return enqueueSnackbar('Please write title' , {variant:'error'})
      if(!tagline) return enqueueSnackbar('Please write tagline', {variant:'error'})
      if(!bodyContent) return enqueueSnackbar('Please write body Content', {variant:'error'})

      setLoader(true)
    const { data, error } = await supabase.from('notes')
                                          .update({ title : title ,
                                                    tagline : tagline ,
                                                    body : bodyContent })
                                          .eq('id', NoteData.id)
                                          .select()
            
    setLoader(false)
     
     if(data){
         setTitle('')
         setTagLine('')
         setBodyContent('')
         setNotes((prev)=>{
            let index = prev.findIndex( (e) => e.id === data[0].id )
            if(index===-1) return enqueueSnackbar("something went wrong", {variant:'error'})
            prev[index] = data[0]
            return prev
         })
         setShow(false)
         enqueueSnackbar('Your Note has been Edited !' , { variant : 'success' })
     }
     
     if(error){
        enqueueSnackbar(error.message , { variant : 'error' })
     }
      
    }


    useEffect(()=>{
        if(NoteData){
            setTitle(NoteData.title || '');
            setTagLine(NoteData.tagline || '');
            setBodyContent(NoteData.body || '');
        }
    },[NoteData])
    return (
        <div>
            <Dialog open={show} sx={{ zIndex:'500' }}>
                <form onSubmit={(e)=>submitHandle(e)} action="" className=' relative flex flex-col gap-2 w-full lg:w-[400px] py-3 px-6'>
                    <div onClick={()=>setShow(false)} className=' cursor-pointer right-2 top-2 absolute'>
                        <X />
                    </div>
                    <h2 className=' font-medium text-lg mt-6 text-center'>Make your Notes so you can not forgot !!!</h2>
                    <div className=' my-2 '>
                        <label htmlFor="title" className=' text-sm  font-semibold'>Title</label>
                        <input value={title} onChange={(e)=>titlehandler(e)} type="text" id='title' className=' mt-1 py-1 px-2 w-full border' />
                    </div>
                    <div>
                        <label htmlFor="title" className=' text-sm  font-semibold'>Tagline</label>
                        <input value={tagline} onChange={(e)=>taglinehandler(e)} type="text" id='title' className='mt-1 py-1 px-2 w-full border' />
                    </div>
                    <div>
                        <label htmlFor="title" className=' text-sm font-semibold'>Body</label>
                        <textarea value={bodyContent} onChange={(e)=>bodyhandler(e)} rows={5} type="text" id='title' className='mt-1 py-1 px-2 w-full border' />
                    </div>
                    <div className=' flex gap-2'>
                    <div className=' cursor-pointer bg-red-300 h-7 w-7 rounded-full' ></div>
                    <div className=' cursor-pointer bg-blue-300  h-7 w-7 rounded-full' ></div>
                    <div className=' cursor-pointer bg-green-300 h-7 w-7 rounded-full' ></div>
                    <div className=' cursor-pointer bg-orange-300 h-7 w-7 rounded-full' ></div>
                    <div className=' cursor-pointer bg-yellow-300 h-7 w-7 rounded-full' ></div>
                    </div>
                    <button type='submit' className='font-medium bg-purple-300 py-2 my-2 mt-4 rounded-sm'>Save</button>
                </form>
            </Dialog>
        </div>
    )
}

export default Modal