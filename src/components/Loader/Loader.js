import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'

const Loader = ({loading}) => {
  return (
    <div className=''>
        <Backdrop open={loading} sx={{ zIndex : '1000' }}>
            <CircularProgress color='inherit' />
        </Backdrop>
    </div>
  )
}

export default Loader