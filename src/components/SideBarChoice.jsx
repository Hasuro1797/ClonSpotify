import React from 'react'
import styled from 'styled-components'

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

const SideBarChoice = ({title, Icon}) => {
    return (
        <Choices>
            {
                Icon && <Icon/>
            }
            {
                Icon ? <h4>{title}</h4>: <p>{title}</p>
            }
        </Choices>
    )
}

export default SideBarChoice
