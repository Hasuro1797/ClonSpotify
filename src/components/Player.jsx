import React from 'react'
import styled from 'styled-components'
import Body from './Body';
import Footer from './Footer';
import SideBar from './SideBar';

const SpotifyBody = styled.div`
    display: flex;
`;
const Player = () => {
    return (
        <>
        <SpotifyBody>
            <SideBar/>
            <Body/>
        </SpotifyBody>
        <Footer/>
        </>
    )
}

export default Player
