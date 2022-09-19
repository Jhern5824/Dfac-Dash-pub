import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react'
import { useParams } from "react-router";
import * as FaIcons from 'react-icons/fa';
import { BranchContext } from "../page/BranchContext";
import { endsWith } from "lodash";

const Main = styled.div`
    display: flex;
    background-color:#01579b;
    justify-content: end;
    color: white;
    margin-top:0;
    padding-top: px;
    overflow:hidden;
    text-align: center;
`

const Header = () => {
    const {cart, setCart} = useContext(BranchContext);
    console.log(cart);
    let cartNumber = cart.length
    if (cartNumber > 0) {
        let count = cart.split('%40').length - 1
        cartNumber = count;
        };

    return(
        <Main style={{
            width: '100%'
        }}>
            <Link to ="/" style={{ color: '#FFF', paddingRight: '550px', zIndex: '999'}} ><img src='/DFACDASH.png' alt='DFAC DASH LOGO' /></Link>
            <div style={{
                position: 'relative',
                float: 'right',
                justifyContent:'center',
                marginTop: '20px',
                textAlign: 'center',
                paddingRight: '50px',
            }}>
            <Link to="/cart"><FaIcons.FaShoppingCart style={{
                height: '50px',
                width: '50px',
                marginLeft: '',
                color: 'white'
            }}/></Link>
            <p style={{
                paddingLeft: '',
            }}>Items in cart: {cartNumber} </p>
            </div>
        </Main>
    
        
    )
}

export default Header;