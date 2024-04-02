"use client"
import React, { useEffect } from 'react'
import todo from '../styles/todo.module.scss'
import {TodoWrite} from './todo_write'
import Link from 'next/link';
import  {TodoList} from '../store/Todostore';
import { useAppDispatch,useAppSelector } from '../store/hook';
import { RootState } from '../store/store';
import {Todotype} from '../model/mytype'
import {GET} from '../api/route'


export const Todolist:React.FC =()=>{
  // 모달창 띄울 변수
 const [is_modal , setis_modal] = React.useState<boolean>(false)
  // 모달창 띄우는 함수
useEffect(()=>{
  console.log(TodoList, 're',React.use(GET()))
},[is_modal])
  function addclick():void{
  setis_modal(!is_modal)
 }
 const dispatch = useAppDispatch()
 const list = useAppSelector((state:RootState) => state.TodoList);
 console.log('re',list)
    return (   
        <div className={todo.bg}> 
            <div className={todo.wrap}>
              <TodoWrite is_modal={is_modal} addclick={addclick}></TodoWrite>
              <div className={todo.addtitle}> 
            
            <button className={todo.add}> + </button> 
            <span className={todo.addtext} onClick={addclick}>추가하기</span> 
          </div>
            <table className={todo.table}>
              {list.todo.length < 1 ? null :  <thead>
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
                {list.todo&& list.todo.map((item:Todotype)=><tr>
                <td className={todo.td}> {item.isdone? "완료" : "미완료"}</td>
                <td className={todo.td}>{item.create}</td>
                <td className={todo.td}>{item.content}</td>
           
                <td className={todo.edit}>
                  <button onClick={()=>{
                    dispatch(TodoList.actions.update(item))
                  }}>수정</button>
                </td>
                <td className={todo.del}>
                  <button onClick={()=>{
                    dispatch(TodoList.actions.delete(item))
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