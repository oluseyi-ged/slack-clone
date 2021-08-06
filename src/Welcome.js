import React from "react"
import "./Welcome.css"

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome__container">
        <img
          src="https://assets.website-files.com/5d5e2ff58f10c53dcffd8683/5db1e0e047495f76fd1904e9_doggie.gif"
          alt=""
        />
        <h1>welcome to the slack clone</h1>
        <p>Join a channel or Create one for you and your friends</p>
      </div>
    </div>
  )
}

export default Welcome
