import React from 'react'
import CloseModalIcon from 'svgs/modal/close-modal.svg'
type Props = {
    children: JSX.Element
}

export default function DefaultLayout({ children }: Props) {

    const closeModalHandler =()=>{
        //close modal handler
    }
    return (
        <div className="default">
            <button onClick={closeModalHandler}>
                <CloseModalIcon />
            </button>
            {children}
        </div>
    )
}