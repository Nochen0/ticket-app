import { createContext, useContext } from "solid-js"

export type User = {
  name: string
  email: string
  id: string
}

type AuthType = {
  user: () => User | null
  loading: () => boolean
  login: (user: User) => void
  logout: () => void
}

export const AuthContext = createContext<AuthType>()
export const useAuthContext = () => useContext(AuthContext)!
