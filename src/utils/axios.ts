import axios from "axios";

const instance = axios.create({
    baseURL: "https://countries.trevorblades.com/"
});

export default instance;
