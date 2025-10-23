import { type ParentComponent } from "solid-js"
import Authenticate from "./components/util/Authenticate"

const App: ParentComponent = (props) => {
  return <Authenticate>{props.children}</Authenticate>
}

export default App
