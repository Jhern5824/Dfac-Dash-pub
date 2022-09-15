import React,{useState, useEffect} from "react";
import styled from "styled-components";
import { Link, useParams } from 'react-router-dom';
import './branch.css';

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

const Card = styled.div`
display: inline-row;
border: 1px solid red;
border-radius: 5%;
text-align:center;
text-decoration: none;
background-color: gray;

`


const Branch = () => {
    let [bases, setBases] = useState([]);
    let { branchId } = useParams();
    let path = `http://localhost:5837/military_base?branch=${branchId}`
    useEffect(()=>{
        fetch(path)
        .then(res => res.json())
        .then(data =>setBases(data))
    }, [])
    console.log(branchId)
    return(
        <Container className='container'>
                {bases.map((item)=>{
                    return(
                        <Link className='nameText' to={`/base/${item.location}`}>
                            <img src='/Patrick SFB.jpg' alt='Patrick SFB' style={{
                            width:'200px',
                            height:'auto'
                            }}/>
                            <Card>{item.location}</Card>
                            </Link>
                    )
                })}
        </Container>
    )
}

export default Branch