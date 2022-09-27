import React, { useRef } from 'react'
import UploadCloudIcon from 'icons/upload-cloud.svg'
import NoImageIcon from 'icons/no-image.svg'
import { useDropzone } from 'react-dropzone'
import { AiOutlineFileExcel, AiOutlineFileAdd } from 'react-icons/ai'
import { useEffectOneTime } from 'lib/hooks'
import cn from 'classnames'


type Props = {
    returnedValue: (data: string) => {}
}

export default function Dropzone({ returnedValue }: Props) {

    const previewImageRef = useRef<HTMLImageElement | null>(null)
    const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
        onDropAccepted: (acceptedFiles) => {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                // convert image file to base64 string
                if (previewImageRef.current) {
                    previewImageRef.current.src = reader.result as string;
                    previewImageRef.current.style.display = "block"
                    returnedValue(reader.result as string)
                }
            }, false);

            if (acceptedFiles[0]) {
                reader.readAsDataURL(acceptedFiles[0]);
            }
        },
        accept: {
            'image/jpeg': [],
            'image/png': [],
            'image/svg+xml': []
        },
    })

    const DropzoneContainerRef = useRef<HTMLDivElement | null>(null)
    useEffectOneTime(() => {
        if (DropzoneContainerRef.current) {
            const { height } = DropzoneContainerRef.current.getBoundingClientRect();
            DropzoneContainerRef.current.style.minHeight = height + "px"
        }
    })

    return (
        <div {...getRootProps()} ref={DropzoneContainerRef} className={cn({ 'dropzone-activedrag': isDragActive }, 'dropzone flex flex-col justify-center items-center gap-5 py-7 w-full bg-white')} >
            <input {...getInputProps()} />
            {
                isDragActive &&
                <div className=" child-font-inter text-sm font-sm flex flex-col justify-center gap-4 items-center pointer-events-none">
                    {
                        isDragAccept &&
                        <>
                            <div className="p-6 rounded-xl bg-primary bg-opacity-[0.1]">
                                <AiOutlineFileAdd className="text-primary w-[30px] h-[30px]" />
                            </div>
                            <span>Drop the files here ...</span>
                        </>
                    }
                    {
                        isDragReject &&
                        <>
                            <div className="p-6 rounded-xl bg-primary bg-opacity-[0.1]">
                                <AiOutlineFileExcel className="text-primary w-[30px] h-[30px]" />
                            </div>
                            <span>File Type Not Supported ...</span>
                        </>
                    }
                </div>
            }
            {
                !isDragActive &&
                <>
                    <div className="relative p-6 rounded-xl bg-primary bg-opacity-[0.1]">
                        <img ref={previewImageRef} className="rounded-xl bg-white hidden top-0 left-0 absolute w-[76px] h-[76px]" />
                        <NoImageIcon />
                    </div>
                    <div>
                        <div className="flex flex-row flex-center child-font-inter text-sm leading-[18px] gap-1">
                            <UploadCloudIcon />
                            <span>Drop your image here or</span>
                            <button className="text-primary text-opacity-[0.82] hover:text-opacity-100 font-semibold underline underline-offset-2">upload</button>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}