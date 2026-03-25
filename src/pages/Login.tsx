import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "../components/LoginPage.css"

function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [csrfToken,setCsrfToken] = useState("")

  const navigate = useNavigate()

  // const handleLogin = () => {
  //   console.log("Login clicked")

  //   if (username === "admin" && password === "1234") {

  //     const fakeToken = "demo-jwt-token"

  //     localStorage.setItem("token", fakeToken)

  //     navigate("/users")

  //   } else {
  //     alert("Invalid credentials")
  //   }
  // }
  const getCSRFToken= async () =>{
     console.log("getting csrf token");
    const response = await fetch("https://localhost:7032/csrf-token",{
      credentials : "include"
    });

    var result = await response.json();
    return result.csrfToken;
  }
  
  const handleLogin = async () => {
    console.log("Login clicked");
    console.log("getting csrf token");

    const csrfToken = await getCSRFToken();
    //Use url https://localhost:7032/login if want to get Token in response
    const response = await fetch("https://localhost:7032/loginWithHttpOnlyCookie",{
      method: "POST",
      credentials: "include", // for saving HttpOnly cookies,
      headers: {
        "content-type" : "application/json",
        "X-CSRF-TOKEN" : csrfToken
      },
      body: JSON.stringify({
      username,
      password
  }) 
     
    });

   
    if(!response.ok)
    {
      console.log("Login failed");
      alert("Invalid credentials");
      return;
    }
    
    navigate("/users");
    //  let data =  await response.json();
    //  const token = data.token;

    //  if(token){
    //   localStorage.setItem("token", token);
    //   navigate("/users");
    //  }
    //  else{
    //   console.log("token not found in response");
    //   alert("Login failed");
    //  }
    };
    
    return (

    <div className="login-container">
    <div className="login-card">
    <h2>Login</h2>

    <input
      className="login-input"
      placeholder="Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />

    <input
      className="login-input"
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />

    <button className="login-btn" onClick={handleLogin}>
      Login
    </button>
  </div>
</div>
  )
}

export default Login