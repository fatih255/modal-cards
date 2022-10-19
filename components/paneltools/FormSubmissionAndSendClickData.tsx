import { CheckBoxList } from 'components/panelComponents'
import React from 'react'
import { shallowEqual } from 'react-redux'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { updateSettings } from 'redux/slices/modal'

export default function FormSubmissionAndSendClickData() {
  const dispatch = useAppDispatch()
  const { sendFormSubmission, sendClickData } = useAppSelector(
    (state) =>
      Object({
        sendFormSubmission: state.modal.settings.sendFormSubmission,
        sendClickData: state.modal.settings.sendClickData,
      }),
    shallowEqual,
  )

  return (
    <div>
      <CheckBoxList
        returnedValue={(data) =>
          dispatch(updateSettings({ name: data.name, value: data.value }))
        }
        items={[
          {
            checked: sendFormSubmission,
            text: 'Send form submissions',
            value: 'sendFormSubmission',
          },
          {
            checked: sendClickData,
            text: 'Send click data',
            value: 'sendClickData',
          },
        ]}
      />
    </div>
  )
}
