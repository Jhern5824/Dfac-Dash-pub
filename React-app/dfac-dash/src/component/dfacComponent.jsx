import React,{useState, useEffect} from "react";
import styled from "styled-components";
import { Link, useParams } from 'react-router-dom';

const Card = styled.div`
display: inline-block;
height: 300px;
width: 300px;
margin: 15px;
border-radius: 5%;
text-align:center;
align-content:center;
background-color:  #F8F0E3;
vertical-align: center;
filter: drop-shadow(0 0 0.75rem black);
&:hover {
    transform: scale(1.1);
}
`

const Container = styled.div`
display: flex;
flex-direction: row;
height: 100%;
justify-content: center;
font-color: black;
// `


const DfacComponent = ( {item, setCurrentHover} ) => {
    console.log(item)
    return (
        <Link to={`/dfac/${item.location}/${item.id}`}>
            <Card
            onMouseEnter={() => setCurrentHover(`/${item.name}.jpg`)}
            >
                <h1 style={{
                    width: '100%',
                    margin: '0',
                    fontSize: '1.5rem',
                    textDecoration: 'none',
                    color: 'black',
                    paddingBottom: '20px'
                }}>{item.name}</h1>
                <p style={{
                    margin: '0',
                    color: 'black'
                }}>
                    Standard Hours
                    <br />
                    Breakfast
                    <br />
                    Mon - Fri: 6:30AM - 9:00AM
                    <br />
                    Sat - Sun: 6:30AM - 8:30AM
                    <br />
                    Lunch
                    <br />
                    Mon - Sun: 10:30AM - 1:30PM
                    <br />
                    Dinner
                    <br />
                    Mon - Fri: 4:30PM - 7:00PM
                    <br />
                    Sat - Sun: 4:30PM - 6:30PM
                </p>
            </Card>
        </Link>
    )
}

export default DfacComponent;