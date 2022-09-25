import React from 'react'
import { modals } from '../../lib/contants'
import ChooseModals from '../ChooseModals'
import NumberItem from '../NumberItem'

type Props = {}

export default function ChooseYourTemplateStep({ }: Props) {
  return (
    <div data-step="1" className="pt-[2vh] h-[100vh]">
      <NumberItem value="1 Choose your template" />
      <ChooseModals modals={modals} />
    </div>
  )
}