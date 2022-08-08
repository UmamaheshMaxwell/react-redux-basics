import axios from "axios";

export const fakeTeamsApi = axios.create({baseURL: "https://jsonplaceholder.typicode.com"})