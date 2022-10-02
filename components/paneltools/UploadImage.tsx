import React from 'react'
import { shallowEqual } from 'react-redux'
import { useAppSelector } from 'redux/hooks'

//panel components
import { Dropzone } from 'components/panelComponents'


type Props = {}

export default function UploadImage({ }: Props) {

    const image = useAppSelector(state => state.modal.contents.image, shallowEqual)

    return (
        <>
            {
                // if modalConstants have value named logo user can upload own logo to modal popup
                typeof (image) === "string" && <>
                    <label>Upload image</label>
                    <Dropzone uploadFor="image" />
                </>
            }
        </>
    )
}

