import React from 'react'
import "../../styles/Puma.css"
import Pumi from "../../images/logopuma.png"
import { Pumaone } from './Pumaone'
import { Pumatwo } from './Pumatwo'

function Puma() {
    return (
        <div>
            <div className='puma'>
                <img src={Pumi} alt="Logo Puma" />
            </div>
            <div className='productos-p'>
                <Pumaone/>
                <Pumatwo/>
            </div>
        </div>
    )
}

export {Puma}