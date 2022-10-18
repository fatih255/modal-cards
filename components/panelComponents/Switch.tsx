import React, {  useState } from 'react'
import cn from 'classnames'
import { ModalType } from 'redux/slices/modal'

type Props = {
    text: string
    className?: string
    children?: JSX.Element | JSX.Element[] | undefined
    returnedValue?: ({ fieldName, value = false }: { fieldName: keyof ModalType['settings'], value: boolean }) => void
    fieldName?: keyof ModalType['settings']
    activeDefault?: boolean | null

}



export default function Switch({ text, className = '', children, fieldName, returnedValue, activeDefault = null }: Props) {


    const [active, setActive] = useState<boolean | null>(activeDefault)

    const onClickHandler = () => {

        if (!active === true) {
            fieldName && returnedValue && returnedValue({ fieldName: fieldName, value: true })

        }
        if (!active === false) {
            fieldName && returnedValue && returnedValue({ fieldName: fieldName, value: false })
        }
        setActive(!active)
    }


    return (
        <div>
            <div className={`flex w-full justify-between items-center mb-[15px] mt-[30px] ${className} `}>
                <label className={cn({ "opacity-50": !active }, "h-[18px] disa !font-poppins self-start !m-0 leading-[18px] tracking-[-3%] font-semibold")}>{text}</label>
                <div onClick={onClickHandler} className={cn({ 'bg-opacity-40 hover:bg-opacity-60': !active }, "cursor-pointer hover-ring-high  relative bg-primary rounded-[160px]  w-[33px] h-[18px] overflow-hidden")}>
                    <div className="absolute w-full h-full border-[3px] trans-300 border-opacity-0 border-primary " >
                        <div className={cn({ 'actived-switch': active }, 'right-0 trans-300 ease-linear absolute bg-white w-3 h-3 inset-y-0  rounded-full')} />
                    </div>
                </div>
            </div>
            {
                children && (
                    <div className={cn({ "cursor-not-allowed": !active })}>
                        <div className={cn({ "pointer-events-none select-none opacity-60": !active })}>
                            {children}
                        </div>
                    </div>
                )
            }
        </div>
    )
}