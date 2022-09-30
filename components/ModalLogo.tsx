import React from 'react'
import cn from 'classnames'
import dynamic from 'next/dynamic';
import { useAppSelector } from 'redux/hooks';


type Props = {

}

export default function ModalLogo({ }: Props) {


    const { logo, colors } = useAppSelector(state => state.modal.layout)


    return (
        <>
            {
                /* if user upload png,jpeg or svg */
                logo.uploaded && <img className="w-[60%] h-[60%] self-center object-cover" src={logo.uploaded} />
            }
            {
                /* if user not upload yet own logo return default logo */
                !logo.uploaded && logo.default && <div className={cn('w-[27%] relative rounded-full flex justify-center items-center overflow-hidden ')}>
                    <img className={`logo z-20 p-[30%] aspect-square ${colors.bg}`} src={`icons/modal/${logo.default}`} />
                    <div className={`balloon absolute inset-0 rounded-full z-10 ${colors.bg} `}></div>
                </div>
            }

            {/* If the logo object is empty, it means that the logo with popup modal is not supported. And this component returns empty jsx. */}
        </>
    )
}