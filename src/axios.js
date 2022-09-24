import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;

//https://api.themoviedb.org/3/discover/tv?api_key=3ba1b3efb302857268aa07fac44e6c84&with_networks=213