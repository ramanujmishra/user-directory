import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleLogin = () => {
    console.log("Login clicked")

    if (username === "admin" && password === "1234") {

      const fakeToken = "demo-jwt-token"

      localStorage.setItem("token", fakeToken)

      navigate("/users")

    } else {
      alert("Invalid credentials")
    }
  }

  return (

    <div style={{ padding: "20px" }}>

      <h2>Login</h2>

      <input 
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <input 
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button type="button" onClick={handleLogin}>
        Login
      </button>

    </div>
  )
}

export default Login