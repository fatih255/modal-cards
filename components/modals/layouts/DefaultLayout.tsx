import React  from 'react'
import CloseModalIcon from 'icons/modal/close-modal.svg'
import { layoutTypes } from 'types/layout'
import { useAppSelector } from 'redux/hooks'
import { shallowEqual } from 'react-redux'



export default function DefaultLayout({ children }: layoutTypes) {

    const { size, position, className } = useAppSelector(state => state.modal.layout, shallowEqual)

    const closeModalHandler = () => {
        const modalElement = document.getElementById("layout")
        if (!modalElement) return
        modalElement.classList.remove('open');
        modalElement.classList.add('close');
    }


    return (
        <div id="layout" className={`default ${className} ${size} ${position}`}>
            <button className="close-modal-action no-w-full absolute top-0 right-0 hover:scale-110  trans-300 m-[6%]" onClick={closeModalHandler}>
                <CloseModalIcon className="svg-gray-600" />
            </button>
            {children}
        </div>
    )
}

