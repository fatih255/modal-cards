import React from 'react'
import UploadCloudIcon from 'svgs/upload-cloud.svg'
import NoImageIcon from 'svgs/no-image.svg'

type Props = {}

export default function Dropzone({ }: Props) {

    const uploadHandler = () => {
        // trigger file select
    }

    return (
        <div className="dropzone flex flex-col justify-center items-center gap-5 py-7 w-full bg-white  ">
            <div className="p-6 rounded-xl bg-primary bg-opacity-[0.1]">
                <NoImageIcon />
            </div>
            <div>
                <div className="flex flex-row flex-center child-font-inter text-sm leading-[18px] gap-1">
                    <UploadCloudIcon />
                    <span>Drop your image here or</span>
                    <button className="text-primary text-opacity-[0.82] hover:text-opacity-100 font-semibold underline underline-offset-2" onClick={uploadHandler}>upload</button>
                </div>
            </div>
        </div>
    )
}