import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import UserCard from "../components/UserCard"
import type { User } from "../types/User"

function Users() {

  const [users, setUsers] = useState<User[]>([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {

    const token = localStorage.getItem("token")

    fetch("https://jsonplaceholder.typicode.com/users", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })

  }, [])

  const logout = () => {

    localStorage.removeItem("token")

    navigate("/")
  }

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )

  return (

    <div style={{ padding: "20px" }}>

      <h1>User Directory</h1>

      <button onClick={logout}>Logout</button>

      <br /><br />

      <input
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br /><br />

      {loading ? (
        <p>Loading users...</p>
      ) : (
        filteredUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))
      )}

    </div>
  )
}

export default Users