import { NextRequest, NextResponse } from "next/server"


export async function GET (req : NextRequest, { params }: { params: { slug: string } })  {
    const response = {
      msg : 'succ',
      data : {
        id : params.slug,
        title : 'hi only one'
      }
   }

    return NextResponse.json(response,{ status : 200 })
  }


  export async function POST (req : NextRequest)  {
    const {title,id} = await req.json()
    const response = {
      msg : 'succ',
      data : {
          id,
          title,
          is_done : false 
      }
   }

    return NextResponse.json(response,{ status : 201 })
  }