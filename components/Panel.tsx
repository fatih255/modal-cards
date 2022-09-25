import React, { useEffect, useRef } from 'react'
import { colorSelectPalette } from '../lib/contants'
import { useChanges, useEffectOneTime } from '../lib/hooks'
import { scrollStep } from '../lib/utils'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { updateLayoutProps } from '../redux/slices/modal'
import ColorSelect from './ColorSelect'
import ContentInput from './ContentInput'
import Dropzone from './Dropzone'
import ModalLoader from './ModalLoader'
import NumberItem from './NumberItem'
import PositionSelect from './PositionSelect'
import RadioButton from './RadioButton'
import { AppearanceStep } from './steps'
import ContentStep from './steps/ContentStep'

//modals


type Props = {

}

export default function Panel({ }: Props) {


    const { selectedModalName } = useAppSelector(state => state.modal)

    //when selectedmodal first render props scrolling
    useEffectOneTime(() => {
        scrollStep('2')
    })

    // this hook allows us to show on the screen when there is a change on the layout props
    useChanges()

    return (
        <div data-step="2" className="pt-[2vh] min-h-[96vh]">
            <div className="panel ">
                {/* Modal Editing Zone */}
                <div className="flex-[30%] flex flex-col justify-start items-start">
                    <AppearanceStep />
                    <div className="h-24" />
                    <ContentStep />
                </div>
                {/* Modal Preview Zone */}
                <div className="flex-[70%] flex self-start justify-center relative min-h-[96vh] h-full">
                    <ModalLoader name={selectedModalName} />
                </div>
            </div>
        </div>
    )
}