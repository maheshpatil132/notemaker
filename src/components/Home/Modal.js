import { Dialog } from '@mui/material'
import { X } from 'lucide-react'
import React, { useContext} from 'react'
import ModalContext from '../../context/ModalContext'

const Modal = () => {
    const {show , setShow} = useContext(ModalContext)
    
    return (
        <div>
            <Dialog open={show}>
                <form action="" className=' relative flex flex-col gap-2 w-[400px] py-3 px-6'>
                    <div onClick={()=>setShow(false)} className=' cursor-pointer right-2 top-2 absolute'>
                        <X />
                    </div>
                    <h2 className=' font-medium text-lg mt-6 text-center'>Make your Notes so you can not forgot !!!</h2>
                    <div className=' my-2 '>
                        <label htmlFor="title" className=' text-sm  font-semibold'>Title</label>
                        <input type="text" id='title' className=' mt-1 py-1 px-2 w-full border' />
                    </div>
                    <div>
                        <label htmlFor="title" className=' text-sm  font-semibold'>Tagline</label>
                        <input type="text" id='title' className='mt-1 py-1 px-2 w-full border' />
                    </div>
                    <div>
                        <label htmlFor="title" className=' text-sm font-semibold'>Body</label>
                        <textarea rows={5} type="text" id='title' className='mt-1 py-1 px-2 w-full border' />
                    </div>
                    <div className=' flex gap-2'>
                    <div className=' cursor-pointer bg-red-300 h-7 w-7 rounded-full' ></div>
                    <div className=' cursor-pointer bg-blue-300  h-7 w-7 rounded-full' ></div>
                    <div className=' cursor-pointer bg-green-300 h-7 w-7 rounded-full' ></div>
                    <div className=' cursor-pointer bg-orange-300 h-7 w-7 rounded-full' ></div>
                    <div className=' cursor-pointer bg-yellow-300 h-7 w-7 rounded-full' ></div>
                    </div>
                    <button className='font-medium bg-purple-300 py-2 my-2 mt-4 rounded-sm'>Save</button>
                </form>
            </Dialog>
        </div>
    )
}

export default Modal