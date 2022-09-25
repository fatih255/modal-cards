import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useEffectOneTime } from '../../lib/hooks'
import { useAppSelector } from '../../redux/hooks'
import ContentInput from '../ContentInput'
import NumberItem from '../NumberItem'

type Props = {}

export default function ContentStep({ }: Props) {

    const { ModalProps: { content } } = useAppSelector(state => state.modal)


    return (
        <div data-step="3" className="flex flex-col w-full ">
            {/* Step-3 ---Content */}
            <NumberItem value="3 Content" />
            <label className="!mt-0">Edit your content</label>
            {content && content.map((text, index) => <ContentInput key={`content-${index + 1}`} contentClass={`content-${index + 1}`} text={text} />)}

        </div>
    )
}
