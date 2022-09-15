import React, {useState, useEffect, createContext} from "react";
import styled from 'styled-components';
import HomeDropDown from "../component/dropdown";
import {Link, NavLink } from "react-router-dom";
import { BranchContext } from "./BranchContext";
import CardDisplay from "../component/Card";
const MainDiv = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
`
const FirstDiv = styled.div`
`
const SecondDiv = styled.div`
/* padding:20%; */
margin-bottom:5px;
bottom-border: 5px solid black;
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
    font-size: 1.5em;
`


const Home = () => {
    return(
        <MainDiv >
            <FirstDiv/>
            <SecondDiv>
                <PickDiv><Pick>Pick a Branch</Pick></PickDiv>
                    <CardDiv>
                        <Link to= '/branch/USAF'>
                            <img src='./images/USAF.png' alt="USAF"  style={{
                            width: '250px',
                            height: 'auto'
                        }}/>
                        </Link>
                        <Link to= '/branch/USSF'>
                        <img src='/images/Seal_of_the_United_States_Space_Force.svg.png' alt="USSF" style={{
                            width: '250px',
                            height: 'auto'
                        }}/>
                        </Link>
                        <Link to= '/branch/USA'>
                        <img src='./images/USA.png' alt="USA" style={{
                            width: '250px',
                            height: 'auto'
                        }} />
                        </Link>
                        <Link to= '/branch/USN'>
                        <img src='./images/USN.png' alt="USN" style={{
                            width: '250px',
                            height: 'auto'
                        }} />
                        </Link>
                        <Link to= '/branch/USMC'>
                        <img src='./images/USMC.png' alt="USMC" style={{
                            width: '250px',
                            height: 'auto'
                        }} />
                        </Link>
                    </CardDiv>
                </SecondDiv>
        <FirstDiv/>
    </MainDiv>
    )
}
export default Home


// branch.map((item)=>{
//     return (
//         <Link onClick={()=> {setUrl(`http://localhost:5000/military_base?branch=USAF`)}} to= '/base'>
//             <Card  >{item.branch}</Card>
//         </Link>
//     )
// })}