import React, { useContext, useState } from 'react'
import Note from './Note'
import { CircularProgress, IconButton } from '@mui/material'
import { Minus, Plus, Search } from 'lucide-react';
import Modal from './Modal';
import ModalContext from '../../context/ModalContext';
import NotesDB from '../../context/DataContext';
import Pagination from '../layouts/Pagination';
import EntryForm from './EntryForm';
import PinedNote from './PinedNote';
import NoDataImg from '../../assets/nodata.svg'

const Home = () => {

    const { editNote } = useContext(ModalContext)
    const { notes, loading, pageIndex, ShowNumber } = useContext(NotesDB)
    const [noteToggle, setNoteToggle] = useState(false)


    let pineddata = JSON.parse(localStorage.getItem('PinedNotes'))

    return (
        <div className=' mt-24 py-10 px-4 md:px-12'>
            <div className=' flex flex-col lg:flex-row gap-6  items-center  mx-auto'>
                <div className=' flex gap-5 flex-1 justify-center items-center'>
                    <div className='flex flex-1 justify-between w-full border bg-white  py-1 px-3 rounded-xl'>
                        <input type="text" placeholder='Search the content' className=' w-full outline-none py-1 px-2' />
                        <IconButton color='red'>
                            <Search />
                        </IconButton>
                    </div>
                    <div onClick={() => setNoteToggle(!noteToggle)} className=' cursor-pointer rounded-full p-2 bg-purple-300'>
                        {!noteToggle ? <Plus size={24} /> : <Minus size={24} />}
                    </div>
                </div>
                <Pagination />
            </div>



            {/* notes adding form  */}
            <div className={` ${!noteToggle ? 'h-0 overflow-hidden' : 'h-full'} transition-all`}>
                <EntryForm setNoteToggle={setNoteToggle}/>
            </div>

       {
       pineddata && pineddata.length > 0 &&
            <div className=' my-5 border-b-2 border-b-gray-400 py-10'>
                <h1 className=' text-gray-600 text-xl'>Pinned Notes</h1>
                <hr className=' my-2 h-1 bg-gray-400' />

                {pineddata &&
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-12'>
                        {
                            pineddata.map((elem, index) => {

                                return (
                                    <PinedNote key={index} ind={index} data={elem} />
                                )
                            })
                        }
                    </div>
                    
                    }

            </div>
       }

            {
                loading ?


                    <div className=' my-4 mt-10 flex w-full justify-center items-center'>
                        <CircularProgress />
                    </div>
                    :


                    notes.length > 0 ?

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-12'>
                            {
                                notes && notes.slice(pageIndex * ShowNumber - ShowNumber, pageIndex * ShowNumber).map((elem, index) => {
                                    return (
                                        <Note key={index} data={elem} />
                                    )
                                })
                            }
                        </div>

                        :
                        <div className=' my-10 flex flex-col justify-center items-center w-40 mx-auto'>
                            <img src={NoDataImg} className='' alt="No data" />
                            <h1 className='text-center text-xl font-semibold my-4 text-gray-700'>No Notes</h1>
                        </div>
            

            }


            <Modal NoteData={editNote} />
        </div>

    )
}

export default Home