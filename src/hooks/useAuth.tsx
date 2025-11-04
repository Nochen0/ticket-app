import { useAuthContext } from "../context/AuthContext"
import { useNavigate } from "@solidjs/router"

const useAuth = (flip = false) => {
  const { user, login, logout } = useAuthContext()
  const navigate = useNavigate()

  if (!flip) {
    if (!user()) {
      navigate("/auth/login", { replace: true })
    }
  } else {
    if (user()) {
      navigate("/", { replace: true })
    }
  }

  return { user, login, logout }
}

export default useAuth
