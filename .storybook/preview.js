import { Provider } from "react-redux"
import { store } from '../redux/store'

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <Story />
    </Provider>
  ),
]
