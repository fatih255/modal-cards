import React from 'react'
import cn from 'classnames'
import { useAppSelector } from 'redux/hooks';
import { shallowEqual } from 'react-redux';


export default function ModalLogo() {


    const { logo, colors, uploaded } = useAppSelector(state => Object({
        logo: state.modal.contents.logo,
        colors: state.modal.layout.colors,
        uploaded: state.modal.uploaded
    }), shallowEqual)


    return (
        <>
            {
                typeof (logo) === "string" && logo !== '' && <>

                    {
                        /* uploaded logo template */
                        uploaded.logo && <img className={`logo z-20 max-w-[60%] self-center  max-h-1/6 aspect-square ${colors.bg}`} src={`${logo}`} />
                    }
                    {
                        /* not uploaded logo template */
                        !uploaded.logo && <div className={cn('w-[27%] relative rounded-full flex justify-center items-center overflow-hidden ')}>
                            <img className={`logo z-20 p-[30%] aspect-square ${colors.bg}`} src={`${logo}`} />
                            <div className={`balloon absolute inset-0 rounded-full z-10 ${colors.bg} `}></div>
                        </div>
                    }
                </>


            }
        </>
    )
}