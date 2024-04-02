"use client"
import React, {  CSSProperties, useState } from 'react'
import style from '../styles/todowrite.module.scss'
import  {TodoList,update} from '../store/Todostore';
import {Todotype} from '../model/mytype'
import { useAppDispatch,useAppSelector } from '../store/hook';
import {v4 as uuidv4} from 'uuid';
interface Ownprops{
    is_modal : boolean,
    addclick() :void 
}

export const TodoWrite :React.FC<Ownprops> = ({is_modal,addclick})=>{   
    const [addinput,setaddinput] = useState('')
    // console.log(  is_modal ,'프룹스로 받음'    )
    const dispatch = useAppDispatch()
    const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>)=>{

        setaddinput(e.currentTarget.value)

    }
    function pushdata(e:React.FormEvent<HTMLFormElement>):void {
        e.preventDefault()
        console.log(e)
        const date :Date = new Date()
        const createdate:string = (date.getMonth()+1) + '월' + date.getDate()+"일" + date.getHours() + "시" + date.getMinutes() +"분"
        const data:Todotype ={
            isdone : false,
            create : createdate,
            content : addinput,
            id :uuidv4()
        } 
        setaddinput('')
        dispatch(TodoList.actions.add(data))
        
    }
    const stringdn : undefined = undefined
    const dn:CSSProperties = {
        display : "none"
    } 
    return (
        
        <div className={is_modal? style.modal1 : style.displaynone} style={is_modal? stringdn : dn}>
            <form onSubmit={pushdata}>
                <fieldset className={style.set}>

                    <legend >
                        오늘할일
                    </legend>
                    <input type='text' value={addinput} onChange={onChangeInput} placeholder='오늘할일'/>
                    <button onClick={addclick}> 추가 </button> 
                </fieldset>
            </form>
        </div>
    )
}