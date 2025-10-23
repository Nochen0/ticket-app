import { Navigate } from "@solidjs/router"
import { createSignal, type JSXElement, type ParentComponent } from "solid-js"
import { Dynamic } from "solid-js/web"
import Layout from "../layout/Layout"

type Props = {
  loading?: () => JSXElement
  error?: () => JSXElement
  success?: () => JSXElement
}

const Authenticate: ParentComponent<Props> = (props) => {
  const options = {
    loading:
      props.loading ??
      (() => (
        <div
          style={{
            height: "100vh",
            background: "linear-gradient(to bottom right, #c29176, #845364)",
          }}
        ></div>
      )),
    error:
      props.error ??
      (() => (
        <>
          <Navigate href="/auth/login" />
          <Layout>{props.children}</Layout>
        </>
      )),
    success: props.success ?? (() => <Layout>{props.children}</Layout>),
  }

  const [select, setSelect] = createSignal<keyof typeof options>("loading")

  ;(async function checkLogin() {
    const response = await fetch("http://localhost:3000/auth/session", {
      method: "POST",
      credentials: "include",
    })

    if (!response.ok) {
      setSelect("error")
    } else {
      setSelect("success")
    }
  })()

  return <Dynamic component={options[select()]} />
}

export default Authenticate
