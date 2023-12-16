import { IconButton } from '@mui/material'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useContext, useState } from 'react'
import NotesDB from '../../context/DataContext'

const Pagination = () => {

    const arr = [...Array(3)].map((_, i) => i + 1)
    const [select, setSelect] = useState(1)
    const { loading } = useContext(NotesDB)

    const forward = () => {
        if (select + 1 <= arr.length) setSelect(select + 1)
        else setSelect(1)
    }

    const backward = () => {
        if (select - 1 >= 1) setSelect(select - 1)
        else setSelect(arr.length)
    }


    return (
        <>
            {!loading &&
                <div className=' my-8 mb-8 px-12 mx-auto w-fit'>
                    <div className=' flex items-center gap-6'>
                        <IconButton onClick={backward}>
                            <ChevronLeft />
                        </IconButton>

                        <div className=' flex gap-4'>

                            {
                                arr.length && arr.map((elem, index) => {

                                    return (
                                        <div key={index} onClick={() => setSelect(index + 1)} className={` ${select === index + 1 ? 'border bg-red-100' : 'bg-white'}  flex justify-center cursor-pointer items-center text-lg p-5 h-7 w-7 border rounded-full`}>
                                            {elem}
                                        </div>
                                    )
                                })

                            }
                        </div>
                        <IconButton onClick={forward}>
                            <ChevronRight />
                        </IconButton>
                    </div>
                </div>

            }

        </>
    )
}

export default Pagination