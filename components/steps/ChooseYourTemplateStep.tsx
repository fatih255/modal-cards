import React from 'react'
import ChooseModals from 'components/ChooseModals'
import NumberItem from 'components/NumberItem'
import { modals } from 'lib/contants'





function ChooseYourTemplateStep() {
  return (
    <div data-step="1" className="pt-[2vh] h-[100vh]">
      <NumberItem value="1 Choose your template" />
      <ChooseModals modals={modals} />
    </div>
  )
}
export default React.memo(ChooseYourTemplateStep)