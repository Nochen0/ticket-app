import useAuth from "../../hooks/useAuth"

export default function HomePage() {
  useAuth()

  return <div style={{ width: "calc(100vw - 290px)" }}>Home Component</div>
}
