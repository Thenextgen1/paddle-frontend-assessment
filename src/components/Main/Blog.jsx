import React from 'react';
import { Navbar, Footer } from '../../components';
import { dataSet } from '../../services/data';
import '../../styles/blog.css';


const Blog = () => {

    const blogData = dataSet.map((data) => (
        <div id={data.id}>
            <img src={data.image} alt="post" />
            <h5>{data.datePosted}</h5>
            <h4>{data.heading}</h4>
            <p>{data.content}</p>
            <p>READ MORE</p>
        </div>
    ))



    return (
        <>
            <Navbar />
            <main>
                <section>
                    <h3>BLOG</h3>
                    <h3>Articles and News</h3>

                </section>
                <section>
                    <div>
                        <h4>Latest From The Blog</h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
                        <div>
                            <input type="search" placeholder="Search here" />
                        </div>
                    </div>

                    {blogData}
                </section>



            </main>
            <Footer />
        </>
    )
}

export default Blog