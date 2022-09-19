import React from "react"
import { useState, useContext } from "react"
import styled from "styled-components"
import { Navigate,  } from "react-router-dom";
import { Link } from "react-router-dom";
import { BranchContext } from "./BranchContext";
const Page = styled.div`
    width: 100%;
    height: 100%;
    margin-top:50px;
    filter: drop-shadow(0 0 0.75rem black);
    border-radius: 5px;
`

const Ticket = styled.div`
    display: inline-row;
    width: 75%;
    height: 100%;
    margin: auto;
    background-color: white;    
    align-text: center;
    justiify-content: center;
    align-items: center;
    border-radius: 3px;
    alignContent: center,
    alignItems: center,
    justifyContent: center,
    justifyItems: center,

`

const CardButton= styled.button`
    border-radius: 5px;
    &:hover {
        transform: scale(1.1);
    }
`
const OrderComplete = () => {
    const {cart, setCart} = useContext(BranchContext);

    return (
        <Page>
            <Ticket>
                <h4 style={{
                      height: 'fit-content',
                      width: 'fit-content',
                      margin: ' 0 auto',
                      marginBottom: '0',
                      paddingTop: '50px',
                      alignText: 'center',

                }}>Your order has been submitted to your DFAC and your DODID has been associated with your order!</h4>
                <h4 style={{
                      height: 'fit-content',
                      width: 'fit-content',
                      margin: 'auto',
                      alignText: 'center',

                }}>Please Allow up to 15 minutes for your order to be complete.</h4>
                <h4 style={{
                      height: 'fit-content',
                      width: 'fit-content',
                      margin: 'auto',
                      alignText: 'center',
                      paddingBottom: '50px',
                }}> On arrival please present your DODID to the cashier.</h4>
                <h4 style={{
                      height: 'fit-content',
                      width: 'fit-content',
                      margin: 'auto',
                      alignText: 'center',
                      paddingBottom: '10px',
                      fontStyle: 'italic',
                }}>"FEED THE BEAST!"</h4>
                <br/>
                <br/>
                <br/>
                <Link to="/" ><CardButton style={{
                    marginLeft: '660px',
                    cursor: 'pointer',

                }}
                    onClick={() => {setCart([])}}
                >RETURN HOME</CardButton> </Link>
                <br/>
                <br/>
            </Ticket>
        </Page>
    )
}

export default OrderComplete