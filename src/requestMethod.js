import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/"

let TOKEN;
try {
    TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).currentUser).token
}
catch {
    TOKEN = ''
}

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
})