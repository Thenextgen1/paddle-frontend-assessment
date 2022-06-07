import React, { useState, useEffect } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import millify from "millify";
import moment from "moment";
import '../../styles/github.css'


const Github = () => {

    const [repo, setRepo] = useState([]);
    const [page, setPage] = useState(1)

    const fetchData = (setItems, items) => {
        fetch(`https://api.github.com/search/repositories?q=created:>2022-05-03&sort=stars&order=desc&page=${page}`)
            .then(res => res.json())
            .then((data) => setItems([...items, ...data.items]))
        setPage(prevPage => prevPage + 1)
    }

    useEffect(() => {
        fetchData(setRepo, repo);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])






    console.log(repo)

    const allRepo = repo.map((data, i) => (
        <section className="repo-card" key={i}>
            <img alt="repo" src={data.owner.avatar_url} />
            <div className='repo-card-content'>
                <h2>{data.name}</h2>
                <p>{data.description}</p>
                <div className='statistics'>
                    <div>
                        <p className='box'><a href={data.html_url} alt="stars" target="_blank" rel="noreferrer">{millify(data.stargazers_count, {
                            precision: 2
                        })} Stars</a></p>
                        <p className='box'><a href={data.html_url} alt="repo" target="_blank" rel="noreferrer">{data.open_issues} Issues</a></p>
                    </div>
                    <p>{moment(data.created_at).startOf('ss').fromNow()}</p>
                </div>
            </div>
        </section>
    ))



    return (
        <main className='github-main'>
            <h1>Most Starred Repos from the last 30 days</h1>
            <InfiniteScroll
                dataLength={repo.length}
                next={() => {
                    fetchData(setRepo, repo)
                }}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                {allRepo}
            </InfiniteScroll>

        </main>

    )
}

export default Github