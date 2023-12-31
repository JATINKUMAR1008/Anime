import Image from "next/image";
import { Calistoga, Inter } from "next/font/google";
import { useEffect, useState } from "react";
import handler from "./api/zoro";
import axios from "axios";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/Sidebar";

import { useAuth } from "@/context/authContext";
import { useRouter } from "next/router";
import Horizontal from "@/components/Horizontal";
import Spotlight from "@/components/Spotlight";
import List from "@/components/List";

import Footer from "@/components/Footer";
import Loading from "@/components/Loading";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const [url, setUrl] = useState(null);
  const [wait, setWait] = useState(false);
  const [open, IsOpen] = useState(false);
  const toggle = () => {
    IsOpen(!open);
  };
  const { currentUser, isLoading } = useAuth();
  const menu = [
    "Top Airing",
    "Most Popular",
    "Most Favorite",
    "Latest Completed",
  ];
  useEffect(() => {
    if (!isLoading && currentUser) {
      if (
        String(currentUser?.profileStatus) === "unComplete" &&
        String(currentUser.displayName) === ""
      ) {
        router.push("/form");
      }
    }

    

    
  }, [currentUser, isLoading]);

  let temp ={}
  const fetchData = async () => {
    const response = await fetch("/api/zoro");
    temp = await response.json();
    if (temp) {
      setUrl(temp);
      setWait(true)
    }
  };
  useEffect(() => {
    fetchData();
  },[!url]);
  return !wait ? (
    <Loading/>
  ) : (
    <>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={open} />
      <Spotlight />
      <Horizontal />
      {menu.map((value, key) => (
        <List heading={value} key={key} />
      ))}
      <Footer/>
      {/*  
      <List2/><iframe
        width={"720"}
        height={"560"}
        src={url.iframeLink.link}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>*/}
     
    </>
  );
}
