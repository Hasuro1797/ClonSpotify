export const SET_USER = 'SET_USER';
export const SET_TOKEN = 'SET_TOKEN';
export const ADD_PLAYLIST = 'ADD_PLAYLIST'

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
export const addPlayList = (playlist) =>{
    return{
        type: ADD_PLAYLIST,
        payload: playlist
    }
} 