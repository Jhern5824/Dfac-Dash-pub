import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import * as FaIcons from 'react-icons/fa';
import {FaLeaf} from 'react-icons/fa'
import {FaCarrot} from 'react-icons/fa'
import {GiPeanut} from 'react-icons/gi'
import {GiMilkCarton} from 'react-icons/gi'
import {GiWheat} from 'react-icons/gi'
import './DetailedFood.css'
//you should be able to insert the gi icons if you call them from "react-icons/gi"
//import { GiPeanut } from "react-icons/gi";
// awesome thanks
// "should"

const FoodContainer = styled.div`
    display: inline-block;
    justify-content: center;
    margin: auto;
    max-width: 1000px;
    align-items: center;
`
const FactsContainer = styled.div`
    height:300px;
    width: auto;
`
const LineOne = styled.div`
    display:flex;
    width:460px;
    height:25px;

`
const LineTwo = styled.div`
    display: flex;      
    width:460px;
    height:25px;
    background-color: #d3d3d3;

`
const One = styled.div`
    text-align: left;
    width:400;
`
const Two = styled.div`
    text-align: right;
`
const IconContainer =styled.div`
    display: flex;
    flex-direction: row;
    height:13%;
    width 100%;
    justify-content:center;

`

const CardButton= styled.button`
    border-radius: 5px;
    &:hover {
        background-color: #d3d3d3;
    }
`
const DetailedFood = ({ details, cart, setCart }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
    };



    //console.log('The Details:', details)
    return (
        <FoodContainer>
            {details.length ? (
                <>
                    <div className={details[0].calories > 500 ? 'redFoodCard' : (details[0].calories  < 300 ? 'greenFoodCard' : 'yellowFoodCard')}>
                        <h4 style={{
                            height: "25%",
                            width: "100%",
                            backgroundColor: '#0d6efd',
                            textAlign: 'center',
                            justifyContent: 'center',
                            fontSize: '30px',
                        }}>{details[0].name}</h4>
                        <p style={{
                            height: "25%",
                            width: "100%",
                            fontSize: "18px"
                        }}>Description: {details[0].description}</p>
                        <p style={{
                            height: "10%",
                            width: "100%",
                            fontSize: "20px"
                        }}>Calories: {details[0].calories}</p>

                        <IconContainer>
                        {details[0].is_vegan === true && (
                            <FaLeaf style={{
                                height:'30px',
                                width:'30px',
                                color: 'green',
                                marginLeft:'7px'
                                
                            }}
                            />
                        )}

                        {details[0].is_vegetarian === true && (
                            <FaCarrot style={{
                                height:'30px',
                                width:'30px',
                                color: 'orange',
                                marginLeft:'7px'
                                
                            }}/>
                        )}
                        {details[0].is_dairy === true && (
                            <GiMilkCarton style={{
                                height:'30px',
                                width:'30px',
                                color: 'blue',
                                marginLeft:'7px'
                                
                            }}/>
                        )}
                        {details[0].is_nuts=== true && (
                            <GiPeanut style={{
                                height:'30px',
                                width:'30px',
                                color: 'tan',
                                marginLeft:'7px'
                                
                            }}/>
                        )}
                        {details[0].is_gluten === true && (
                            <GiWheat style={{
                                height:'30px',
                                width:'30px',
                                color: 'brown',
                                marginLeft:'7px'
                                
                            }}/>
                        )}
                        
                        </IconContainer>
                           
                        <div style={{
                                position: 'relative',
                                
                                width: '100%'
                                
                            }}>

                            <CardButton onClick={() => handleShow(details[0].name)} style={{marginLeft:'20px', borderRadius: '10px'}} >Show more Info</CardButton>
                            <FaIcons.FaCartPlus onClick={() => setCart((cart + '%40' + [details[0].name]))} className="cartButton" style={{
                                cursor: 'pointer',
                                width: '50px',
                                height: '50px',
                                paddingLeft: '25px'
                            }} />
                        </div>
                    </div>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="false"
                        keyboard={false}
                        
                    >
                        <Modal.Header closeButton>
                            <Modal.Title><h5>Nutrition Facts</h5></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <FactsContainer>
                                <h4>{details[0].name}</h4>
                                <LineOne><One><strong>Calories:&nbsp; </strong></One><Two>{details[0].calories}</Two></LineOne>
                                <LineTwo><One><strong>Calories from Fat: &nbsp;</strong></One><Two>{details[0].calories_from_fat}</Two></LineTwo>
                                <LineOne><One><strong>Total Fat: &nbsp;</strong></One><Two>{details[0].total_fat}</Two></LineOne>
                                <LineTwo><One><strong>Saturated Fat: &nbsp;</strong></One><Two>{details[0].saturated_fat}</Two></LineTwo>
                                <LineOne><One><strong>Trans. Fat: &nbsp;</strong></One><Two>{details[0].trans_fat}</Two></LineOne>
                                <LineTwo><One><strong>Cholesterol: &nbsp;</strong></One><Two> {details[0].cholestrol}</Two></LineTwo>
                                <LineOne><One> <strong>Sodium: &nbsp;</strong></One><Two>{details[0].sodium_total}</Two></LineOne>
                                <LineTwo><One><strong>Carbohydrates: &nbsp;</strong></One><Two> {details[0].carbohydrates}</Two></LineTwo>
                                <LineOne><One><strong>Dietary Fiber: &nbsp;</strong></One><Two>{details[0].dietary_fiber}</Two></LineOne>
                                <LineTwo><One><strong>Sugar: &nbsp;</strong></One><Two> {details[0].sugars}</Two></LineTwo>
                                <LineOne><One> <strong>Protein: &nbsp;</strong></One><Two>{details[0].protein}</Two></LineOne>
                            </FactsContainer>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>

                        </Modal.Footer>
                    </Modal>
                </>
            ) : null}
        </FoodContainer>
    )
}

export default DetailedFood

// {index > 0 && (
//     <Button
//       variant="secondary"
//       onClick={() => {
//         setIndex((index -= 20));
//         setLimit((limit -= 20));
//         console.log(index, limit);
//       }}
//     >
//       Previous
//     </Button>
//   )}