import axios from "axios";

const baseURL = "";

export const Api = axios.create({
    baseURL,
});
