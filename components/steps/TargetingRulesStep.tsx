import React from 'react'
import NumberItem from 'components/NumberItem'

// Tools used by Targeting Rules Step
import {
  AfterPercentageScroll,
  AfterXSeconds,
  BrowserLanguageSelect,
  ExitIntentTargetting,
  TrafficSource,
  VisitorDeviceSelect,
} from 'components/paneltools'
import ModalEventListeners from 'components/modalComponents/ModalEventListeners'

export default function TargetingRulesStep() {
  return (
    <div
      data-step='4'
      className='flex flex-col w-full mt-6 '>
      {/* Step-3 ---Content */}
      <hr className='h-14 border-none' />
      <div className='dosticky'>
        <NumberItem value='4 Targeting Rules' />
      </div>
      <VisitorDeviceSelect />
      <AfterXSeconds />
      <AfterPercentageScroll />
      <TrafficSource />
      <BrowserLanguageSelect />
      <ExitIntentTargetting />
      <ModalEventListeners />
    </div>
  )
}
