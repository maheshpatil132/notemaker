import { Dialog } from '@mui/material'
import { X } from 'lucide-react'
import React, { useContext, useState} from 'react'
import ModalContext from '../../context/ModalContext'
import { useSnackbar } from 'notistack'

const Modal = () => {
    const {show , setShow} = useContext(ModalContext)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [tagline, setTagLine] = useState('')
    const { enqueueSnackbar , closeSnackbar} = useSnackbar()


    const titlehandler = (e)=>{
      setTitle(e.target.value)
    }

    const taglinehandler = (e)=>{
        setTagLine(e.target.value)
      }

      const bodyhandler = (e)=>{
        setBody(e.target.value)
      }

    const submitHandle = (e)=>{
      e.preventDefault();

      if(!title) return enqueueSnackbar('Please write title' , {variant:'error'})
      if(!tagline) return enqueueSnackbar('Please write tagline', {variant:'error'})
      if(!body) return enqueueSnackbar('Please write body Content', {variant:'error'})
      
    }
    return (
        <div>
            <Dialog open={show}>
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
                        <textarea value={body} onChange={(e)=>bodyhandler(e)} rows={5} type="text" id='title' className='mt-1 py-1 px-2 w-full border' />
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