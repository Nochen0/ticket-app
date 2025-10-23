import type { Component } from "solid-js"
import styles from "./tailspin.module.css"

export const TailSpin: Component<{
  width?: string
  height?: string
  class?: string
}> = (props) => {
  return (
    <div
      style={{
        height: props.height ?? "22px",
        width: props.width ?? "22px",
      }}
      class={`${props.class ?? ""} ${styles.div}`}
    ></div>
  )
}

export default TailSpin
