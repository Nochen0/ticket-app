import { Navigate } from "@solidjs/router"
import Authenticate from "../../util/Authenticate"
import Register from "./Register"

export default function RegisterPage() {
  return (
    <Authenticate error={() => <Register />}>
      <Navigate href="/" />
    </Authenticate>
  )
}
