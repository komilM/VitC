import React, { useEffect, useState } from 'react'
import "./Home.css"
import { data, useNavigate } from 'react-router-dom';

const Home = () => {

    const [info, setInfo] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://69980fcad66520f95f166f62.mockapi.io/foods")
            .then(res => res.json())
            .then(data => setInfo(data));
    }, [])

    return (
        <div className='header'>
            {info.map((p) => (
                <div className="box" key={p.id} onClick={() => navigate(`./info/${p.id}`)}>
                    <div className="box-texts">
                        <h1>{p.title}</h1>
                        <h1>{p.name}</h1>
                        <p>{p.description}</p>
                        <p>{p.price} $</p>
                    </div>
                    <img src={p.image} alt="" />
                </div>
            ))}
        </div>
    )
}

export default Home
