import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '9959199fde3843c580fc36343fbdb06c'
    }
}) 