import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { useAppSelector } from 'redux/hooks'
import { ModalType } from 'redux/slices/modal'
import { ModalAlias } from '../modals'
import { shallowEqual } from 'react-redux'

export type ModalLoaderProps = {
  selectedModalName?: ModalAlias
}
export type ModalProps = {
  contents: ModalType['contents']
  layout: ModalType['layout']
}

function ModalLoader({ selectedModalName }: ModalLoaderProps) {
  const modalProps = useAppSelector(
    (state) =>
      Object({
        contents: state.modal.contents,
        layout: state.modal.layout,
      }),
    shallowEqual,
  )

  const SelectedModal = dynamic(
    () => import(`components/modals/${selectedModalName}`),
    { suspense: false, ssr: false },
  )
  return selectedModalName ? (
    <Suspense>
      <SelectedModal {...modalProps} />
    </Suspense>
  ) : (
    <></>
  )
}

export default React.memo(ModalLoader)
