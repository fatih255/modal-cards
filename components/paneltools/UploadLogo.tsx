import React from 'react'
import { shallowEqual } from 'react-redux'
import { useAppSelector } from 'redux/hooks'
import Dropzone from 'components/Dropzone'


type Props = {}

export default function UploadLogo({ }: Props) {

    const logo = useAppSelector(state => state.modal.contents.logo, shallowEqual)

    return (
        <>
            {
                // if modalConstants have value named logo user can upload own logo to modal popup
                typeof (logo) === "string" && <>
                    <label>Upload logo</label>
                    <Dropzone uploadFor="logo" />
                </>
            }
        </>
    )
}

