import { useEffect, useState } from 'react'
import './App.css'
import { getData } from './api/api'
import Home from './Pages/Home'

function App() {

  const [user, setUser] = useState([]);

  async function getUsers() {
    const data = await getData();
    setUser(data);
    console.log("Desde ",data);
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <Home user={user} />
      
    </>
  )
}

export default App
