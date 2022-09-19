import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from "styled-components";



const Text = styled.h5`
    color: black;
`
const Container = styled.div`
margin: 15px;
margin-top: 150px;
width: 300px;
height: 300px;
display: inline-block;
background-color:  #F8F0E3;
border-radius: 5%;
filter: drop-shadow(0 0 0.75rem black);
text-align: center;
vertical-align: top;
&:nth-child(1) {
    margin-left: 50px;
}
&a:link {
        text-decoration: none;
    }
    &:hover {
        transform: scale(1.1);
    }
`

const BranchComponent = ( {item} ) => {
return (
    
        <Link className='nameText' to={`/base/${item.location}`}>
            <Container>
                <img src={`/${item.location}.jpg`} alt={item.location} style={{
                width:'200px',
                height:'200px',
                objectFit: 'cover',
                marginTop: '50px',
                borderRadius: '5%',
                marginBottom: '5px'
                }}/>
                <Text>{item.location}</Text>
            </Container>
        </Link>
    )
}

export default BranchComponent