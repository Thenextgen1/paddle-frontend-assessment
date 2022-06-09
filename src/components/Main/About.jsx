import React from 'react';
import { Navbar, Footer } from '../../components';
import { Link } from 'react-router-dom';
import '../../styles/about.css'


const About = () => {
  return (

    <>
      <Navbar />
      <main className='about'>
        <section>
          <div>
            <h4><span></span>ABOUT US</h4>
            <h3>Built for SaaS and E-commerce</h3>
          </div>
          <div>
            <p>Our tools are easy to set up and use with a user friendly dashboard that enables you to set up, launch, automate and manage multi-affiliate campaigns in 5 minutes.</p>
          </div>
        </section>

        <section>
          <h3>Metricks was developed because just like you, we needed a product that could give us good value.</h3>
          <div>
            <div>
              <h5><span>01</span> WHY US?</h5>
              <p>We pride ourselves in our ability to innovate and create world-class tools that provide reliable and efficient touchpoints between advertisers and affiliates.</p>
            </div>
            <div>
              <h5><span>02</span>GROWING WITH YOU</h5>
              <p>Leveraging the best technology, we have developed an all-in-one affiliate marketing tracking software, a genius tool to help you track, automate and optimize your influencer campaigns, all from one dashboard.</p>
              <p>Our team of experts are constantly brainstorming, testing and developing new solutions with only one thing in mind - your business growth. Your success is our success and by giving you the tools you need to scale, we grow as well.</p>
            </div>
          </div>
        </section>

        <section>
          <h5>Got a Question</h5>
          <p>See how Metricks can help your business grow with best Affiliate Marketing Tracking Software.</p>
          <Link to="/">Contact us</Link>
        </section>


      </main>
      <Footer />
    </>
  )
}

export default About