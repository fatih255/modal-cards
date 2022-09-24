import React from 'react'

import SecurityCodeIcon from 'svgs/modal/security-code.svg'
import { useAppSelector } from '../../../redux/hooks'
import { BalloonImageWidgetType } from '../../../types/widget'

const { width, height, bgColor, image } = useAppSelector(state => state.balloon_image_widget)

export default function BalloonImage({ width, height, bgColor, image }: BalloonImageWidgetType) {
    return (
        <div className={`relative w-[${width}] h-[${height}] rounded-full flex justify-center items-center`}>
            <div>
                {image}
            </div>
            <div className={`absolute top-0 left-0 w-full h-full ${bgColor} rounded-full z-10`}></div>
        </div>
    )
}