import { useSnackbar } from 'notistack'
import React, { useContext, useState } from 'react'
import { supabase } from '../../Database/ConnectDB'
import NotesDB from '../../context/DataContext'

const EntryForm = ({setNoteToggle}) => {

    const [title, setTitle] = useState('')
    const [bodyContent, setBodyContent] = useState('')
    const [tagline, setTagLine] = useState('')
    const { enqueueSnackbar } = useSnackbar()
    const {setNotes,notes} = useContext(NotesDB)

   
    const titlehandler = (e) => {
        setTitle(e.target.value)
    }

    const taglinehandler = (e) => {
        setTagLine(e.target.value)
    }

    const bodyhandler = (e) => {
        setBodyContent(e.target.value)
    }

    const submitHandle = async (e) => {
        e.preventDefault();

        if (!title) return enqueueSnackbar('Please write title', { variant: 'error' })
        if (!tagline) return enqueueSnackbar('Please write tagline', { variant: 'error' })
        if (!bodyContent) return enqueueSnackbar('Please write body Content', { variant: 'error' })

        const { data, error } = await supabase.from('notes').insert([{
            title: title,
            body: bodyContent,
            tagline: tagline
        }]).select()


        if(data){
            setTitle('')
            setTagLine('')
            setBodyContent('')
            setNoteToggle(false)
            setNotes([...notes , ...data])
            enqueueSnackbar('Your Note has been Added !' , { variant : 'success' })
        }
        
        if(error){
           enqueueSnackbar(error.message , { variant : 'error' })
        }
         
    }

    return (
        <div className='rounded-3xl mt-10 mx-auto w-full py-8 lg:px-10 px-6 bg-white'>
            <h1 className=' text-center text-xl lg:text-3xl mb-16 font-semibold'>Write your Important Point Here</h1>
            <form onSubmit={(e) => submitHandle(e)}
                action=""
                className=' relative flex flex-col gap-5 w-full lg:w-3/5 lg:mx-auto '>
                <div className=' my-2 '>
                    <label htmlFor="title" className=' text-sm font-semibold'>Title</label>
                    <input value={title} onChange={(e) => titlehandler(e)} type="text" id='title' 
                    className=' mt-1 py-2.5 rounded-md px-2 w-full border' />
                </div>
                <div>
                    <label htmlFor="title" className=' text-sm  font-semibold'>Tagline</label>
                    <input value={tagline} onChange={(e) => taglinehandler(e)} type="text" id='title' className='mt-1 rounded-md  py-2.5 px-2 w-full border' />
                </div>
                <div>
                    <label htmlFor="title" className=' text-sm font-semibold'>Body</label>
                    <textarea value={bodyContent} onChange={(e) => bodyhandler(e)} rows={5} type="text" id='title' className='mt-1 py-2.5 px-2 w-full border' />
                </div>
                <div className=' flex gap-2'>
                    <div className=' cursor-pointer bg-red-300 h-7 w-7 rounded-full' ></div>
                    <div className=' cursor-pointer bg-blue-300  h-7 w-7 rounded-full' ></div>
                    <div className=' cursor-pointer bg-green-300 h-7 w-7 rounded-full' ></div>
                    <div className=' cursor-pointer bg-orange-300 h-7 w-7 rounded-full' ></div>
                    <div className=' cursor-pointer bg-yellow-300 h-7 w-7 rounded-full' ></div>
                </div>
                <button type='submit' className='font-medium bg-purple-300 hover:bg-purple-400 py-2.5 my-2 mt-4 rounded-lg'>Save</button>
            </form>
        </div>
    )
}

export default EntryForm