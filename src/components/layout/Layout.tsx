import { Match, Switch, type ParentComponent } from "solid-js"
import styles from "./layout.module.css"
import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar"
import Background from "../util/Background"
import { useAuthContext } from "../../context/AuthContext"

const Layout: ParentComponent = (props) => {
  const { user, loading } = useAuthContext()

  return (
    <Switch>
      <Match when={loading()}>
        <Background />
      </Match>
      <Match when={user()}>
        <div class={styles.container}>
          <Header />
          <div class={styles.navmain}>
            <Sidebar />
            <main class={styles.main}>{props.children}</main>
          </div>
        </div>
      </Match>
      <Match when={!user()}>{props.children}</Match>
    </Switch>
  )
}

export default Layout
