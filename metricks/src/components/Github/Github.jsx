import React, { useState, useEffect } from 'react'
import '../../styles/github.css'


const Github = () => {

    const [repo, setRepo] = useState([]);
    const page = 4
    useEffect(() => {
        fetch(`https://api.github.com/search/repositories?q=created:>2022-05-02&sort=stars&order=desc&page=${page}`)
            .then(res => res.json())
            .then((data) => setRepo(data.items))
    }, [])


    console.log(repo)

    const allRepo = repo.map((data, i) => (
        <section className="repo-card" key={i}>
            <img alt="repo" src={data.owner.avatar_url} />
            <div className='repo-card-content'>
                <h2>{data.name}</h2>
                <p>{data.description}</p>
                <div>
                    <p>{data.stargazers_count}</p>
                    <p>{data.open_issues}</p>
                    <p></p>
                </div>
            </div>
        </section>
    ))



    return (
        <div>
            {allRepo}
        </div>

    )
}

export default Github