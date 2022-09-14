import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
            <Link to ="/" style={{ color: '#FFF' }} >DFAC DASH</Link>
        </Main>
        
    )
}

export default Header;