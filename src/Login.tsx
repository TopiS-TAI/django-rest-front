import { FormEvent, useState } from "react"

function Login() {

    const [token, setToken] = useState<string>()

    function sendLogin(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        fetch('http://localhost:8000/api/token/', {
            method: 'POST',
            body: formData
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error(`Error ${res.status}`)
            }
        })
        .then(data => {
            console.log('data', data)
            setToken(data.access)
        })
        .catch(err => console.log('error', err))
    }

    function testToken() {
        fetch('http://localhost:8000/posts/1/', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }

    return (
        <>
            <h1>Login</h1>
            <form action="post" onSubmit={sendLogin}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <input type="submit" value="Send" />
            </form>
            <button onClick={testToken}>Test token</button>
        </>
    )
}

export default Login