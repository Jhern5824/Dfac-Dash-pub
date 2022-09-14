import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import HomeDropDown from "../component/dropdown";
import {Link, NavLink } from "react-router-dom";

const MainDiv = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
`
const FirstDiv = styled.div`
padding:10%;
`
const SecondDiv = styled.div`
/* padding:20%; */
margin-top:5px;
margin-bottom:5px;
border: 1px solid black;
`
const PickDiv = styled.div`
    padding:10px;
    margin-bottom:5px;
    background-color: cornsilk;
    justify-content: center;
`
const CardDiv = styled.div`
height:300px;
width: auto;
display:flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
`
const Card = styled.div`
height:250px;
width:200px;
margin: 3px;
border: 1px solid red;
border-radius: 5%;
text-align:center;
`
const Pick = styled.h3`
    text-align:center;
`

const Home = () => {
    let [branch, setBranch] = useState([]);
    let [bases, setBases] = useState([]);
    let [url, setUrl] = useState ('http://localhost:5000/military_base');
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then((data)=> setBranch(data));
    },[])

// const handleClick = (event) =>{
//   event.target
// }

    return (
        <MainDiv>
            <FirstDiv></FirstDiv>
            <SecondDiv>
                <PickDiv><Pick>Pick a Branch</Pick></PickDiv>
                <CardDiv>
                    {branch.map((item)=>{
                        return (
                            <Link to= '/base'>
                                <Card  >{item.branch}</Card>
                            </Link>
                        )
                    })}
                </CardDiv>
            </SecondDiv>
            <FirstDiv></FirstDiv>
        </MainDiv>
    )
}

export default Home