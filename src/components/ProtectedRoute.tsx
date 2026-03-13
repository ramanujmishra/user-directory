import { Navigate } from "react-router-dom"

function ProtectedRoute({ children }: any) {

  const token = localStorage.getItem("token")
console.log("Protected route check")
console.log(localStorage.getItem("token"))
  if (!token) {
    return <Navigate to="/" />
  }

  return children
}

export default ProtectedRoute