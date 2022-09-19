import React,{useState, useEffect} from "react";
import styled from "styled-components";
import { Link, useParams } from 'react-router-dom';
import './branch.css';
import BranchComponent from '../component/branchComponent.jsx';

const Container = styled.div`
display: inline-block;
flex-direction: row;
height: 100%;
justify-content: center;
&a:link {
        text-decoration: none;
        
    }
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
        <Container>
                {bases.map((item)=> <BranchComponent item={item}/>
                    )
                }
        </Container>
    )
}

export default Branch