import '@testing-library/jest-dom'
import { renderWithProviders } from 'jest-utils/renderWithProviders'
import { ModalInitialState } from 'redux/slices/modal'
import Home from 'pages'

it('render correctly Home Page ', async () => {
  const component = renderWithProviders(<Home />, {
    preloadedState: {
      modal: ModalInitialState,
    },
  })
  expect(component).toBeDefined()
  expect(component.store.getState()).toBeDefined()
})
