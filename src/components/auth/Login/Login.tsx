import { A, useNavigate } from "@solidjs/router"
import styles from "../auth.module.css"
import { createSignal } from "solid-js"
import TailSpin from "../../util/Tailspin/TailSpin"
import ResendVerification from "../ResendVerification"

type ErrorSignal = {
  error: string
  faultyFields: string[]
} | null

export default function Login() {
  const navigate = useNavigate()
  const [loading, setLoading] = createSignal(false)
  const [error, setError] = createSignal<ErrorSignal>(null)
  let emailRef!: HTMLInputElement
  let passwordRef!: HTMLInputElement

  async function onSubmit(e: SubmitEvent & { currentTarget: HTMLFormElement }) {
    e.preventDefault()

    setError(null)
    setLoading(true)
    const response = await fetch("http://localhost:3000/auth/login", {
      body: new URLSearchParams({
        email: emailRef.value.trim(),
        password: passwordRef.value.trim(),
      }),
      method: "POST",
      credentials: "include",
    })
    setLoading(false)

    if (response.ok) {
      navigate("/", { replace: true })
      return
    }
    const json = await response.json()

    const errors: ErrorSignal = {
      error: json.error,
      faultyFields: [],
    }

    if (Object.hasOwn(json, "details")) {
      errors.faultyFields = [...Object.keys(json.details.properties)]
    }

    setError(errors)
  }

  return (
    <div class={styles.view}>
      <div class={styles.container}>
        <form on:submit={onSubmit} method="post" class={styles.form}>
          <div class={styles["form-content"]}>
            <h2 class={styles.h2}>Hello Again!</h2>
            <input
              class={styles.fields}
              style={{
                border: error()?.faultyFields.includes("email")
                  ? "1px solid red"
                  : "unset",
              }}
              name="email"
              type="email"
              placeholder="Email"
              ref={emailRef}
            />
            <input
              class={styles.fields}
              style={{
                border: error()?.faultyFields.includes("password")
                  ? "1px solid red"
                  : "unset",
              }}
              name="password"
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
            {error() && <p class={styles.error}>{error()!.error}</p>}
            {error()?.error.startsWith("Email") && <ResendVerification />}
            <button type="submit" class={styles.submit}>
              {loading() ? <TailSpin /> : <span>Login</span>}
            </button>
            <p class={styles.footer}>
              Don't have an account yet?{" "}
              {
                <A href="/auth/register" class={styles.navigate}>
                  Register
                </A>
              }
            </p>
          </div>
        </form>
        <img
          src="https://preview.redd.it/oo8hu88g5pg61.png?width=1080&crop=smart&auto=webp&s=82b015390c5925c1f909f763fbf0a54e479cc256"
          alt="Image"
          class={styles.image}
        />
      </div>
    </div>
  )
}
