import type { Component, JSXElement } from "solid-js"
import styles from "./sidebar.module.css"
import { A } from "@solidjs/router"

type Props = {
  title: string
  svg: JSXElement
  path: string
}

const Menu: Component<Props> = (props) => {
  return (
    <ul class={styles.ul}>
      <A
        end
        inactiveClass={`${styles.link}`}
        activeClass={`${styles.link} ${styles["link-active"]}`}
        href={props.path}
      >
        {props.svg}
        <p class={styles.title}>{props.title}</p>
      </A>
    </ul>
  )
}

export default Menu
