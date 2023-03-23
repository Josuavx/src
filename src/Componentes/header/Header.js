import React from 'react'
import Busca from '../busca/Busca'

import './header.css'

export default function Header(props) {
    return(
    <header className="app-header">
        <img src = {props.path} className='logo'/>
        <Busca className='bs'/>
    </header>

    )

}
