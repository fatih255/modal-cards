import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'

import { useAppSelector } from '../../../redux/hooks'
import { BalloonImageWidgetType } from '../../../types/widget'

const { width, height, bgColor, imageName } = useAppSelector(state => state.balloon_image_widget)

const Image = dynamic(() => import(`svgs/${imageName}`), {
    suspense: true,
})

export default function BalloonImage({ width, height, bgColor, imageName }: BalloonImageWidgetType) {
    return (
        <div className={`relative w-[${width}] h-[${height}] rounded-full flex justify-center items-center`}>
            <div>
                <Suspense>
                    <Image />
                </Suspense>
            </div>
            <div className={`absolute top-0 left-0 w-full h-full ${bgColor} rounded-full z-10`}></div>
        </div>
    )
}