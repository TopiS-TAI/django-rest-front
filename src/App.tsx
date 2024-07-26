import { useState } from "react";
import Login from "./Login";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  return (
    <>
      {isLoggedIn ? <span>Logged</span> : <span>Not logged</span>}
      <h1>Testing Django REST Framework</h1>
        <Login setIsLoggedIn={setIsLoggedIn}/>
    </>
  )
}

export default App
