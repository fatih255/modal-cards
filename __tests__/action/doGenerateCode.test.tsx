/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import '@testing-library/jest-dom'
import { renderWithProviders } from 'jest-utils/renderWithProviders'
import { ModalInitialState } from 'redux/slices/modal'
import { queryByDataStep, queryById } from 'jest-utils/customQueries';
import { act } from 'react-dom/test-utils'
import { getByText, waitFor } from '@testing-library/react'
import { create } from 'jest-utils/reduxMiddleware'
//components
import Home from 'pages'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { PrettyFormatOptions } from 'pretty-format';
import { ReactElement, JSXElementConstructor } from 'react';


// check for scrollIntoView event whether fired
const scrollIntoViewMock = jest.fn();
window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;


describe('Generate Code Process Test', () => {

    let app: any,
        selectedModal: any

    beforeEach(() => {
        app = renderWithProviders(<>
            <Header />
            <Home />
            <Footer />
        </>, {
            preloadedState: {
                modal: ModalInitialState,
            },
        })
        // checking app to was whether rendered
        expect(app).toBeDefined()
        // checking there is redux store defined
        expect(app.store.getState()).toBeDefined()
        selectedModal = selectModal(2)

    }


    )

    it('click try for free button', async () => {
        //simulate click try for free button
        const tryForFreeButton = queryById(app.container, 'try-for-free-btn-1')
        const chooseModalSection = queryByDataStep(app.container, '1')

        if (tryForFreeButton && chooseModalSection) {

            tryForFreeButton.click()
            expect(scrollIntoViewMock).toBeDefined();

        } else {
            throw new Error("tryForFreeButton or chooseModalSection not found")
        }

    })


    test('select modal 2', () => {
        expect(selectedModal).toBeDefined()

    })

    test('generate code', () => {
        const getYourCodeButton = getByText(app.container, /Get your Code/i)
        if (getYourCodeButton) {
            getYourCodeButton.click()

        } else {
            throw new Error("getYourCodeButton not found")
        }
    })





    function selectModal(modalNumber: number) {

        const { store, invoke } = create()
 

       
        // selectable modal button elements
        const selectModalButtons = app.container.querySelectorAll("#pagination-modals > div > div button")

        if (selectModalButtons) {
            const willClickedButton = selectModalButtons[modalNumber] as HTMLButtonElement
            if (selectModalButtons) {


                // this below action causes rendering panel component
                let selectedModalName = '';
                act(() => {
                    willClickedButton.click();
                    selectedModalName = app.store.getState().modal.selectedModalName
                });
                expect(store.dispatch).toHaveBeenCalledWith('selectModal')
                expect(store.getState).toHaveBeenCalled()
                //redux state have selected modal ??
                expect(selectedModalName).toBeDefined();
                //scrolled when selected modal
                expect(scrollIntoViewMock).toBeCalled();
                // rendered Panel Component when selected modal 
                // (redux state named selectModalName changed with selected 2 modal name.)
                expect(queryByDataStep(app.container, '2')).toBeInTheDocument()

                // to use throughout this action
                return selectedModalName
            }
        } else {
            throw new Error("selectModalButtons not found")
        }
    }

})







