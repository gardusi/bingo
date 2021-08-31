import { Map } from 'immutable'
import { GET_OWNED_GAMES } from './types'

export const getOwnedGames = () => async (dispatch) => {
  dispatch(getOwnedGamesStart())
}

const getOwnedGamesStart = () => ({ type: GET_OWNED_GAMES.START })

const initialState = Map({
  ownedGames: []
})

export const appReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case GET_OWNED_GAMES.START:
      return state
    case GET_OWNED_GAMES.END:
      return state
    case GET_OWNED_GAMES.ERROR:
      return state
    case GET_OWNED_GAMES.RESULT:
      return state
    default:
      return state
  }
}
