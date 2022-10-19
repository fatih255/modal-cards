import React from 'react'
import Button from 'components/Button'
import { useAppDispatch } from 'redux/hooks'
import { selectRadioButton } from 'redux/slices/modal'
import {
  ModalLogo,
  ModalRadios,
  WithModalLayout,
} from 'components/modalComponents'
import { ModalProps } from 'components/modalComponents/ModalLoader'

export default function ChooseBestForYouModal({
  contents: { texts, radios },
  layout: { colors },
}: ModalProps) {
  const dispatch = useAppDispatch()

  return (
    <WithModalLayout>
      <ModalLogo />
      <div className='flex flex-col gap-4 mb-5 pt-2'>
        <span className={`${colors.text} leading-[22px] uppercase`}>
          {texts[0]}
        </span>
        <h1 className='title'>{texts[1]}</h1>
        <p className='description'>{texts[2]}</p>
      </div>
      <ModalRadios
        colors={colors}
        returnedIndex={(index) => dispatch(selectRadioButton(index))}
        items={radios}
      />
      <div className='flex gap-3 w-full items-stretch flex-wrap pb-2'>
        <Button
          className='flex-1'
          theme='light-bordered'
          size='modal-default'
          text={texts[3]}
        />
        <Button
          data-value={radios.filter((r: any) => r.selected)[0]?.value}
          data-post-url={texts[4].postURL}
          className={`${colors.bg} flex-1`}
          size='modal-default'
          text={texts[4].text}
        />
      </div>
    </WithModalLayout>
  )
}
