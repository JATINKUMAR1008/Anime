import { NextResponse } from "next/server";
import { getAnimeInfoByName, getEpList, zoroSearch,getEpisodeServers,getStreamsById, } from "zoro-to-api"



const handler = async(req,res)=>{
    let searches = await zoroSearch("Horimiya");
    let Horimiya = searches[0];
    let info = await getAnimeInfoByName(Horimiya.eng_title);
    let episodes = await getEpList(Horimiya.id);
    let episodeOne = episodes.episodes[0];
    let episodeOneServers = await getEpisodeServers(episodeOne.epId);
    let iframeLink = await getStreamsById(episodeOneServers.serversSub[0].serverId);
    console.log("called",episodeOneServers)
    NextResponse.json(episodeOneServers)
    res.status(200).json({ iframeLink })
}

export default handler

/*export default function handler (req, res) {
    let zoroResults = await zoroSearch("Horimiya")
    console
    
  }*/
