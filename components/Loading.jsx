import React from 'react'
import { Loader } from 'rsuite'

const Loading = () => {
  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 w-[100vh] h-[100vh] flex items-center justify-center'>
        <Loader size='lg'/>
    </div>
  )
}

export default Loading