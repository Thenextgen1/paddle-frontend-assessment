import React from 'react';
import { Navbar, Footer } from '../../components';
import { IconContext } from "react-icons";
import { BsArrowRightShort } from 'react-icons/bs';
import '../../styles/comingsoon.css';
import '../../styles/contact.css';



const ComingSoon = () => {

    const handleSubmit = (e) => {
        return e.preventDefault()
    }



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
            <aside>
                <div className='contact-container'>
                    <IconContext.Provider value={{ className: 'arrow-right' }}>
                        <BsArrowRightShort />
                    </IconContext.Provider>
                    <form onSubmit={handleSubmit}>
                        <h3>Hey, we are still in the works, <br /> but you can send us a message!</h3>
                        <fieldset className='form-field'>
                            <label htmlFor='firstName'>First name</label>
                            <input type="text" placeholder="Enter your first name" />
                            <label htmlFor='lastName'>Last name</label>
                            <input type="text" placeholder="Enter your Last name" />
                            <label htmlFor='email'>Email address</label>
                            <input type="text" placeholder="Enter your Email Address" />
                            <label htmlFor='textArea'>Tell us what you need help with:</label>
                            <textarea placeholder='Enter a topic, like "channel problem..."' rows="5" cols="52"></textarea>
                        </fieldset>
                        <button type='submit'>SEND NOW</button>
                    </form>
                    <div className='contact-circle'></div>
                </div>

            </aside>
            <Footer />
        </>
    )
}

export default ComingSoon