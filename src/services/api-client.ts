import axios from "axios";

export interface FetchResponse <T>{
    count: number,
    results: T[]
}

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '9959199fde3843c580fc36343fbdb06c'
    }
}) 