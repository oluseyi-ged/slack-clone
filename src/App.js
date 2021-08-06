import "./App.css"
import Header from "./Header"
import Sidebar from "./Sidebar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Chat from "./Chat"
import Login from "./Login"
import { useStateValue } from "./StateProvider"
import Welcome from "./Welcome"

function App() {
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Router>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <Welcome />
                </Route>
              </Switch>
            </div>
          </Router>
        </>
      )}
    </div>
  )
}

export default App
