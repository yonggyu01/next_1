"use client"
import React from 'react'
import todo from '../styles/todo.module.scss'
import {TodoWrite} from './todo_write'

export type TodoList = typeof Todolist;

export const Todolist:React.FC =()=>{

    return (   
        <div className={todo.bg}> 
            <div className={todo.wrap}>
              <TodoWrite></TodoWrite>
            <table className={todo.table}>
              <thead className="">
                <tr>
                  <th className={todo.hp}>완료</th>
                  <th className={todo.hp}>등록일</th>
                  <th className={todo.hp}>내용</th>
                
                  <th className={todo.hp}>edit</th>
                  <th className={todo.hp}>delete</th>
                </tr>
              </thead>
          
              <tbody className="">
                <tr>
                  <td className={todo.td}>미완료</td>
                  <td className={todo.td}>24/05/1995</td>
                  <td className={todo.td}>오늘은 잠자기</td>
             
                  <td className={todo.edit}>
                    <button>수정</button>
                  </td>
                  <td className={todo.del}>
                    <button>삭제</button>
                  </td>
                </tr>
        
              </tbody>
            </table>
          </div>
      </div>
    )
}