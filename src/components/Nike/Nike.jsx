import React from 'react'
import Nik from "../../images/logonike.jpg"
import "../../styles/Nike.css"
import { Nikeone } from './Nikeone'
import { Niketwo } from './Niketwo'

function Nike() {
    return (
        <div>
            <div className='nike'>
                <img className='lgnike' src={Nik} alt="Logo nike" />
            </div>
            <div className='productos-n'>
                <Nikeone/>
                <Niketwo/>
            </div>
        </div>
    )
}

export {Nike}