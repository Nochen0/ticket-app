import useAuth from "../../hooks/useAuth"

export default function NotFound() {
  useAuth()

  return <div style={{ width: "calc(100vw - 290px)" }}>NotFound Component</div>
}
