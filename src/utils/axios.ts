import axios from "axios";

const instance=axios.create({
    baseUrl:"https://countries.trevorblades.com/"
})

export default instance