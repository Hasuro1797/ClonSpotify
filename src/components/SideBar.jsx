import React from 'react'
import styled from 'styled-components'
import LogoSpotify from '../assets/images/spotifyLogo.png';
import {AiFillHome} from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs'
import {VscLibrary} from 'react-icons/vsc'
import SideBarChoice from './SideBarChoice';
import { useSelector } from 'react-redux';

const SideBarContainer = styled.div`
    background: #000;
    flex: 0.2;
    height: 100vh;
    min-width: 240px;
    color: white;
    & img{
        height: 75px;
        padding: 10px;
        margin-right: auto;
    }
    & hr{
        border: 1px solid smokegray;
        width: 90%;
        margin: 10px auto;
    }
`;
const PlayList = styled.div`
    margin: 5px 10px;
    font-weight: 700;
`;

const SideBar = () => {
    const playlist = useSelector(store => store.list_playlist)
    return playlist.items ?(
        <SideBarContainer>
            <img src = {LogoSpotify} alt = "logo" />
            <SideBarChoice title = "Home" Icon={AiFillHome}/>
            <SideBarChoice title = "Search" Icon={BsSearch}/>
            <SideBarChoice title = "Your Library" Icon=
            {VscLibrary}/>
            <PlayList>
                PLAYLISTS
            </PlayList>
            <hr/>
            {
                playlist?.items.map((item, index) =>(
                    <SideBarChoice 
                        key = {index} 
                        title = {item?.name}
                        idPlaylist = {item.id}
                        />
                ))
            }

        </SideBarContainer>
    ): 
    <p>No hay playlist disponible</p>
}

export default SideBar
