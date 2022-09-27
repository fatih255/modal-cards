import React from 'react'
import CloseModalIcon from 'icons/modal/close-modal.svg'
import { defaultLayoutType } from 'types/layout'
import { useAppSelector } from 'redux/hooks'


export default function DefaultLayout({ children }: defaultLayoutType) {

    const { LayoutProps: { size, position } } = useAppSelector(state => state.modal)
    const closeModalHandler = () => {
        //close modal handler
    }

    return (
        <div id="layout" className={`default w-full h-full absolute 
        ${size} 
        ${position}`}>
            <button className="no-w-full absolute top-0 right-0 hover:scale-110  trans-300 m-[6%]" onClick={closeModalHandler}>
                <CloseModalIcon className="svg-gray-600" />
            </button>
            {children}
        </div>
    )
}
