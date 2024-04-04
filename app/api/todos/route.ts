import { NextRequest, NextResponse } from "next/server"
import { collection, getDocs,addDoc ,query,orderBy,updateDoc,deleteDoc,doc,setDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase"
import {Todotype,addfetch} from '../../model/mytype'

const mydb = collection(db, "mytodo")

// data 가져오기
async function fetchtodos() {
  const querySnapshot = await getDocs( query(mydb,orderBy("create")));
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
      // .toDate(),
      // +(doc.data()["create"].toDate().toLocaleTimeString('ko')),
      isdone : doc.data()["isdone"]
    } as Todotype
    result.push(tododata)
    // doc.data()
  });
  return result
} 
// 추가하기
async function addtodo(content:string,create:string) {
  // const create = Timestamp.fromDate(new Date())
  const newtodoRef = doc(mydb);
  const data ={
    content,
    isdone:false,
    id:newtodoRef.id,
    create 
  }
  await setDoc(newtodoRef, data);
 
return data
}




export async function GET (req : NextRequest)  {
  const resultdata = await fetchtodos();
   const response = resultdata

    return NextResponse.json(response,{ status : 200 })
  }
export async function POST (req : NextRequest)  {
  const {content,create} =await req.json()
  const adddata = await addtodo(content,create);
  const response :addfetch = {
      msg : "데이터추가성공",
      data : adddata
  }  
    return NextResponse.json(response,{ status : 201 })
  }



