import { Link, Outlet } from "react-router-dom";

type Props = { isLoggedIn: boolean }

function Root({isLoggedIn}: Props) {
    
    return (
        <>
            <header>
                <nav>
                    <Link to={`/`}>Main</Link>
                    <Link to={`/login`}>Login</Link>
                    <Link to={`/posts`}>Posts</Link>
                </nav>
                {isLoggedIn ? <span>Logged</span> : <span>Not logged</span>}
            </header>
            <h1>Testing Django REST Framework</h1>
            <main>
                <Outlet />
            </main>
                
            <footer>Footer</footer>
        </>
    )
}

export default Root