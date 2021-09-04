const endPoint = "https://accounts.spotify.com/authorize";
const clientId = "1b0d1515c6b949ca92d98323687a78b2";
const rediretUrl = "http://localhost:3000/";
const scopes = ["user-read-currently-playing", "user-top-read", "user-read-recently-played", "user-read-playback-state", "user-modify-playback-state"];
export const loginUrl = `${endPoint}?client_id=${clientId}&response_type=token&redirect_uri=${rediretUrl}&scope=${scopes.join("%20")}&show_dialog=true`;

export const getToken = () => {
    return window.location.hash.substring(1).split("&").reduce((inicial,item) =>{
        let parts = item.split("=");
        inicial[parts[0]] = decodeURIComponent(parts[1])
        return inicial;
    },{})
};