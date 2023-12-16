import React, { useContext } from 'react'
import Note from './Note'
import { IconButton } from '@mui/material'
import { Plus, Search } from 'lucide-react';
import Modal from './Modal';
import ModalContext from '../../context/ModalContext';

const Home = () => {

    const {setShow} = useContext(ModalContext)

    return (
        <div className=' mt-24 py-10 px-4 md:px-12'>
            <div className=' flex gap-6  items-center md:w-4/5 lg:w-3/5 mx-auto'>
                <div className='flex w-full border bg-white  py-1 px-3 rounded-xl'>
                    <input type="text" placeholder='Search the content' className=' w-full outline-none py-1 px-2' />
                    <IconButton color='red'>
                        <Search />
                    </IconButton>
                </div>
                <div onClick={()=>setShow(true)} className=' cursor-pointer rounded-full p-2 bg-purple-300'>
                    <Plus size={24} />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-12'>
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
            </div>
            <Modal/>
        </div>

    )
}

export default Home