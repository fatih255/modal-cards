import { CheckBoxList } from 'components/panelComponents'
import React from 'react'
import { shallowEqual } from 'react-redux'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { updateSettings } from 'redux/slices/modal'

type Props = {}

export default function FormSubmissionAndSendClickData({ }: Props) {

    const dispatch = useAppDispatch()
    const { sendFormSubmission, sendClickData } = useAppSelector(state => Object(
        {
            sendFormSubmission: state.modal.settings.sendFormSubmission,
            sendClickData: state.modal.settings.sendClickData
        }), shallowEqual)


    return (
        <div>
            <CheckBoxList
                returnedValue={(data) => dispatch(updateSettings({ name: data, value: true }))}
                items={
                    [
                        { checked: sendFormSubmission, text: "Send form submissions", value: "send-from-submissions" },
                        { checked: sendClickData, text: "Send click data", value: "send-click-data" },
                    ]
                } />
        </div>
    )
}