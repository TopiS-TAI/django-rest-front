import { useState } from "react";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Front from "./Front";
import Root from "./Root";

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
        }
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
