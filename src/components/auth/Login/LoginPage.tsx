import { Navigate } from "@solidjs/router"
import Authenticate from "../../util/Authenticate"
import Login from "./Login"

export default function LoginPage() {
  return (
    <Authenticate error={() => <Login />}>
      <Navigate href="/" />
    </Authenticate>
  )
}
