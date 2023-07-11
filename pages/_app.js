import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/navbar'
import { UserProvider } from '@/context/authContext'
import '@/styles/globals.css'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const [open, IsOpen] = useState(false);
  const toggle = () => {
    IsOpen(!open);
  };
  return(
  <UserProvider>
     <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={open} />
  <Component {...pageProps} />
  </UserProvider>
  )
}
