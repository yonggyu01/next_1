import { NextRequest, NextResponse } from "next/server"


export async function GET (req : NextRequest)  {
    const response = {
      msg : 'hahaha',
      data : 'hi today'
    }

    return NextResponse.json(response,{ status : 200 })
  }