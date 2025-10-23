import { createSignal } from "solid-js"
import TailSpin from "../util/Tailspin/TailSpin"
import styles from "./auth.module.css"

export default function ResendVerification() {
  const [loading, setLoading] = createSignal(false)

  async function resendVerification() {
    setLoading(true)
    await fetch("http://localhost:3000/auth/resend", {
      method: "POST",
      credentials: "include",
    })
    setLoading(false)
  }

  return (
    <button onClick={resendVerification} class={styles.submit} type="button">
      {loading() ? <TailSpin /> : <span>Resend Verification Email</span>}
    </button>
  )
}
