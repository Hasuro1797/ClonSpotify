import { useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Player from './components/Player';
import { getToken } from './spotifyLogic';
import {setUser, addToken, getPlaylist} from './redux/actions/index'
import { useDispatch, useSelector } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();


function App() {

  const token = useSelector(store => store.token);
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = getToken();
    const _token = hash.access_token;
    if(_token){ 
      dispatch(addToken(_token));
      const spotifyInfo = async() =>{
        try {
          await spotify.setAccessToken(_token);
          const myprofile = await spotify.getMe();
          dispatch(setUser(myprofile));
          // const myTracks = await spotify.getMySavedTracks();
          // console.log("loso trakcs son ", myTracks);
          const playlistUser = await spotify.getUserPlaylists(user.id);
          dispatch(getPlaylist(playlistUser))
        } catch (error) {
          console.log("el erroe es ",error) 
          //spotify.getMySavedTracks().then(tracks => console.log("mis traxks son: ", tracks)).catch(err => console.error(err));
        }
      }
      spotifyInfo();
    }

  }, [dispatch, user.id])
  return (
    <div >
      {
        token ? 
        <Player/>
          :
        <Login/>
      }
      
    </div>
  );
}

export default App;
