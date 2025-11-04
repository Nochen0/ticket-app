import { type ParentComponent } from "solid-js"
import AuthProvider from "./context/AuthProvider"
import LayoutTest from "./components/layout/Layout"

const App: ParentComponent = (props) => {
  return (
    <AuthProvider>
      <LayoutTest>{props.children}</LayoutTest>
    </AuthProvider>
  )
}

export default App
