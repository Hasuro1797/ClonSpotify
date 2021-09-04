import React from 'react';
import styled from 'styled-components';
import LogoSpotify from '../assets/images/spotifyLogo.png';
import { loginUrl } from '../spotifyLogic';

const ContainerLogin = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: black;
    & img{
        width: 100%;
    }
`;
const LoginButton = styled.a`
    padding: 20px;
    background-color: #1db954;
    border-radius: 90px;
    color: white;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bolder;
    &:hover{
        transform: scale(1.045);
        transition: 300ms ease all;
    }
`;

const Login = () => {
   
    return (
        <ContainerLogin>
            <img src = {LogoSpotify} alt = "logo" />
            <LoginButton href={loginUrl}>
                Log In with Spotify
            </LoginButton>
        </ContainerLogin>
    )
}

export default Login
