import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {fetchPlayList} from '../redux/actions/index.js';

const Choices = styled.div`
    display: flex;
    align-items: center;
    color: gray;
    height: 40px;
    cursor: pointer;
    margin-left: 10px;
    & h4{
        margin-left: 10px;
    }
    & p{
        font-weight: 500;
        font-size: 14px;
    }
    &:hover{
        color: #fff;
        transition: 300ms ease-in;
    }
`;

const SideBarChoice = ({title, Icon, idPlaylist}) => {
    const dispatch = useDispatch();
    const handleSearch =(id)=> (event) =>{
        console.log("el id es ", id )
        dispatch(fetchPlayList(id))
    }
    return (
        <Choices>
            {
                Icon && <Icon/>
            }
            {
                Icon ? 
                    <h4>{title}</h4>
                        : 
                    <p onClick = {handleSearch(idPlaylist)}>{title}</p>
            }
        </Choices>
    )
}

export default SideBarChoice
