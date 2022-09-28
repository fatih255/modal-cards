import React from 'react'
import cn from 'classnames'


type Props = {
    logo: string | null,
    ifNotLogoJSX?: JSX.Element
}

export default function ModalLogo({ logo, ifNotLogoJSX }: Props) {
    return (
        <>
            {logo && <img className="w-[60%] h-[60%] object-cover" src={logo} />}

            {
                !logo && ifNotLogoJSX && <div className={cn('w-[60%] relative  flex justify-center items-center overflow-hidden ')}>
                    {ifNotLogoJSX}
                </div>
            }

            {!logo && !ifNotLogoJSX && <></>}

        </>
    )
}