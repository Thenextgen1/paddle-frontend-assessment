import React from 'react'
import '../../styles/homepage.css'


const Homepage = () => {
    return (
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
                <input type="text" placeholder='First Name...' />
                <input type="text" placeholder='Last Name...' />
            </div>
            <div>
                <input type="text" placeholder='Enter your email address' />
                <button>JOIN OUR WAITING LIST..</button>
            </div>x
        </main>
    )
}

export default Homepage