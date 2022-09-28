import React from 'react'
import CloseModalIcon from 'icons/modal/close-modal.svg'
import { layoutTypes } from 'types/layout'
import { useAppSelector } from 'redux/hooks'

export default function DefaultLayout({ children }: layoutTypes) {

    const { LayoutProps: { size, position, className } } = useAppSelector(state => state.modal)
    const closeModalHandler = () => {
        //close modal handler
    }

    return (
        <div id="layout" className={`default ${className}  
        ${size} 
        ${position}`}>
            <button className="no-w-full absolute top-0 right-0 hover:scale-110  trans-300 m-[6%]" onClick={closeModalHandler}>
                <CloseModalIcon className="svg-gray-600" />
            </button>
            {children}
        </div>
    )
}
