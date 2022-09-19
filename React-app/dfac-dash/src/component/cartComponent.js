import React, {useContext} from 'react';
import { TiDelete } from 'react-icons/ti'
import { BranchContext } from '../page/BranchContext';
import styled from "styled-components";


const Cart = styled.div`
justify-content: center;
text-align: center;
space-below: 10px;
font-weight: bold;
font-size: 20px;
space-between: 10px;

&:hover {
    cursor: arrow;
}
&:nth-child(even) {
    background-color: lightgray;
    margin: 10px;
    &:hover {
        background-color: lightblue;
    }
}
}

&:nth-child(odd) {
    cursor: arrow;
    margin: 10px;
    &:hover {
        background-color: lightblue;
    }
}
space-between: 10px;
`






const CartComponent =({ item }) => {
    const {cart, setCart} = useContext(BranchContext);
    const cartNumber = cart.length;
    console.log("item", item);
    console.log("Cart", cart)

    return (
            <Cart>
                {item}
                <TiDelete onClick={() => {
                    let returnval = cart.split('%40').filter(items => items != item)
                    returnval = returnval.reduce((presviousitem, curritem) => presviousitem + "%40" + curritem)
                    console.log(cart);
                    setCart(returnval)
                }} 
                style={{
                    cursor: 'pointer'
                }}
                />
            </Cart>
    )
}


export default CartComponent;