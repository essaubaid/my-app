import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/"

const TOKEN = ""

export const publicResquest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
})