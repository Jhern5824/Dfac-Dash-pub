import React, {useState, useEffect, createContext} from "react";
import styled from 'styled-components';
import HomeDropDown from "../component/dropdown";
import {Link, NavLink } from "react-router-dom";
import { BranchContext } from "./BranchContext";
import CardDisplay from "../component/Card";
import './home.css'


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
margin-top: 50px;
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
        <MainDiv style={{
            backgroundImage:"url(https://img.freepik.com/free-photo/american-flag-dark-wooden-table_1232-1011.jpg?w=1380&t=st=1663600023~exp=1663600623~hmac=208561f19338d2e26f5a76ce327390803fa59787556b379e288b80030462e38c)",
            backgroundSize: '100%',
            backgroundAttachment: 'fixed',
        }} >
            <FirstDiv/>
            <SecondDiv>
                <PickDiv><Pick>Choose your Branch</Pick></PickDiv>
                    <CardDiv>
                        <Link to= '/branch/USAF'>
                            <img  className="homeimgs" src='./images/USAF.png' alt="USAF"  style={{
                            width: '250px',
                            height: 'auto',
                            margin: '35px',
                        }}/>
                        </Link>
                        <Link to= '/branch/USSF'>
                        <img className="homeimgs" src='/images/Seal_of_the_United_States_Space_Force.svg.png' alt="USSF" style={{
                            width: '250px',
                            height: 'auto',
                            margin: '35px',
                        }}/>
                        </Link>
                        <Link to= '/branch/USA'>
                        <img className="homeimgs" src='./images/USA.png' alt="USA" style={{
                            width: '250px',
                            height: 'auto',
                            margin: '35px',
                        }} />
                        </Link>
                        <Link to= '/branch/USN'>
                        <img className="homeimgs" src='./images/USN.png' alt="USN" style={{
                            width: '250px',
                            height: 'auto',
                            margin: '35px',
                        }} />
                        </Link>
                        <Link to= '/branch/USMC'>
                        <img className="homeimgs" src='./images/USMC.png' alt="USMC" style={{
                            width: '250px',
                            height: 'auto',
                            margin: '35px',
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