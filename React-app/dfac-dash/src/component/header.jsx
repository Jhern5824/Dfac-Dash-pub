import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
const Main = styled.div`
    display: flex;
    background-color:#01579b;
    justify-content: center;
    color: white;
    padding:20px;
    margin-top:0;
`

const Header = () => {
    return(
        
        <Main>
            <Link to ="/" style={{ color: '#FFF' }} ><img src='/DFACDASH.png' alt='DFAC DASH LOGO' /></Link>
        </Main>
        
    )
}

export default Header;