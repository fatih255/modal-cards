import React from 'react'
import { useEffectOneTime, useLayoutHeightTransformer } from 'lib/hooks'
import { scrollStep } from 'lib/utils'
import { useAppSelector } from 'redux/hooks'
import ModalLoader from './ModalLoader'
import makeStickyContainer from 'lib/makeStickyContainer'


//steps
import { AppearanceStep } from './steps'
import ContentStep from './steps/ContentStep'
import SettingsAndCodeStep from './steps/SettingsAndCodeStep'
import TargetingRulesStep from './steps/TargetingRulesStep'



type Props = {

}
export default React.memo(Panel)

function Panel({ }: Props) {


    const selectedModalName = useAppSelector(state => state.modal.selectedModalName)


    //when selectedmodal first render props scrolling
    useEffectOneTime(() => {
        useLayoutHeightTransformer({ selectors: { from: '.panel', to: '.preview-inner' }, centeredBySelector: '.preview-outer', divideHeight: 2 })

        makeStickyContainer('.dosticky', "white", 80, { crossSticky: 0, crossTop: -18 }, { selector: '.close-sticky', offsetCross: 90 })

        scrollStep('2')
    })


    return (
        <div data-step="2" className="pt-[2vh] h-full ">
            <div className="panel">
                {/* Modal Editing Zone */}
                <div className="flex-[30%] flex flex-col justify-start items-start dosticky scrollable-sticky">
                    <AppearanceStep />
                    <ContentStep />
                    <TargetingRulesStep />
                    <SettingsAndCodeStep />
                </div>
                {/* Modal Preview Zone */}
                <div className={`dosticky preview-outer scrollbar-style-1 bold-scroll flex-[70%] flex self-start min-h-[96vh] justify-center relative rounded-lg overflow-y-scroll bg-gray-50`}>
                    <div className="preview-inner" style={{ position: 'absolute', top: 0, width: '100%' }}>
                        <ModalLoader name={selectedModalName} />
                    </div>
                </div>
            </div>
        </div>
    )
}