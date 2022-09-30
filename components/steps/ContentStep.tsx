import React, { useMemo, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { ModalType, updateContents, updateModalContentText } from '../../redux/slices/modal'
import ContentInput from '../ContentInput'
import NumberItem from '../NumberItem'
import ModalRadioButtonPanel from 'components/ModalRadioButtonPanel'
import Dropzone from 'components/Dropzone'
import { shallowEqual } from 'react-redux'

type Props = {}



export default function ContentStep({ }: Props) {

    const dispatch = useAppDispatch()


    const { texts, image } = useAppSelector(state => Object({ texts: state.modal.contents.texts, image: state.modal.contents.image }), shallowEqual)


    const onContentTextChangeHandler = (ContentIndex: string | number, ContentText: string) => {
        dispatch(updateModalContentText({ ContentIndex, ContentText }))
    }

    return (
        <div data-step="3" className="flex flex-col w-full mt-6 ">
            {/* Step-3 ---Content */}
            <NumberItem value="3 Content" />
            <label className="!mt-0">Edit your content</label>

            {
                texts &&
                useMemo(() => texts.map((text: string, index: string | number) =>
                    <ContentInput onChange={async (value) => onContentTextChangeHandler(index, value)}
                        key={`text-content-${index}`} text={text} />), [texts])

            }

            <ModalRadioButtonPanel />

            {
                // if modalConstants have value named logo user can upload own logo to modal popup
                image && <>
                    <label>Upload image</label>
                    <Dropzone returnedValue={(value) => dispatch(updateContents({ name: 'image', value: value }))} />
                </>
            }
        </div>
    )
}
