import React from 'react'
import "../../styles/Adidas.css"
import Adid from "../../images/adidas.jpg"
import { Adidasone } from './Adidasone'
import { Adidastwo } from './Adidastwo'

function Adidas() {
    return (
        <div>
            <div className='adidas'>
                <img src={Adid} alt="Logo Adidas" />
            </div>
            <div className='productos-a'>
                <Adidasone/>
                <Adidastwo/>
            </div>
        </div>
    )
}

export {Adidas}