import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import styled from "styled-components";

const Card = styled.div`
display: inline-block;
height:250px;
width: 200px;
margin: 3px;
border: 1px solid red;
border-radius: 5%;
text-align:center;
align-content:center;
`

const Container = styled.div`
display: flex;
flex-direction: row;
height: 100%;
border: 1px solid black;
justify-content: center;
    a:link {
        text-decoration: none;
        
    }
`

const Base = () => {
    let [base, setBase] = useState([]);
    let { baseId } = useParams();
    let url = `http://localhost:5837/dfac_name?location=${baseId}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBase(data))

    }, [url])
    return (
        <div style={{
            display:'inline',
            alignContent: 'center',
            justifyContent: 'center'
        }}>
        {base.map((item) => {
            return (
                <div style={{
                    margin: '0',
                    width:'250px',
                    height: '250px',
                    display:'inline',
                    alignContent: 'center',
                }}>
                    <Link to={`/dfac/${item.location}/${item.id}`}>
                        <Card>{item.name}</Card>
                    </Link>
                </div>
            )
        })}
        </div>)
}

export default Base