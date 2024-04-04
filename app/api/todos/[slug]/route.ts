import { NextRequest, NextResponse } from "next/server"
import { collection, getDocs,addDoc ,query,orderBy,updateDoc,deleteDoc,doc,setDoc, Timestamp } from "firebase/firestore";
import { db } from "../../../firebase"
import {Todotype,addfetch} from '../../../model/mytype'

//삭제하기
async function dele(id:string){
    
    
        await deleteDoc(doc(db, "mytodo", id)) 
     
  }
  
export async function DELETE(req:NextRequest,
    { params }: { params: { slug: string } }
    ){
    const deletedata = await dele(params.slug)
    interface mydata {
      msg:string,
      data : string | void
    } 
    const response:mydata ={
      msg : "삭제 성공",
      data:deletedata
    }
    return NextResponse.json(response,{ status : 201})
  }



  //업데이트하기
async function update(id:string, content:string,create:string, isdone:boolean){
   
    const editField:Todotype = {
      content,
      create:create,
      isdone :isdone,
      id:id
    } 
    
    
        await updateDoc(doc(db, "mytodo", id), editField);
    
    return editField
  }


  export async function POST(req:NextRequest,
    { params }: { params: { slug: string } }
    ){
      if(params.slug === "update"){
          const {id,content,isdone,create} = await req.json()
          const updatedata = await update(id,content,create,isdone)
           const response :addfetch={
            msg : "업데이트 성공",
            data:updatedata
          }
          return NextResponse.json(response,{ status : 201})
      }  
}