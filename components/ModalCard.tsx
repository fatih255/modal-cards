import React from 'react'
import { scrollStep } from '../lib/utils'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { selectModal } from '../redux/slices/modal'
import Button from './Button'

export type ModalCardProps = {
  name: string
  thumbnail: string
}

export default function ModalCard({ name, thumbnail }: ModalCardProps) {

  const dispatch = useAppDispatch()
  const { selectedModalName } = useAppSelector(state => state.modal)

  const onClickHandler = (name: string) => {
    // choose template
    dispatch(selectModal(name))
    selectedModalName && scrollStep("2")
  }

  return <div className="group hover:scale-105 relative basis-[20%] h-48 flex justify-center bg-design-gray-100 rounded-xl border trans-300 hover:border-white border-design-gray-200 overflow-hidden">
    <div className="opacity-0 group-hover:opacity-100 group-hover:bg-primary group-hover:bg-opacity-30 w-full h-full absolute child-m-auto flex font-semibold tracking-tighter trans-400 ">
      <Button theme="primary-light" size="medium" onClick={() => onClickHandler(name)} text="Select Template" />
    </div>
    <img className="py-4 self-center" src={thumbnail} />
  </div>
}