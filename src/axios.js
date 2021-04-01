import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.API_URL || 'https://dlcfhms1ia.execute-api.eu-central-1.amazonaws.com/'
})

export default instance