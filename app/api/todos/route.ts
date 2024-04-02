import { NextRequest, NextResponse } from "next/server"


export async function GET (req : NextRequest)  {
    const response = {
      msg : 'hahaha',
      data : ['hh','aa','ddd']
   }

    return NextResponse.json(response,{ status : 200 })
  }