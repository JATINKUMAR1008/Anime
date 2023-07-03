import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import  zAnime  from 'z-anime'
const handler = async (req, res) => {
    
    let temp ={}
    temp = await zAnime.trending()
  
  if (temp) {
    NextResponse.json(temp);
    res.status(200).json({ temp });
    
  }
};

export default handler;
