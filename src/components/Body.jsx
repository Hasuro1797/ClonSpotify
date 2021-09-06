import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Header from './Header';
import { AiFillPlayCircle } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import SongRow from './SongRow';


const BodyContainer = styled.div`
    flex: 0.8;
    background: linear-gradient(#340034, #000);
    color: #fff;
    height: calc(100vh - 90px);
    padding: 30px;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        display: none;
    }
    `;
const Info = styled.div`
    display: flex;
    align-items: flex-end;
    padding: 10px;
    & img{
        width: 17vw;
        margin: 0 20px;
        box-shadow: 0 4px 40px #000;
    }
`;
const InfoText = styled.div`
    flex: 1;
    color: white;
    & h1{
        margin-bottom: 10px;
        font-size: 85px;
        font-weight: 900;
    }
    & h4{
        font-size: 16px;
    }
    & span{
        font-weight: 500;
        color: gray;
    }
`;
const Songs = styled.div`
    /* background-color: red; */
`;
const Icons = styled.div`
    margin: 20px 25px;
    /* background-color: green; */
    display: flex;
    align-items: center;
`;
const IconPlay = styled(AiFillPlayCircle)`
    font-size: 55px;
    margin-right: 20px;
    color: #1db954;
    &:hover{
        transform: scale(1.045)
    }
    
    
`;
const IconMore = styled(FiMoreHorizontal)`
    font-size: 20px;
    color: gray;
    &:hover{
        color: white;
    }
`;

const Body = () => {
    const playlist = useSelector(state => state.playlist);
    return (
        <BodyContainer>
            <Header/>
            <Info>
                <img src = {playlist?.images[0]?.url} alt ="album" />
                <InfoText>
                    <h4>PLAYLIST</h4>
                    <h1>{playlist?.name}</h1>
                    <b>{playlist?.owner?.display_name}</b><span>. {playlist?.tracks.total} canciones</span>
                </InfoText>
            </Info>
            <Songs>
                <Icons>
                    <IconPlay/>
                    <IconMore/>
                </Icons>
                {
                    playlist?.tracks?.items.map((song,index) => (
                        <SongRow track = {song.track} key = {index}/>
                    )
                    )
                }
            </Songs>
        </BodyContainer>
    )
}

export default Body
