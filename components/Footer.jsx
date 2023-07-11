import React from "react";
import { SocialIcon } from "react-social-icons";
const Footer = () => {
  return (
    <div className="w-full h-full p-2 mt-6 mb-3">
      <div className=" flex items-center w-full h-full gap-4 mx-3 my-6">
        <h1 className="text-3xl font-semibold font-Kanit text-left">
          Animania
        </h1>
        <span className="w-[0.1rem] h-10 m bg-slate-500"></span>
        <div className="flex  gap-2 items-center">
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
      </div>
      <span className="w-full h-3 bg-white"></span>

      <span className="flex gap-5 mx-3 items-center">
        <span className="cursor-pointer hover:text-gray-500">
        Terms of service

        </span>
        <span className="cursor-pointer hover:text-gray-500">
        DMCA
        </span>
        <span className="cursor-pointer hover:text-gray-500">
        Contact
        </span>
      </span>
      <span className="mt-3 mx-3 flex flex-col">
        <span className="text-lg text-gray-400">
        Animania does not store any files on our server, we only linked to the media which is hosted on 3rd party services.
        </span>
        <span className="text-lg text-gray-400 mt-2">
        © {new Date().getFullYear()} All rights reserved. <span className="text-md font-Kanit ml-2">Animania</span>
        </span>
      </span>
    </div>
  );
};

export default Footer;
