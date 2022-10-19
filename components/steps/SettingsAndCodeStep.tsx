import React from 'react'
import NumberItem from 'components/NumberItem'

// Tools used by Content Step
import {
  GenerateCode,
  EditWebhookURL,
  FormSubmissionAndSendClickData,
} from 'components/paneltools'

export default function SettingsAndCodeStep() {
  return (
    <>
      <div className='mt-[70px]' />
      <div className='dosticky'>
        <NumberItem value='5 Settings and Code' />
      </div>
      <div className='mb-4' />
      <FormSubmissionAndSendClickData />
      <EditWebhookURL />
      <GenerateCode />
    </>
  )
}
