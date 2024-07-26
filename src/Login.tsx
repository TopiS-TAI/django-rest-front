import { FormEvent } from "react"
import authService from "./auth.service"

type Props = {setIsLoggedIn: (val:boolean) => void}

function Login({setIsLoggedIn}: Props) {

    async function sendLogin(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const username = formData.get('username')?.toString()
        const password = formData.get('password')?.toString()

        if (username && password) {
            authService.login(username, password)
                .then(res => {
                    setIsLoggedIn(res.status === 200)
                })
                .catch(err => {
                    console.log('err', err)
                    setIsLoggedIn(false)
                })

        }
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
        </>
    )
}

export default Login