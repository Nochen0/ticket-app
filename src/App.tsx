import {
  createResource,
  type Component,
  Suspense,
  Switch,
  Match,
} from "solid-js"

type Response =
  | { error: string; message: undefined }
  | { message: string; error: undefined }

async function checkLogin() {
  const response = await fetch("http://localhost:3000/auth/session", {
    method: "post",
  })
  const json: Response = await response.json()
  if (!response.ok) {
    throw new Error(json.error)
  }
  return response.json()
}

const App: Component = () => {
  const [message] = createResource<Response>(checkLogin)
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Match when={message.error}>
            <span>Error: {message.error.message}</span>
          </Match>
          <Match when={message()}>
            <div>{message()!.message}</div>
          </Match>
        </Switch>
      </Suspense>
    </div>
  )
}

export default App
