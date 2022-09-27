import React from 'react'
import { useEffectOneTime } from '../../lib/hooks'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { updateModalContent } from '../../redux/slices/modal'
import ContentInput from '../ContentInput'
import NumberItem from '../NumberItem'

type Props = {}

export default function ContentStep({ }: Props) {

    const dispatch = useAppDispatch()
    const { ModalProps: { content } } = useAppSelector(state => state.modal)

    const onchangeHandler = (ContentIndex: string | number, ContentText: string) => {
        dispatch(updateModalContent({ ContentIndex, ContentText }))
    }

    return (
        <div data-step="3" className="flex flex-col w-full ">
            {/* Step-3 ---Content */}
            <NumberItem value="3 Content" />
            <label className="!mt-0">Edit your content</label>
            {content && content.map((text, index) => <ContentInput onChange={async (value) => onchangeHandler(index, value)} key={`content-${index}`} text={text} />)}

        </div>
    )
}
