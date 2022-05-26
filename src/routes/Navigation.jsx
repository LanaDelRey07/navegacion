    import React from 'react'
    import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
    import { Home } from '../components/Home'
    import { Login } from '../components/Login'
    import '../styles/App.css'
    import { Students } from '../components/Students'
    import logo from '../../src/logo_sucha.png';
    
    function Navigation() {
      return (
        
        <BrowserRouter>
        <nav>
            <img src={logo} alt='' width={200}/>
        <ul>
            <li>
                <NavLink to='/' className={({isActive}) => isActive ? 'nav-active' : ''}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/Login' className={({isActive}) => isActive ? 'nav-active' : ''}>
                    Login
                </NavLink>
            </li>
            <li>
                <NavLink to='/students' className={({isActive}) => isActive ? 'nav-active' : ''}>
                    Students
                </NavLink>
            </li>
        </ul>
        </nav>
            <Routes>
                <Route path='/' element={Home}/>
                <Route path='Login' element={Login}/>
                <Route path='Students' element={Students}/>
            </Routes>
        </BrowserRouter>
      )
    }
    
    export {Navigation}