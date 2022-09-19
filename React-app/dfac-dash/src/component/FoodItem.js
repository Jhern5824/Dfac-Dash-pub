import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import * as FaIcons from 'react-icons/fa';
import DetailedFood from "./DetailedFood";







const FoodItem = ({ menu, cart, setCart}) => {
    const [details, setDetails] = useState([])
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () =>{ 
        setShow(true)
    };
    useEffect(() => {
        fetch(`http://localhost:5837/detailed_data?name=${menu.name_of_menu_item}`)
        .then(response => response.json())
        .then(data => setDetails(data))
    }, [menu])
    
    // console.log(values);
    // console.log('FUll menu',menu)
    return (
        <DetailedFood details={details} cart={cart} setCart={setCart}/>
    )
}

export default FoodItem;
