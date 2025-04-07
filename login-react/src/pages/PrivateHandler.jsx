import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Outlet } from "react-router"

export const PrivateHandler = () => {
  const {user} = useContext(UserContext)
  return user.isLogged ? <Outlet /> : <> Error 403</>
}
