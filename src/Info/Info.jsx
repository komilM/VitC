import React, { useEffect, useState } from 'react'
import "./Info.css"
import { data, useParams } from 'react-router-dom'

const Info = () => {

    const { id } = useParams();
    const [mahsulot, setMahsulot] = useState(null);
    const [son, setSon] = useState(0);

    useEffect(() => {
        fetch(`https://69980fcad66520f95f166f62.mockapi.io/foods/${id}`)
            .then(res => res.json())
            .then(data => setMahsulot(data));
    })


    function plus() {
        setSon(son + 1);
    }

    function minus() {
        if (son > 0) {
            setSon(son - 1)
        }
    }


    function add() {
        alert(`Item has been added successfully.`)
    }

    if (!mahsulot) return <h1>Loading....</h1>

    return (
        <div>
            <div className="main">
                <img src={mahsulot.image} alt="" />
                <div className="texts">
                    <h1 style={{ fontSize: "40px", fontWeight: "600" }}>{mahsulot.name}</h1>
                    <h1 style={{ fontSize: "40px", fontWeight: "600" }}>{mahsulot.title}</h1>
                    <h1 style={{ fontSize: "32px", fontWeight: "600", color: "#39B856", marginTop: "24px" }}>{mahsulot.price}</h1>
                    <hr style={{ marginTop: "24px" }} />
                    <p style={{ fontSize: "16px", fontWeight: "400", marginTop: "24px" }}>{mahsulot.description}</p>
                    <hr style={{ marginTop: "24px" }} />
                    <p style={{ fontSize: "24px", fontWeight: "500", marginTop: "16px" }}>{mahsulot.rate}</p>
                    <div className="btns">
                        <button onClick={minus}>-</button>
                        <h1 style={{
                            fontSize: "20px",
                            fontWeight: "600",
                            minWidth: "40px",
                            textAlign: "center",
                            color: "#39B856",
                            marginTop: "10px"
                        }}>{son}</h1>
                        <button onClick={plus}>+</button>

                        <button onClick={add} style={{backgroundColor: "#1A432E", width: "248px", color: "white"}}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
