import { NextRequest, NextResponse } from "next/server"

const handler = async(req,res) =>{
    var temp = {}
    const method = req.method
    var obj = {
        
            
        method: 'GET',
        headers: {
            "Access-Control-Allow-Origin": "*",
            'X-MAL-CLIENT-ID': '8f511907b747a9dbf27ab44c3e743581',
        }
    

}
    const body = JSON.parse(req.body)
    console.log(body)

    const response = await fetch(`https://api.myanimelist.net/v2/anime/${body.id}?fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics`,obj)
    temp = await response.json()
    if(temp){
        NextResponse.json(temp)
        res.status(200).json({ temp })
        console.log("data",temp)
    }



}

export default handler