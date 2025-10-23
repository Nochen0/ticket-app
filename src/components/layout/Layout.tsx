import type { ParentComponent } from "solid-js"
import styles from "./layout.module.css"
import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar"

const Layout: ParentComponent = (props) => {
  return (
    <div class={styles.container}>
      <Header />
      <div class={styles.navmain}>
        <Sidebar />
        <main class={styles.main}>{props.children}</main>
      </div>
    </div>
  )
}

export default Layout
