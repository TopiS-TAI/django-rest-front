import Login from "./Login";

function App() {

  function getPosts() {
    fetch('http://localhost:8000/posts/', {mode: "cors"})
      .then((res) => {console.log('res', res); return res.json()})
      .then((data) => console.log('data', data))
      .catch((err) => console.error('err', err))
  }

  function getUsers() {
    fetch('http://localhost:8000/users/', {mode: "cors"})
      .then((res) => {console.log('res', res); return res.json()})
      .then((data) => console.log('data', data))
      .catch((err) => console.error('err', err))
  }

  return (
    <>
      <h1>Testing Django REST Framework</h1>
        <Login/>
       <button onClick={getPosts}>Get posts</button>
       <button onClick={getUsers}>Get users</button>
    </>
  )
}

export default App
