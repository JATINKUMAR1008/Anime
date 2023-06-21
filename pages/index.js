import Image from "next/image";
import { Calistoga, Inter } from "next/font/google";
import { useEffect, useState } from "react";
import handler from "./api/zoro";
import axios from "axios";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/Sidebar";
import Carosuel from "@/components/Carosuel";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [url, setUrl] = useState(null);
  const [wait, setWait] = useState(false);
  const [open,IsOpen] = useState(false)
  const toggle = () =>{
    IsOpen(!open)
  }
  var obj ={
    "id": 51535
  }
 
  var link_data = {};
  

  const data = async () => {
    const response = await fetch("/api/zoro");
    link_data = await response.json();
    if (link_data) {
      setUrl(link_data);
      console.log(url?.iframeLink.link);
    }

    check();
  };
  const check = () => {
    if (url) {
      setWait(false);
    }
  };
  useEffect(() => {
    data();
   
    check
  }, [!url]);
  return wait ? (
    <>true</>
  ) : (
    <>
      <Navbar toggle={toggle}/>
      <Sidebar toggle={toggle} isOpen={open}/>
      <Carosuel/>
      {/*<iframe
        width={"720"}
        height={"560"}
        src={url.iframeLink.link}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>*/}
    </>
  );
}
