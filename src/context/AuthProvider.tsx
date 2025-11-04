import { createSignal, type ParentComponent } from "solid-js"
import { AuthContext, type User } from "./AuthContext"

const AuthProvider: ParentComponent = (props) => {
  const [user, setUser] = createSignal<User | null>(null)
  const [loading, setLoading] = createSignal(true)

  const login = (user: User) => setUser(user)
  const logout = () => setUser(null)

  const auth = { user, login, logout }

  ;(async function checkLogi() {
    const response = await fetch("http://localhost:3000/auth/session", {
      method: "POST",
      credentials: "include",
    })
    const authenticated = response.ok

    if (authenticated) {
      login({ name: "TestName", email: "TestEmail", id: "TestId" })
    }
    setLoading(false)
  })()

  return (
    <AuthContext.Provider value={{ ...auth, loading }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
