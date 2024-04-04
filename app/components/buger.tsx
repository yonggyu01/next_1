"use client"

import React from 'react'
import Link from 'next/link'
import style from '@/app/styles/buger.module.scss'
import { siteConfig } from '../config/siteConfig'
interface Ownprops{
    isnone: Boolean,
    onoff() : void
}
export const Buger:React.FC<Ownprops> = ({isnone,onoff})=>{
    return (
        <div className={isnone && style.displaynone }>
            <div className={style.buger}>
                <Link className={style.text} href={siteConfig.navItems[1].href}>{siteConfig.navItems[1].label}</Link>
                <Link className={style.text} href={siteConfig.navItems[2].href}>{siteConfig.navItems[2].label}</Link>
            </div>
        </div>
    )
}