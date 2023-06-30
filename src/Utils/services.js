import axios from "axios"
import { BASE_URL, LATEST_JOBS } from "./constants"

const latest_jobs = ()=>{
    return axios.get(`${BASE_URL}${LATEST_JOBS}`)
}

export {
    latest_jobs
}