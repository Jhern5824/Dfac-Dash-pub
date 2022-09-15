import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";





const FoodCard = styled.div`
    display: inline-block;
    border: 1px solid black;
    height: 400px;
    width: 400px;
    text-align: center;
    vertical-align: top;
    padding: 10px;
    margin: 20px;
    background-color: white;
`
const FoodContainer = styled.div`
    display: inline-block;
    justify-content: center;
    margin: auto;
    max-width: 1000px;
    align-items: center;
`



const FoodItem = ({ menu }) => {
    const [details, setDetails] = useState([])
    console.log(menu)
    return (
        <FoodContainer>
            <FoodCard>
                <h1>{menu.name}</h1>
                <p>{menu.description}</p>
                <p>{menu.calories}</p>
            </FoodCard>
        </FoodContainer>
    )
}

export default FoodItem;