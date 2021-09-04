import React from 'react';
import styled from 'styled-components';
import { BsHeartFill, BsShuffle, BsFillSkipStartFill, BsFillSkipEndFill, BsVolumeDownFill } from 'react-icons/bs';
import { AiFillPlayCircle } from 'react-icons/ai';
import { MdPlaylistPlay, MdComputer } from 'react-icons/md';
import { GiMicrophone } from 'react-icons/gi';
import { IoRepeat } from 'react-icons/io5';
import { Slider } from '@material-ui/core';


const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    height: 90px;
    width: 100vw;
    background-color: #181818;
    color: #ffff;
`;
const FooterLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    & img{
        width: 50px;
        height: 50px;
        margin: 0 20px 0 20px;
        object-fit: contain;
    }
    & h4{
        font-size: 14px;
    }
    & p{
        font-size: 12px;
    }

`;
const Information = styled.div`
    margin-right: 20px;
`;
const Icon= styled(BsHeartFill)`
    color: #1db954;
    cursor: pointer;
`;
const FooterCenter = styled.div`
    flex: 0.4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const PlayedContainer = styled.div`
    width: 33%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    color: gray;
`;
const IconShuffle = styled(BsShuffle)`
    &:hover{
        color: white;
    }
`;
const IconSkipStart = styled(BsFillSkipStartFill)`
    &:hover{
        color: white;
    }
`;
const IconPlay = styled(AiFillPlayCircle)`
    font-size: 45px;
    color: white;
    &:hover{
        transform: scale(1.045)
    }
`;
const IconSkipEnd = styled(BsFillSkipEndFill)`
    &:hover{
        color: white;
    }
`;
const IconRepeat = styled(IoRepeat)`
    &:hover{
        color: white;
    }
`;
const FooterRight = styled.div`
    flex: 0.3;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
const SoundContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    font-size: 17px;
    padding: 20px;
    & .MuiSlider-root{
        color: gray;
        width: 70px;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLeft>
                <img src="https://www.lahiguera.net/musicalia/artistas/ed_sheeran/disco/8124/tema/14856/ed_sheeran_shape_of_you-portada.jpg" alt="shape of you" />
                <Information>
                    <h4>Shape of You</h4>
                    <p>Ed Sheeran</p>
                </Information>
                <Icon/>
            </FooterLeft>
            <FooterCenter>
                <PlayedContainer>
                    <IconShuffle/>
                    <IconSkipStart/>
                    <IconPlay/>
                    <IconSkipEnd/>
                    <IconRepeat/>    
                </PlayedContainer>
            </FooterCenter>
            <FooterRight>
                <SoundContainer>
                    <GiMicrophone/>
                    <MdPlaylistPlay/>
                    <MdComputer/>
                    <BsVolumeDownFill/>
                    <Slider/>
                </SoundContainer>
            </FooterRight>
        </FooterContainer>
    )
}

export default Footer
