const thunkMiddleware =
    ({ dispatch, getState }) =>
        next =>
            action => {
                if (typeof action === 'function') {
                    return action(dispatch, getState)
                }

                return next(action)
            }

const create = () => {
    const store = {
        getState: jest.fn(() => ({})),
        dispatch: jest.fn()
    }
    const next = jest.fn()

    const invoke = (action) => thunkMiddleware(store)(next)(action)

    return { store, next, invoke }
}


export { create }