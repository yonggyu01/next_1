"use client"
import Link from 'next/link'
import React from 'react'
import { siteConfig } from '../config/siteConfig'
import style from '@/app/styles/navi.module.scss'
import {Buger} from './buger'
export const Naviga:React.FC = ()=>{
    const [isnone, setisnone] = React.useState<Boolean>(true)
    function onoff():void {
        setisnone(!isnone)
    }
    return (
        <nav className={style.navi}>

            {siteConfig.navItems.map(item=> (
            <Link href={item.href} key={'link'+item.href} className={style.href}> 
                {item.label}
            </Link>))}
            <div className={style.buger}>
            <Link href="" className={style.link} onClick={onoff}>
                <span></span>
                <span></span>
                <span></span>
            </Link>
                <Buger isnone={isnone} onoff={onoff} ></Buger>
            </div>
        </nav>
    )
}