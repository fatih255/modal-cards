import React from 'react'
import Button from 'components/Button'
import {
  InputTextModal,
  WithModalLayout,
  ModalLogo,
} from 'components/modalComponents'
import { ModalProps } from 'components/modalComponents/ModalLoader'

export default function SecurityCodeModal({
  contents: { texts },
  layout: { colors },
}: ModalProps) {
  return (
    <WithModalLayout>
      <ModalLogo />
      <h1 className='title'>{texts[0]}</h1>
      <p className='description '>{texts[1]}</p>
      <InputTextModal placeholder={texts[2]} />
      <div className='flex gap-3 w-full items-stretch flex-wrap'>
        <Button
          data-close-modal
          className='flex-1'
          theme='light-bordered'
          size='modal-default'
          text={texts[3]}
        />
        <Button
          data-webhook-post
          className={`${colors.bg} flex-1`}
          size='modal-default'
          text={texts[4]}
        />
      </div>
    </WithModalLayout>
  )
}
