import axios from "axios"
import { APPLY_JOB, BASE_URL, GET_APPLICATIONS, GET_JOBS, LATEST_JOBS, LOGIN, POST_JOB, SIGN_UP } from "./constants"

const latest_jobs = ()=>{
    return axios.get(`${BASE_URL}${LATEST_JOBS}`)
}

const set_data = (token)=>{
    localStorage.setItem("token", token)
}

const get_data = ()=>{
    return localStorage.getItem("token")||null 
}

const login = (email, password)=>{
    return axios.post(`${BASE_URL}${LOGIN}`,{
        "email": email,
        "password": password
    })
}

const remove_data = ()=>{
    localStorage.removeItem("token")
}

const post_job = (title, description, salary, deadline, location)=>{
    return axios.post(`${BASE_URL}${POST_JOB}`, {
        "title": title,
        "description": description,
        "salary": salary,
        "deadline": deadline,
        "location": location
    },{
        headers:{
            "auth-token": get_data()
        }
    })
}

const apply_job = (title, description, name, qualification, years_of_experience)=>{
    return axios.post(`${BASE_URL}${APPLY_JOB}`, {
        "title": title,
        "description": description,
        "name": name,
        "qualification": qualification,
        "years_of_experience": years_of_experience
    },{
        headers:{
            "auth-token": get_data()
        }
    })
}

const get_applications = ()=>{
    return axios.get(`${BASE_URL}${GET_APPLICATIONS}`,{
        headers:{
            "auth-token": get_data()
        }
    })
}

const get_jobs = ()=>{
    return axios.get(`${BASE_URL}${GET_JOBS}`,{
        headers:{
            "auth-token": get_data()
        }
    })
}

const sign_upc = (name, email, password, company, address)=>{
    return axios.post(`${BASE_URL}${SIGN_UP}`,{
        "name": name,
        "email": email,
        "password": password,
        "company": company,
        "address": {
            "headquaters": address
        }
    })
}

const sign_upe = (name, email, password, company)=>{
    return axios.post(`${BASE_URL}${SIGN_UP}`,{
        "name": name,
        "email": email,
        "password": password,
        "company": company,
    })
}

export {
    latest_jobs, login, set_data, get_data, remove_data, post_job, apply_job, get_applications, get_jobs, sign_upc, sign_upe
}