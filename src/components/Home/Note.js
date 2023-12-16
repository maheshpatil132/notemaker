import React, { useContext } from 'react'
import PushPinIcon from '@mui/icons-material/PushPin';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ModalContext from '../../context/ModalContext';

const Note = () => {
    const { setShow } = useContext(ModalContext)
    return (
        <div className='note bg-white border py-4 shadow-sm px-6 rounded-[1.6rem] '>
            <div className=' border-b-2 pb-3'>
                <div className='flex mb-2 items-center justify-between'>
                    <h1 className=' font-semibold text-2xl'>Lorem ipsum dolor</h1>
                    <div className=' flex gap-1 items-center'>
                        <IconButton>
                            <PushPinIcon fontSize='medium' />
                        </IconButton>
                        <IconButton onClick={() => setShow(true)}>
                            <EditIcon fontSize='medium' />
                        </IconButton>
                    </div>
                </div>
                <div>
                    <p className='text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius sequi voluptatibus minima assumenda?</p>
                </div>
            </div>
            <div className=' h-44 overflow-hidden hover:overflow-y-scroll'>
                <p className=' text-gray-600 mt-2'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque aliquid soluta est consequatur ab molestiae natus tempore! Ipsam, nemo dolorem magni, enim natus harum soluta fuga alias cupiditate deserunt cum porro nisi excepturi ex voluptatem architecto, consectetur quae corporis.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, exercitationem!
                </p>
            </div>
        </div>
    )
}

export default Note