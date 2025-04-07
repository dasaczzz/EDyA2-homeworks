import { useState } from "react"
import { UserContext } from "./UserContext"

export const UserProvider = ({children}) => {

  const [user, setUser] = useState({username: '', isLogged: false})

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}
