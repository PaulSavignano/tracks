import React, { useContext, useEffect } from 'react'
import { Context as AuthContext } from '../context/AuthContext'

function ResolveAuthScreen() {
  const { state, onSigninLocal } = useContext(AuthContext)
  useEffect(() => {
    onSigninLocal()
  }, [])
  return null
}

export default ResolveAuthScreen
