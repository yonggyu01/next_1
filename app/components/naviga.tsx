import Link from 'next/link'
import React from 'react'
import { siteConfig } from '../config/siteConfig'
import style from '@/app/styles/navi.module.scss'

export const Naviga:React.FC = ()=>{
    return (
        <nav className={style.navi}>

            {siteConfig.navItems.map(item=> (
            <Link href={item.href} key={'link'+item.href}>
                {item.label}
            </Link>))}

       
        </nav>
    )
}