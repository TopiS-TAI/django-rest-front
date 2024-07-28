import { useState } from "react";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Front from "./Front";
import Root from "./Root";
import Posts from "./Posts";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root isLoggedIn={isLoggedIn} />,
      children: [
        {
          path: '/',
          element: <Front />,
        },
        {
          path: '/login',
          element: <Login setIsLoggedIn={setIsLoggedIn}/>,
        },
        {
          path: '/posts',
          element: <Posts/>,
        },
      ]
    },
  ])

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
