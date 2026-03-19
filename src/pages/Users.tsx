import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import UserCard from "../components/UserCard"
import type { User } from "../types/User"

function Users() {

  const [users, setUsers] = useState<User[]>([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  //Needed if using local storage for saving the token on client side
  //   useEffect(() => {

  //   const token = localStorage.getItem("token")

  //   fetch("https://localhost:7032/api/users", {
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log("API DATA:", data);
  //       setUsers(data)
  //       setLoading(false)
  //     })

  // }, [])

  //using HttpOnly Cookies for saving the token on client side
      useEffect(() => {

      fetch("https://localhost:7032/api/users", {
        credentials: "include" //for including httpOnly cookies
      })
      .then(res => res.json())
      .then(data => {
        console.log("API DATA:", data);
        setUsers(data)
        setLoading(false)
      })

  }, [])

  const logout = () => {

      fetch("https://localhost:7032/logout", {
        method: "POST",
        credentials: "include" //for including httpOnly cookies
      })
     navigate("/")
  }

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )

  return (

    <div className="container">
      <div className="header">
       <h1>User Directory</h1>
       <button className="logout-btn" onClick={logout}>
       Logout
       </button>
      </div>

      <br /><br />

      <input
        className="search-box"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br /><br />

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <div className="user-list">
          {
            filteredUsers.map(user => (<UserCard key={user.id} user={user} />
        ))
          }
        </div>

        
      )}

    </div>
  )
}

export default Users