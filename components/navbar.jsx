import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { SocialIcon } from "react-social-icons";
import { FaRandom } from "react-icons/fa";
import { HiSignal } from "react-icons/hi2";
import { FaFilter } from 'react-icons/fa'
const Navbar = ({ toggle }) => {
  const [lang, setLang] = useState("eng");
  const [sideSearch, setSideSearch] = useState(false);

  return (
    <div className="flex w-full h-19 bg-slate-500 items-center justify-between  p-3 xl:bg-transparent flex-wrap ">
      <div className="flex items-center">
        <FaBars size={25} className="cursor-pointer" onClick={toggle} />
        <span className="text-2xl ml-7 text-white font-Kanit font-bold cursor-pointer">
          Animania
          <span className="text-xl font-Nunito ml-1 font-bold">.to</span>
        </span>
        <div className="ml-4 bg-white w-[350px] h-[40px] lg:flex hidden items-center p-1 ">
          <form className="flex justify-between items-center w-full">
            <input
              className=" px-4 font-thin font-Nunito w-[300px] text-sm text-gray-800 focus:border-0 focus:outline-none "
              placeholder="Search anime..."
            />
            <span className="flex items-center gap-2">
              <BiSearch size={20} className="text-black cursor-pointer" />
              <span className="w-[3rem] h-7 bg-gray-800 text-[12px] flex items-center justify-center rounded-md cursor-pointer font-Kanit">
                Filter
              </span>
            </span>
          </form>
        </div>
        <div className="lg:flex hidden gap-1 items-center ml-5">
          <SocialIcon
            url=""
            network="discord"
            fgColor="#ffffff"
            style={{ height: 30, width: 30 }}
          />
          <SocialIcon
            url=""
            network="telegram"
            fgColor="#ffffff"
            style={{ height: 30, width: 30 }}
          />
          <SocialIcon
            url=""
            network="reddit"
            fgColor="#ffffff"
            style={{ height: 30, width: 30 }}
          />
          <SocialIcon
            url=""
            network="twitter"
            fgColor="#ffffff"
            style={{ height: 30, width: 30 }}
          />
        </div>
        <div className=" sm:flex hidden ml-10 lg items-center gap-3">
          <div className=" flex flex-col justify-center items-center gap-1 cursor-pointer">
            <FaRandom size={25} />
            <span className="text-[11px] font-thin">Random</span>
          </div>
          <div className=" flex flex-col justify-center items-center gap-1 cursor-pointer">
            <HiSignal size={25} />
            <span className="text-[11px] font-thin">Watch2gether</span>
          </div>
          <div className=" flex flex-col justify-center items-center gap-1">
            <div className="flex w-[55px] h-6 bg-gray-800 justify-between text-[11px] items-center ">
              <span
                onClick={() => setLang("eng")}
                className={
                  lang === "eng"
                    ? "cursor-pointer w-full h-full bg-white text-black p-1 ease-out duration-150 font-Kanit"
                    : "cursor-pointer w-full h-full p-1"
                }
              >
                ENG
              </span>
              <span
                onClick={() => setLang("jpn")}
                className={
                  lang === "jpn"
                    ? "cursor-pointer w-full h-full bg-white text-black p-1 ease-out duration-150 font-Kanit"
                    : "cursor-pointer w-full h-full p-1"
                }
              >
                JPN
              </span>
            </div>
            <span className="text-[11px] font-thin">Anime Name</span>
          </div>
        </div>
        <div className="ml-10 lg:block hidden ">
          <button className="px-5 py-2 rounded-2xl bg-gray-700 text-[12px] font-thin">
            Donate
          </button>
        </div>
      </div>
      <div className=" flex items-center gap-4 ">
        <BiSearch
          size={25}
          className="lg:hidden block cursor-pointer"
          onClick={() => setSideSearch(!sideSearch)}
        />
        <button className="w-20 h-11 flex items-center justify-center rounded-md cursor-pointer bg-gray-700">
          Login
        </button>
      </div>
      <div className={sideSearch?"w-full bg-slate-500 h-12 mt-2 flex gap-3 items-center ease-linear duration-100":"hidden"}>
        <button className="flex w-[40px] h-[40px] rounded-md bg-gray-700 justify-center items-center">
<FaFilter size={15}/>
        </button>
        <form className="w-[90%] bg-white flex items-center justify-between p-0 rounded-md">
          <input placeholder="Search anime..." className="w-full text-black focus:outline-none focus:border-none py-2 px-3 rounded-md"/>
          <BiSearch size={22} className="text-black mr-2 cursor-pointer"/>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
