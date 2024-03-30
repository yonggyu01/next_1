"use client"
import React, { KeyboardEvent, useState } from 'react'
import style from '../styles/todowrite.module.scss'

export const TodoWrite :React.FC = ()=>{
    const [addinput,setaddinput] = useState('')
    const [isNone,setisNone] = useState(false)
    const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>)=>{

        setaddinput(e.currentTarget.value)

    }
    function pushdata(e:React.FormEvent<HTMLFormElement>):void {
        e.preventDefault()
        console.log(e)
        setisNone(!isNone)
        setaddinput('')
    }

    return (
        <div>
            <form onSubmit={pushdata}>
                <fieldset className={style.set}>

                    <legend >
                        오늘할일
                    </legend>
                    <input type='text' value={addinput} onChange={onChangeInput} placeholder='오늘할일'/>
                    <button > 추가 </button> 
                </fieldset>
            </form>
        </div>
    )
}