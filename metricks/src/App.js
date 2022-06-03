import React from 'react';
import { ComingSoon, About, Blog, Contact, Github } from './components';
import './styles/app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {


    return (

        <Router >
            <div className='app'>
                <Routes>
                    <Route path='/' element={<ComingSoon />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/github' element={<Github />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </div>
        </Router>



    )
}



export default App