import React from 'react'
import "../styles/Cabecera.css"
import Logo from "../images/logo.jpg"
import User from "../images/usuario.jpg"

function Cabecera() {
    return (
        <div className='header'>
            <img className="logo" src={Logo} alt="Suchas Sport" />
            <img className="user" src={User} alt="Usuario" />
        </div>
    )
}

export {Cabecera}