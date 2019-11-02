import { AsyncStorage } from 'react-native'

import createDataContext from './createDataContext'
import fetchApi from '../api/fetchApi'
import { navigate } from '../navigationRef'

function authReducer(state, action) {
  switch (action.type) {
    case 'fetching':
      return {
        ...state,
        isFetching: true
      }
    case 'add_error':
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      }
    case 'add_token':
      return {
        ...state,
        error: '',
        token: action.payload,
        isFetching: false,
      }
    case 'delete_token':
      return {
        ...state,
        error: '',
        token: null,
        isFetching: false
      }
    case 'delete_error':
      return {
        ...state,
        error: '',
        isFetching: false,
      }
    default:
      return state
  }
}

const onSignup = dispatch => async ({ email, password }) => {
  try {
    dispatch({ type: 'fetching' })
    const res = await fetchApi({
      method: 'POST',
      url: '/signup',
      body: { email, password }
    })
    await AsyncStorage.setItem('token', res.token)
    dispatch({ type: 'add_token', payload: res.token })
    return navigate('TrackList')
  } catch (error) {
    return dispatch({ type: 'add_error', payload: error })
  }
}

const onSignin = dispatch => async ({ email, password }) => {
  try {
    dispatch({ type: 'fetching' })
    const res = await fetchApi({
      method: 'POST',
      url: '/signin',
      body: { email, password }
    })
    await AsyncStorage.setItem('token', res.token)
    dispatch({ type: 'add_token', payload: res.token })
    return navigate('TrackList')
  } catch (error) {
    return dispatch({ type: 'add_error', payload: error })
  }
}

const onSigninLocal = dispatch => async () => {
  const token = await AsyncStorage.getItem('token')
  if (token) {
    dispatch({ type: 'add_token', payload: token })
    return navigate('TrackList')
  }
  return navigate('loginFlow')
}


const onSignout = dispatch => async () => {
  await AsyncStorage.removeItem('token')
  dispatch({ type: 'delete_token' })
  return navigate('loginFlow')
}

const onDeleteError = dispatch => () => dispatch({ type: 'delete_error' })

export const { Provider, Context } = createDataContext({
  actions: {
    onDeleteError,
    onSignin,
    onSigninLocal,
    onSignout,
    onSignup,
  },
  initialState: {
    isSignedIn: false,
    error: '',
    token: null,
  },
  reducer: authReducer,
})