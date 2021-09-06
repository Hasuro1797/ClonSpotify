import React from 'react';
import styled from 'styled-components';
import {BsSearch} from 'react-icons/bs';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
`;
const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    flex: 0.5;
    min-width: 75px;
    background-color: #fff;
    color: #181818;
    border-radius: 30px;
    padding: 10px;

    & input{
        border: none;
        width: 100%;
    }
`;
const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    & h4{
        margin-left: 15px;
    }
`;
const IconSearch = styled(BsSearch)`
    margin-right: 10px;
`;

const Header = () => {
    const user = useSelector(state => state.user)
    return (
        <HeaderContainer>
            <HeaderLeft>
                <IconSearch/>
                <input type = "text" placeholder = "Search for Artists, Songs or other"/> 
            </HeaderLeft>
            <HeaderRight>
                <Avatar/>
                <h4>{user?.display_name}</h4>
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header
