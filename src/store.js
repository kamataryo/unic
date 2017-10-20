import { createStore, combineReducers, applyMiddleware } from 'redux'

/**
 * Reducers
 */
import metaReducer from 'reducers/meta'

/**
 * Middlewares
 * @type {Array}
 */
const middlewares = []

/**
 * Store
 * @type {object}
 */
const store = createStore(
  combineReducers({
    meta: metaReducer,
  }),
  applyMiddleware(...middlewares),
)

export default store
