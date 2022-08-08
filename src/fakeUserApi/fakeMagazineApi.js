import axios from "axios";

export const fakeMagazineApi = axios.create({baseURL: "https://api.jikan.moe/v4"})