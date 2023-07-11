import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import  zAnime  from 'z-anime'
const handler = async (req, res) => {
    const menu = ['Top Airing','Most Popular','Most Favorite','Latest Completed']
    const s = req.body

    console.log(s)
    let temp ={}
    switch (s.gen.heading) {
        case "Top Airing":
            temp = await zAnime.airing(s.page.no)
            break;
        case "Most Popular":
            temp = await zAnime.popular(s.page.no)
            break;
        case "Most Favorite":
            temp = await zAnime.favourite(s.page.no)
            break;
        case "Latest Completed":
            temp = await zAnime.latest(s.page.no)
            break;
        default:
            break;
    }
   
    
  
  if (temp) {
    NextResponse.json(temp);
    res.status(200).json({ temp });
    console.log("data", temp);
  }
};

export default handler;
