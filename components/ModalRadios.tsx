import React from 'react'
import { ModalType } from 'redux/slices/modal'
import cn from 'classnames'

type Props = {
    items?: ModalType['contents']['radios']
    colors: ModalType['layout']['colors']
    returnedValue: (data: number) => {}
}

export default function ModalRadios({ items, colors, returnedValue }: Props) {

    const selectHandler = (value: number) => {
        returnedValue(value)

    }

    return (
        <div className="flex gap-8 flex-col justify-center items-start modal-radio-container">
            {
                items && items.map(({ title, description, selected }, index) =>
                    <div key={`radio-${index}`} onClick={() => selectHandler(index)} className={cn({ 'opacity-[.63]': !selected }, 'trans-300 radio-item cursor-pointer hover:opacity-100 group  flex gap-[10.5px] justify-center items-center')}>
                        <div className={cn({ 'selected': selected }, ` ${colors.bg} radio `)}>
                            <div className={`inset-0 w-full h-full `}>
                                <div className={cn({ 'scale-[.4] ': selected }, ' w-full h-full trans-400 inset-0 m-auto absolute bg-white rounded-full')}></div>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-[10px] -translate-y-1">
                            <label className="!text-lg leading-[21.78px] font-medium m-none h-[22px] cursor-pointer ">{title}</label>
                            <p className="text-sm text-[#717791] leading-[16.94px]">{description}</p>
                        </div>
                    </div>
                )
            }

        </div>
    )
}