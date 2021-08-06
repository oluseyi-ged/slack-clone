import "./App.css"
import Header from "./Header"
import Sidebar from "./Sidebar"

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      <div className="app__body">
        <Sidebar />
      </div>
      {/* Sidebar */}
      {/* React Router => chat screens */}
    </div>
  )
}

export default App
