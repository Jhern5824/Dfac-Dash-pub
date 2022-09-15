import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import FoodItem from "../component/FoodItem";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import HomeDropDown from "../component/dropdown";




const Dfac = () => {
    const [menu, setMenu] = useState([]);
    const [menuItem, setMenuItem] = useState([])
    const values = useParams();
    console.log(values)
    useEffect(() => {
        fetch(`http://localhost:5837/menu?dfac=${values.dfacId}`)
            .then(res => res.json())
            .then(data => setMenu(data))
            .then(() => {
                fetch(`http://localhost:5837/detailed_data`)
                    .then(res => res.json())
                    .then(data => setMenuItem(data));
            })
    }, [])

    console.log(menuItem);
    return (
        <div style={{
            width: "100%"
        }}>
            <div style={{
                margin: "auto",
                width: "100%",
                display: 'inline'
            }}>
                {menuItem.map(individualMenu =>
                    <FoodItem menu={individualMenu} />
                )}
            </div>
        </div>
    )
}

export default Dfac