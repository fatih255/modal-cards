import React from 'react'
import CloseModalIcon from 'svgs/modal/close-modal.svg'
import { defaultLayoutType } from '../../../types/layout'
type Props = {
    children: JSX.Element | JSX.Element[]
    overrideClassName?: string
}

export default function DefaultLayout({ children, overrideClassName }: defaultLayoutType) {

    const closeModalHandler = () => {
        //close modal handler
    }
    return (
        <div className={`default  ${overrideClassName}`}>
            <button className="no-w-full absolute top-0 right-0 hover:scale-110  trans-300 m-[3.5%]" onClick={closeModalHandler}>
                <CloseModalIcon className="svg-gray-600" />
            </button>
            {children}
        </div>
    )
}