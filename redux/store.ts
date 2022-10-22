import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import ModalReducer from './slices/modal'
import invariant from 'redux-immutable-state-invariant'
// import logger from 'redux-logger'

//for storybook redux
import { enhancer as withReduxEnhancer } from 'addon-redux'

const createMiddlewareEnhancer = () => {
  const middleware = []
  if (process.env.NODE_ENV !== 'production') {
    // include other middlewares as needed, like the invariant and logger middlewares
    middleware.push(invariant())
    // middleware.push(logger)
  }
  return applyMiddleware(...middleware)
}

const createEnhancer = () => {
  const enhancers = []
  enhancers.push(createMiddlewareEnhancer())
  if (process.env.NODE_ENV !== 'production') {
    enhancers.push(withReduxEnhancer)
  }
  return enhancers
}
// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  modal: ModalReducer,
})

// The following function contains gesture and storybook settings
export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    enhancers: createEnhancer(),
  })
}

export const store = setupStore()

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']
export type AppStore = ReturnType<typeof setupStore>
