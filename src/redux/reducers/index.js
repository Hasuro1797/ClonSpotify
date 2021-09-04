import { SET_USER, SET_TOKEN, ADD_PLAYLIST } from "../actions";
const initialState = {
    user: {},
    token: "",
    playlist:{}
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
        case ADD_PLAYLIST:
            return {
                ...state,
                playlist: action.payload
            }
        default:
            return state;
    }
}
export default reducerSpotify;