import React from 'react'
import { useAppSelector } from 'redux/hooks'
import { useModalEvents } from 'lib/useModalEvents'
import { shallowEqual } from 'react-redux'

function ModalEventListeners() {

    const {
        isActiveExitIntentTargetting,
        AfterPercentageScroll,
        afterXSeconds
    } = useAppSelector(state => Object(
        {
            isActiveExitIntentTargetting: state.modal.settings.exitIntentTargetting,
            AfterPercentageScroll: {
                isActive: state.modal.activedSettings.includes("afterPercentageScroll"),
                value: state.modal.settings.afterPercentageScroll
            },
            afterXSeconds: {
                isActive: state.modal.activedSettings.includes("afterXSeconds"),
                value: state.modal.settings.afterXSeconds
            }
        }
    ), shallowEqual)

    useModalEvents("exitIntentTargetting", isActiveExitIntentTargetting)
    useModalEvents("afterPercentageScroll", AfterPercentageScroll.isActive, AfterPercentageScroll.value)
    useModalEvents("afterXSeconds", afterXSeconds.isActive, afterXSeconds.value)


    return (
        <></>
    )
}

export default React.memo(ModalEventListeners)