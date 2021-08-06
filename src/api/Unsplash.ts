import axios from "axios";

let baseUrl = "https://api.unsplash.com"
let clientId = 'BGvg2fAkF34aPqKm4Naae8CwwkNCbLSu_6gQsFyJfGo'

export default axios.create({
    baseURL: baseUrl,
    headers: {
        Authorization: `Client-ID ${clientId}`
    }
})