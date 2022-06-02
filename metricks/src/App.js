import React from 'react';
import { Navbar, Homepage, Footer } from './components';
import './styles/app.css';
import { Outlet } from 'react-router-dom';


export const Layout = () => {
    return (
        <div className='app'>
            <Navbar />
            <Outlet />
        </div>

    )
}


const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <Homepage />
            <Footer />
        </div>
    )
}



export default App