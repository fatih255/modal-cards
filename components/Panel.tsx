import React, { useEffect, useRef } from 'react'

import { ModalLoader } from 'components/modalComponents'

import { layoutHeightTransformer } from 'lib/layoutHeightTransformer'
import makeStickyContainer from 'lib/makeStickyContainer'
import { scrollStep } from 'lib/utils'
import { ModalAlias } from './modals'

//steps
import { AppearanceStep } from './steps'
import ContentStep from './steps/ContentStep'
import SettingsAndCodeStep from './steps/SettingsAndCodeStep'
import TargetingRulesStep from './steps/TargetingRulesStep'
import centerScroll from 'lib/centerScroll'

export default React.memo(Panel)

export type PanelProps = {
  selectedModalName: ModalAlias
}

function Panel({ selectedModalName }: PanelProps) {
  //when selectedmodal first render props scrolling
  const EffectRan = useRef<boolean>(false)
  useEffect(() => {
    if (!EffectRan.current) {
      makeStickyContainer(
        '.dosticky',
        'white',
        80,
        { crossSticky: 0, crossTop: -18 },
        { selector: '.close-sticky', offsetCross: 90 },
      )
      layoutHeightTransformer({
        selectors: { from: '.panel', to: '.preview-inner' },
        divideHeight: 2,
      })
    }
    centerScroll({
      selector: '.preview-outer',
      behavior: 'auto',
      condition: 'ifnotcentered',
    })
    scrollStep('2')
    return () => {
      EffectRan.current = true
    }
  }, [selectedModalName])

  return (
    <div
      data-step='2'
      className='pt-[2vh] h-full '>
      <div className='panel'>
        {/* Modal Editing Zone */}
        <div className='flex-[30%] flex flex-col justify-start items-start dosticky scrollable-sticky'>
          <AppearanceStep />
          <ContentStep />
          <TargetingRulesStep />
          <SettingsAndCodeStep />
        </div>
        {/* Modal Preview Zone */}
        <div
          data-testid='modal-preview-zone'
          className={`dosticky preview-outer scrollbar-style-1 bold-scroll flex-[70%] flex self-start min-h-[96vh] justify-center relative rounded-lg overflow-y-scroll bg-gray-50`}>
          <div
            className='preview-inner'
            style={{ position: 'absolute', top: 0, width: '100%' }}>
            <ModalLoader selectedModalName={selectedModalName} />
          </div>
        </div>
      </div>
    </div>
  )
}
