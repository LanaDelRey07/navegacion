import React from 'react'
import '../styles/App.css';
import { Cabecera } from './Cabecera';
import { Adidas } from './Adidas/Adidas';
import { Nike } from './Nike/Nike';
import { Puma } from './Puma/Puma';



function Home() {
  return (
    <div className='home'>
      <Cabecera/>
      <Adidas/>
      <Nike/>
      <Puma/>
    </div>
    
  )
}

export {Home}