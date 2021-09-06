import { SET_USER, SET_TOKEN, FETCH_PLAYLIST, GET_PLAYLIST } from "../actions";
const initialState = {
    user: {},
    token: "",
    list_playlist: {},
    playlist: null
};

const reducerSpotify = (state = initialState, action)=>{
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        case GET_PLAYLIST:
            return {
                ...state,
                list_playlist: action.payload
            }
        case FETCH_PLAYLIST:
            return {
                ...state,
                playlist: action.payload
            }
        default:
            return state;
    }
}
export default reducerSpotify;