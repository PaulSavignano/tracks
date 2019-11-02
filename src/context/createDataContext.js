import React, { useReducer } from 'react'
import PropTypes from 'prop-types'

function createDataContext({
  actions = {},
  initialState,
  reducer,
}) {
  const Context = React.createContext()

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const boundActions = Object.keys(actions).reduce((a, v) => {
      a[v] = actions[v](dispatch)
      return a
    }, {})

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    )
  }
  Provider.propTypes = {
    children: PropTypes.element.isRequired
  }
  return { Context, Provider }
}

export default createDataContext