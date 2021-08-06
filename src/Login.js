import React from "react"
import "./Login.css"
import { Button } from "@material-ui/core"
import { auth, provider } from "./firebase"
import { useStateValue } from "./StateProvider"
import { actionTypes } from "./reducer"

function Login() {
  const [state, dispatch] = useStateValue()

  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result)
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://thumbs.bfldr.com/at/pl546j-7le8zk-afym5u/v/3033396?expiry=1628858731&fit=bounds&height=800&sig=YzcwM2ZmNDJkOWY3ZmNmY2ExOWIzZGQ0Y2NmN2QxYTYzZGRkYTdjMA%3D%3D&width=1100"
          alt=""
        />
        <h1>Sign in to the slack clone</h1>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  )
}

export default Login
