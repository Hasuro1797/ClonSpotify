import React from 'react';
import styled from 'styled-components';

const SongRowContainer = styled.div`
    display: flex;
    margin-left: 25px;
    align-items: center;
    z-index: 90;
    &:hover{
        cursor: pointer;
        background-color: #0000;
        opacity: 0.8;
    }
    & img{
        width: 50px;
        height: 50px;
        object-fit: contain;
    }

`;
const SongInfo = styled.div`
    margin-left: 20px;
    & p{
        margin-top: 3px;
        color: lightgray;
    }
`;

const SongRow = ({track}) => {
    return (
        <SongRowContainer>
            <img src = {track.album.images[0].url} alt="type of album"/>
            <SongInfo>
                <h4>{ track.name }</h4>
                <p>
                    { 
                        track.artists.map(artist => artist.name).join(", ")
                    }
                </p>
                {
                    track.album.name
                }
            </SongInfo>
        </SongRowContainer>
    )
}

export default SongRow
