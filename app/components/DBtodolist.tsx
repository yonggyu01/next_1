"use client"
import React, { useEffect,useState } from 'react'
import todo from '../styles/todo.module.scss'
import {DBTodoWrite} from './DBtodo_write'
import Link from 'next/link';
import  {TodoList} from '../store/Todostore';
import { useAppDispatch,useAppSelector } from '../store/hook';
import { RootState } from '../store/store';
import {Todotype,addpost} from '../model/mytype'
import axios, { AxiosResponse } from 'axios';




export const DBTodolist:React.FC =()=>{
  // 모달창 띄울 변수
 const [is_modal , setis_modal] = React.useState<boolean>(false)
  // 모달창 띄우는 함수
  const [render,setrender]= useState<Boolean>(false)
  const [list, setlist] = useState<any[]>([])
useEffect(()=>{
  // console.log(TodoList, 're',React.use(GET()))
},[is_modal])
useEffect(()=>{
  getdata()
  setrender(false)
},[render])
//데이터 요청
  async function getdata(){
    const get:AxiosResponse = await axios.get('/api/todos')
    const result  = get.data
    console.log(result ,"데이터")
    setlist(result)
  }
  // 데이터 입력
  async function adddata(array:addpost){
      try{
        const post:AxiosResponse = await axios.post('/api/todos',array)
        const result = post.data
        console.log(result ,' add')   
      setrender(true)
      } catch(err){
        console.log('서버오류')
      } 
  }
//데이터 수정
async function updatedata(array:Todotype){
  try{
    const getcontent:string = globalThis.window.prompt('수정하시오',array.content) ||array.content
    array.content = getcontent
    const post:AxiosResponse = await axios.post(`/api/todos/update`,array)
    const result = post.data
    setrender(true)
  }
  catch(err){
    console.log('server')
  }
}
// 삭제
async function deldata(id:string){
  try{
    const isTrue =globalThis.window.confirm('삭제할거니?')
    if(isTrue){
      const deletedata:AxiosResponse = await axios.delete(`/api/todos/${id}`)
      const result = deletedata.data
      setrender(true)
    }
  }
  catch(err){
    console.log('server')
  }
}

  function addclick():void{
  setis_modal(!is_modal)
 }
 const dispatch = useAppDispatch()



 console.log('re',list)
    return (   
        <div className={todo.bg}> 
            <div className={todo.wrap}>
              <DBTodoWrite is_modal={is_modal} addclick={addclick} adddata={adddata}></DBTodoWrite>
              <div className={todo.addtitle}> 
            
            <button className={todo.add}> + </button> 
            <span className={todo.addtext} onClick={addclick}>추가하기</span> 
          </div>
            <table className={todo.table}>
              {list.length < 1 ? null :  <thead>
                <tr>
                  <th className={todo.hp}>완료</th>
                  <th className={todo.hp}>등록일</th>
                  <th className={todo.hp}>내용</th>
                
                  <th className={todo.hp}>edit</th>
                  <th className={todo.hp}>delete</th>
                </tr>
              </thead>  

              }
            
          
              <tbody className="">
                {list&& list.map((item:Todotype,idx:number)=><tr key={item.create+idx}>
                <td className={todo.td}> {item.isdone? "완료" : "미완료"}</td>
                <td className={todo.td}>{item.create}</td>
                <td className={todo.td}>{item.content}</td>
           
                <td className={todo.edit}>
                  <button onClick={()=>{
              updatedata(item)
                  }}>수정</button>
                </td>
                <td className={todo.del}>
                  <button onClick={()=>{
                    deldata(item.id)
                  }}>삭제</button>
                </td>
              </tr>
                )}
        
              </tbody>
            
               
              
    
            </table>
      
          </div>
      </div>
    )
}