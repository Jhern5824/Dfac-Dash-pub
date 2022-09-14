import React,{useState, useEffect} from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Container = styled.div`
display: flex;
flex-direction: row;
height: 500px;
border: 1px solid black;
justify-content: center;

`

const Card = styled.div`
height:250px;
width:200px;
margin-top: 200px;
margin-left: 3px;
margin-right: 3px;
border: 1px solid red;
border-radius: 5%;
text-align:center;
`

const Branch = () => {
    let [dfac, setDfac] = useState([]);
    let path = 'http://localhost:5000/dfac_name'
    useEffect(()=>{
        fetch(path)
        .then(res => res.json())
        .then(data =>setDfac(data))
    })

    return(
        <Container>
            {dfac.map((place) =>{
                return(
                    <Link to = '/dfac' >
                        <Card>{place.name}</Card>
                    </Link>
                )
            })}
        </Container>
    )
}

export default Branch