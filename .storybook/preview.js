// .storybook/preview.js
import '../styles/index.scss'
import { store } from '../redux/store'
import { Provider } from 'react-redux'

export const parameters = {
  layout: '',
}

export const decorators = [
  (Story) => (
    <html style={{ margin: '3em' }}>
      <Provider store={store}>
        <Story />
      </Provider>
    </html>
  ),
]
