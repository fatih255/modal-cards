import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import ModalReducer from './slices/modal'
import invariant from 'redux-immutable-state-invariant'
import logger from 'redux-logger'

//for storybook redux
import { enhancer as withReduxEnhancer } from 'addon-redux'

const createMiddlewareEnhancer = () => {
  const middleware = []
  if (process.env.NODE_ENV !== 'production') {
    // include other middlewares as needed, like the invariant and logger middlewares
    middleware.push(invariant())
    middleware.push(logger)
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

export const store = configureStore({
  reducer: {
    modal: ModalReducer,
  },
  enhancers: createEnhancer(),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
