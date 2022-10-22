import '@testing-library/jest-dom'
import { renderWithProviders } from 'jest-utils/renderWithProviders'
import { ModalInitialState } from 'redux/slices/modal'
import Header from 'components/Header'

describe('Home Page', () => {
  it('render correctly Home Page and have modal store state', async () => {
    const component = renderWithProviders(<Header />, {
      preloadedState: {
        modal: ModalInitialState,
      },
    })
    expect(component).toBeDefined()
    expect(component.store.getState()).toBeDefined()
  })
})
