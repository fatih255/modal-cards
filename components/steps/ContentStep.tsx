import React, { useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { updateModalContentText } from '../../redux/slices/modal'
import ContentInput from '../ContentInput'
import NumberItem from '../NumberItem'
import ModalRadioButtonPanel from 'components/ModalRadioButtonPanel'

type Props = {}



export default function ContentStep({ }: Props) {

    const dispatch = useAppDispatch()


    const texts = useAppSelector(state => state.modal.contents.texts)

    const onContentTextChangeHandler = (ContentIndex: string | number, ContentText: string) => {
        dispatch(updateModalContentText({ ContentIndex, ContentText }))
    }

    return (
        <div data-step="3" className="flex flex-col w-full ">
            {/* Step-3 ---Content */}
            <NumberItem value="3 Content" />
            <label className="!mt-0">Edit your content</label>
            {texts && useMemo(() => texts.map((text, index) => <ContentInput onChange={async (value) => onContentTextChangeHandler(index, value)} key={`text-content-${index}`} text={text} />), [texts])}
            <ModalRadioButtonPanel />
        </div>
    )
}
