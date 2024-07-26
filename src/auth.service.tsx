import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
})

async function login(username: string, password: string) {
    const response = await axiosInstance.post('/api/token/', {
        username,
        password,
    })

    return response
}

const authService = {login}

export default authService