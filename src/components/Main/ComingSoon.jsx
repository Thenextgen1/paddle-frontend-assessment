import React from 'react';
import { Navbar, Footer } from '../../components';
import '../../styles/comingsoon.css';



const ComingSoon = () => {
    return (
        <>
            <Navbar />
            <main className='homepage'>
                <h1>SOMETHING AWESOME IS <br />COMING SOON</h1>
                <p className='homepage-showcase'>
                    <span>Your all-in-one affiliate marketing tracking software </span>
                    track, automate<span> and</span>
                    <br /> optimize
                    <span> your campaigns.
                    </span></p>
                <div className="counter-container">
                    <div>
                        <p>7</p>
                        <p>Days</p>
                    </div>
                    <div>
                        <p>24</p>
                        <p>Hours</p>
                    </div>
                    <div>
                        <p>54</p>
                        <p>Minutes</p>
                    </div>
                    <div>
                        <p>11</p>
                        <p>Second</p>
                    </div>
                </div>
                <div className='input-container'>
                    <input type="text" placeholder='First Name..' />
                    <input type="text" placeholder='Last Name..' />
                </div>
                <div className='waitinglist-container'>
                    <input className='email' type="text" placeholder='Enter your email address...' />
                    <div>
                        <button>JOIN OUR WAITING LIST..</button>
                    </div>
                </div>

                <div className="shapes-container">
                    <div className='circle-1'></div>
                    <div className='circle-2'></div>
                    <div className='circle-3'></div>
                </div>

            </main>
            <Footer />
        </>
    )
}

export default ComingSoon