import { useRouter } from 'next/router'
import React, { useReducer } from 'react'

const Page = () => {
    const router = useRouter()
  return (
    <div>
        {router.query.slug}
    </div>
  )
}

export default Page