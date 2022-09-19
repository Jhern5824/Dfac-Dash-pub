import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import FoodItem from "../component/FoodItem";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import HomeDropDown from "../component/dropdown";
import styled from "styled-components";
import './dfac.css'
import { BranchContext } from "./BranchContext";
import {FaLeaf} from 'react-icons/fa'
import {FaCarrot} from 'react-icons/fa'
import {GiPeanut} from 'react-icons/gi'
import {GiMilkCarton} from 'react-icons/gi'
import {GiWheat} from 'react-icons/gi'

const Container = styled.div `
position: relative;
height:100vh;
width: 100%

`
const MainDiv = styled.div`
position: relative;
height: 100vh;
width:100%;
 margin: 0;
 justify-content: center;
align-items: center;
text-align: center;
`
const ItemDiv = styled.div`
 margin: 0;
 width:100%;
 display: inline-block;
 justify-content: center;
 align-content: center;
`


const DietKey = styled.div`
    display: flex;
    flex-direction: row;

    height: 40px;
    background-color: #F8F0E3;
    justify-content: center;
    text-align: center;

`
const DietIcon = styled.div`
    margin-right: 7px;
`

const Dfac = () => {
    const {cart, setCart} = useContext(BranchContext);
    const values = useParams()
    const [menu, setMenu] = useState([]);
    const [menuItem, setMenuItem] = useState([])
    const [time, setTime] = useState(`http://localhost:5837/menu?dfacName=Riverside DFAC`)
    const [breakfastItems, setBreakfastItems] = useState ([])
    // console.log(values)
    useEffect(() => {
            fetch(`${time}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setMenu(data)})
            .then(() => {
                fetch(`http://localhost:5837/detailed_data`)
                    .then(res => res.json())
                    .then(data => setMenuItem(data));
            })
    }, [time])
   

    return (
        <Container>
        <MainDiv style={{
            backgroundImage:"url(https://img.freepik.com/free-photo/american-flag-dark-wooden-table_1232-1011.jpg?w=1380&t=st=1663600023~exp=1663600623~hmac=208561f19338d2e26f5a76ce327390803fa59787556b379e288b80030462e38c)",
            backgroundSize: '100%',
            backgroundAttachment: 'fixed',
        }}>
            
            <button className='button-container' onClick={()=>setTime (`http://localhost:5837/menu?dfacName=Riverside DFAC&timeOfDay=Breakfast`)}>Breakfast</button>
           
           
            <button className='button-container' onClick={()=>setTime ('http://localhost:5837/menu?dfacName=Riverside DFAC&timeOfDay=Lunch')}>Lunch</button>
           
            
            <button className='button-container' onClick={()=>setTime ('http://localhost:5837/menu?dfacName=Riverside DFAC&timeOfDay=Dinner')}>Dinner</button>
            
            <ItemDiv>
                {menu.map((individualMenu, index) => {
                    return( <FoodItem key ={index} menu={individualMenu} cart={cart} setCart={setCart}/> )}
            
            )}
            </ItemDiv>
            <DietKey>
                <DietIcon>  < FaLeaf style={{
                                height:'25px',
                                width:'25px',
                                color: 'green',
                                marginLeft:'7px'
                                
                            }}/><strong> = Vegan&nbsp;</strong></DietIcon>
                <DietIcon><FaCarrot style={{
                                height:'25px',
                                width:'25px',
                                color: 'orange',
                                marginLeft:'7px'
                                
                            }}/><strong>  =Vegetarian&nbsp;</strong></DietIcon>
                <DietIcon><GiMilkCarton style={{
                                height:'25px',
                                width:'25px',
                                color: 'blue',
                                marginLeft:'7px'
                                
                            }}/><strong>  = Contains Dairy&nbsp;</strong></DietIcon>
                <DietIcon><GiPeanut style={{
                                height:'25px',
                                width:'25px',
                                color: 'tan',
                                marginLeft:'7px'
                                
                            }}/><strong>  =Contains Nuts&nbsp;</strong></DietIcon>
                <DietIcon><GiWheat style={{
                                height:'25px',
                                width:'25px',
                                color: 'brown',
                                marginLeft:'7px'
                                
                            }}/><strong>  =Contains Gluten&nbsp;</strong></DietIcon>
            </DietKey>

        </MainDiv>
            </Container>
    )
}

export default Dfac