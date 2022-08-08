import axios from "axios"

export const fakeProductApi = axios.create({baseURL: "https://fakestoreapi.com"})
