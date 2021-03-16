import './App.css';
import React, {useState, useEffect} from 'react'
import UserDetails from './components/UserDetails';
const axios = require('axios')

function App() {
  const [users, setUsers] = useState([])
  const [open, setOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState()

  useEffect( () => {
    async function fetch(){
      await axios.get('https://cons-api.herokuapp.com/users')
      .then(response => {
        setUsers(response.data)
      })
      .catch(err => {
        console.log(err)
      })
    }
    fetch()
  }, [])

  useEffect(() => {
  
  }, [currentUser])

  const handleUser = (user) => {
    setCurrentUser(user)
    setOpen(true)
  }

  if (users.length === 0){
    return (
      <h1>Loading Users...</h1>
    )
  }
  return (
    <div className="App">
      <h1>User List</h1>
        {
          users.map(user => {
            return (
              <p key={user.name.first} onClick={() => { handleUser(user)}} style={{ padding: 15 }}>
                <span style={{color: '#61dafb', backgroundColor: '#282c34', padding: '10px 20px 10px 20px', borderRadius: 15, cursor:'pointer'}}>
                {user.name.first} {user.name.last} | {user.email} | {user.location.city}, {user.location.country}
                </span>
              </p>
            )
          })
        }
      <UserDetails user={currentUser} open={open} setOpen={setOpen} />
    </div>
  )
}

export default App;
