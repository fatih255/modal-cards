import React from 'react'
import Button from 'components/Button'
import { WithModalLayout } from 'components/modalComponents'
import { ModalProps } from 'components/modalComponents/ModalLoader'

export default function InstallLocalNowModal({
  contents: { texts, image },
  layout: { colors },
}: ModalProps) {
  return (
    <WithModalLayout>
      <img
        src={image ?? ''}
        className='w-full object-cover '
      />
      <div className='inner'>
        <h1 className='title'>{texts[0]}</h1>
        <p className='description'>{texts[1]}</p>
        <div className='flex flex-col gap-3 w-full items-stretch '>
          <Button
            data-webhook-post
            className={`${colors.bg} flex-1`}
            size='modal-default'
            text={texts[2]}
          />
          <Button
            data-close-modal
            className='flex-1'
            theme='light-bordered'
            size='modal-default'
            text={texts[3]}
          />
        </div>
      </div>
    </WithModalLayout>
  )
}
