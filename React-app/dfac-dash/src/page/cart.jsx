import React, { useState, useEffect, useParams, useContext } from 'react'
import * as FaIcons from 'react-icons/fa';
import { BranchContext } from './BranchContext';
import CartComponent from '../component/cartComponent';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './cart.css';


const Page = styled.div`
    width: 100%;
    height: 100%;
    margin-top:50px;
`

const Ticket = styled.div`
    display: inline-row;
    width: 50%;
    height: 100%;
    margin: auto;
    border: 1px solid black;
    background-color: white;
    justify-content: center;
    align-items: center;
    align-text: center;
    align-content: center;
    filter: drop-shadow(0 0 0.75rem black);

`

const Inputbox = styled.div`
    margin: auto;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 10px;
    justify-content: center;
`

const Cart = () => {
    const {cart, setCart} = useContext(BranchContext);
    const cartNumber = cart.length;
    
    return (
        <>
            <Page>
                <Ticket>
                    {cartNumber === 0 ? (<h1 style={{
                       height: 'fit-content',
                       width: 'fit-content',
                       margin: 'auto',
                       padding: '50px'
                    }}>There are no items in your cart.</h1>) : 
                    (   
                        <>
                        <h1 style={{
                            justifyContent: 'center',
                            alginText: 'center',
                            textAlign: 'center',
                        }}>Items Currently In Your Cart:</h1>
                    {cart.split('%40').map((item) => item.length > 0 ? (<CartComponent item={item} />) : null)}
                        <Inputbox>
                            <input className="idBar" type="text" placeholder="Insert DODID Number"></input>
                            <Link to="/order_complete"><button className="button">PLACE ORDER NOW</button></Link>
                        </Inputbox>
                        </>
                    )} 
                </Ticket>
            </Page>
        </>
    )
}

export default Cart