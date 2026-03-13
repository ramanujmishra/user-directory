import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Users from "./pages/Users"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  )
}

export default App