import type { ParentComponent } from "solid-js"

const Background: ParentComponent = (props) => {
  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(to bottom right, #c29176, #845364)",
      }}
    >
      {props.children}
    </div>
  )
}

export default Background
