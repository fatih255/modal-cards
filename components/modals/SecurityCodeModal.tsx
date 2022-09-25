import React from 'react'
import SecurityCodeIcon from 'svgs/modal/security-code.svg'
import Button from '../Button'
import Input from '../Input'
import WithModalLayout from '../WithModalLayout'

type Props = {}

/*
class information:
        .theme-color =  It allows us to change the color of these elements when colors change on the panel
        .content-[1,2,3, ... , n]   =  It allows us to edit the text of elements in the content field (change with document selectors)
*/

export default function SecurityCodeModal({ }: Props) {

    return (
        <WithModalLayout>
            <div className="no-w-full relative w-[90px] h-[90px] rounded-full flex justify-center items-center ">
                <SecurityCodeIcon className="theme-color  relative z-20" />
                <div className="absolute top-0 left-0 w-full h-full bg-primary rounded-full z-10 theme-color"></div>
            </div>
            <h1 className="title content-1">Security Code</h1>
            <p className="description content-2">This code expires in 24 hours</p>
            <Input className="content-3" placeholder="Code" />
            <div className="flex gap-3 w-full items-stretch modal-buttons">
                <Button className="theme-color content-4" size="modal-default" text="Cancel" />
                <Button className="content-5" theme='light-bordered' size="modal-default" text="Continue" />
            </div>
        </WithModalLayout>
    )
}
