import { IconButton } from '@mui/material'
import { ChevronLeft, ChevronRight} from 'lucide-react'
import React, { useContext, useEffect} from 'react'
import NotesDB from '../../context/DataContext'

const Pagination = () => {

    const { loading , notes , ShowNumber , pageIndex ,setPageIndex} = useContext(NotesDB)
    const arr = [...Array(Math.ceil(notes.length/ShowNumber))].map((_, i) => i + 1)
    
    const forward = () => {
        if (pageIndex + 1 <= arr.length) setPageIndex(pageIndex + 1)
        else setPageIndex(1)
    }

    const backward = () => {
        if (pageIndex - 1 >= 1) setPageIndex(pageIndex - 1)
        else setPageIndex(arr.length)
    }

    useEffect(()=>{
        window.scrollTo(0 , 0)
    } , [pageIndex])

    return (
        <>
            {!loading &&
                <div className='  px-12  w-fit'>
                    <div className=' flex items-center gap-6'>
                        <IconButton onClick={backward}>
                            <ChevronLeft />
                        </IconButton>

                        <div className=' flex gap-4'>

                            {
                               arr && arr.length > 0 && arr.map((elem, index) => {

                                    return (
                                        <div key={index} onClick={() => setPageIndex(index + 1)} className={` ${pageIndex === index + 1 ? 'border bg-red-100' : 'bg-white'}  flex justify-center cursor-pointer items-center text-lg p-5 h-7 w-7 border rounded-full`}>
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