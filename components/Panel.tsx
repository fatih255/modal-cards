import React from 'react'
import { useEffectOneTime } from 'lib/hooks'
import { makeStickyContainer, scrollStep } from 'lib/utils'
import { useAppSelector } from 'redux/hooks'
import ModalLoader from './ModalLoader'


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
        makeStickyContainer('.dosticky', "white")
        scrollStep('2')
    })



    return (
        <div data-step="2" className="pt-[2vh] min-h-[96vh]">
            <div className="panel">
                {/* Modal Editing Zone */}
                <div className="flex-[30%] flex flex-col justify-start items-start dosticky scrollable-sticky">
                    <AppearanceStep />
                    <ContentStep />
                    <SettingsAndCodeStep />
                    <TargetingRulesStep />
                </div>
                {/* Modal Preview Zone */}
                <div className="dosticky flex-[70%] flex self-start justify-center relative min-h-[96vh] rounded-lg h-full bg-gray-50 ">
                    <ModalLoader name={selectedModalName} />
                </div>
            </div>
        </div>
    )
}