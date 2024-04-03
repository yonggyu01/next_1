import { NextRequest, NextResponse } from "next/server"
import { getFirestore ,collection, getDocs} from "firebase/firestore";
import { db } from "@/app/data/firebase"
import {Todotype} from '../model/mytype'


async function fetchtodos(){
  const querySnapshot = await getDocs(collection(db, "me"));
  // console.log(process.env, '환경변수')
  if(querySnapshot.empty){
    return [];
  }

  const result = [] as Todotype[]  ;
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.data(),'가져온거 값')
    const tododata= {
      id : doc.data()["id"],
      content : doc.data()["content"],
      create : doc.data()["create"],
      isdone : doc.data()["isdone"]
    } as Todotype
    result.push(tododata)
    // doc.data()
  });
  return result
} 


export async function GET (req : NextRequest)  {
    const resultdata = await fetchtodos();
    console.log(resultdata,'왜 안되냐')
    const response = resultdata

    return NextResponse.json(response,{ status : 200 })
  }