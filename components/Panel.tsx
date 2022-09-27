import React from 'react'
import { useEffectOneTime } from 'lib/hooks'
import { scrollStep } from 'lib/utils'
import { useAppSelector } from 'redux/hooks'
import ModalLoader from './ModalLoader'


//steps
import { AppearanceStep } from './steps'
import ContentStep from './steps/ContentStep'
import SettingsAndCodeStep from './steps/SettingsAndCodeStep'



type Props = {

}

export default function Panel({ }: Props) {


    const { selectedModalName } = useAppSelector(state => state.modal)

    //when selectedmodal first render props scrolling
    useEffectOneTime(() => {

        scrollStep('2')
    })

    // this hook allows us to show on the screen when there is a change on the layout props


    return (
        <div data-step="2" className="pt-[2vh] min-h-[96vh]">
            <div className="panel ">
                {/* Modal Editing Zone */}
                <div className="flex-[30%] flex flex-col justify-start items-start">
                    <AppearanceStep />
                    <div className="h-24" />
                    <ContentStep />
                    <SettingsAndCodeStep />
                </div>
                {/* Modal Preview Zone */}
                <div className="flex-[70%] flex self-start justify-center relative min-h-[96vh] h-full">
                    <ModalLoader name={selectedModalName} />
                </div>
            </div>
        </div>
    )
}