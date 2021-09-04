import { useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Player from './components/Player';
import { getToken } from './spotifyLogic';
import {setUser, addToken, addPlayList} from './redux/actions/index'
import { useDispatch, useSelector } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();


function App() {

  const token = useSelector(store => store.token)
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = getToken();
    const _token = hash.access_token;
    if(_token){ 
      dispatch(addToken(_token));
      spotify.setAccessToken(_token);
      spotify.getMe().then(user =>  dispatch(setUser(user)));
      spotify.getPlaylist("1ShV0yPhoXSZ7uGJ5dAZF5").then(playlist => dispatch(addPlayList(playlist)));
    }

  }, [dispatch])
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
