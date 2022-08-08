import axios from "axios"

export const fakeUserApi = () => {
    return axios.create({baseURL: "https://jsonplaceholder.typicode.com"})
}