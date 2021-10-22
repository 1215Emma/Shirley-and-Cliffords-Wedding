import React, { useContext, useState, useEffect } from 'react'
import app from '../Firebase'

const AuthContext = React.createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()

  const signup = (email, password) => {
    return app.createUserWithEmailAndPassword(email, password)
  }
  useEffect(() => {

    const unsubscribe = app.onAuthStateChanged(user => {
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signup
  }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

