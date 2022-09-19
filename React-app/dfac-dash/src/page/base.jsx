import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import styled from "styled-components";
import './base.css'
import DfacComponent from '../component/dfacComponent.jsx'


const Card = styled.div`
display: inline-block;
height: 300px;
width: 300px;
margin: 15px;
border-radius: 5%;
text-align:center;
align-content:center;
background-color: white;
vertical-align: center;
filter: drop-shadow(0 0 0.75rem black);

`

const Container = styled.div`
display: flex;
flex-direction: row;
height: 100%;
justify-content: center;
font-color: black;
`


const Base = () => {
    let [base, setBase] = useState([]);
    let { baseId } = useParams();
    let [currentHover, setCurrentHover] = useState(['/Riverside DFAC.jpg']);

    

    let url = `http://localhost:5837/dfac_name?location=${baseId}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBase(data))

    }, [url])
    return (
        <div style={{
            display: 'inline-block',
            width: '100%',
            justifyContent: 'center',
        }}>
        <img src={currentHover} alt="DFAC" style={{
            marginTop: '15px',
            width: "700px",
            height: 'auto',
            marginLeft: '32.5%',
            borderRadius: '5%',
            filter: "drop-shadow(0 0 0.75rem black)"

        }}/>
        <Container style={{
            display:'inline-block',
            alignContent: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            textAlign: 'center',
            marginTop: '75px',
            verticalAlign: 'middle',
        }}>
                                
        {base.map((item) => <DfacComponent item={item} setCurrentHover={setCurrentHover} />)}
        </Container>
        </div>
        )

}

export default Base