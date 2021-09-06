import SpotifyWebApi from 'spotify-web-api-js';
export const SET_USER = 'SET_USER';
export const SET_TOKEN = 'SET_TOKEN';
export const FETCH_PLAYLIST = 'FETCH_PLAYLIST';
export const GET_PLAYLIST = 'GET_PLAYLIST';
const spotify = new SpotifyWebApi();

export const setUser = (user) =>{
    return{
        type: SET_USER,
        payload: user
    }
}
export const addToken = (token) =>{
    return {
        type: SET_TOKEN,
        payload: token
    }
}
export const fetchPlayList = (id) =>{
    return async function(dispatch){
        console.log("el id en el action es", id);
        try {
            const playlist = await spotify.getPlaylist(id);
            dispatch({
            type: FETCH_PLAYLIST,
            payload: playlist
        })
        } catch (error) {
            console.log("el error fallido es",error)
        }
        
    }
    
} 
export const getPlaylist = (list) =>{
    return{
        type: GET_PLAYLIST,
        payload: list
    }
}