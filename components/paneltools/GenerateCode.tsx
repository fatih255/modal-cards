import React, { useState } from 'react'
import cn from 'classnames';
import Button from 'components/Button'
import generateCode from 'lib/generateCode';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';


import InfoIcon from 'icons/info.svg'


type Props = {}

export default function GenerateCode({ }: Props) {



    const [codeString, setCodeString] = useState<string>('')

    const getCodeHandler = () => {
        setCodeString(generateCode())
    }
    const copyCodeHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        navigator.clipboard.writeText(codeString);
        const btnElement = e.target as HTMLButtonElement
        btnElement.innerText = "Copied Generated Code"
        btnElement.style.opacity = "0.8"
        setTimeout(() => {
            btnElement.innerText = "Copy the code"
            btnElement.style.opacity = "1"
        }, 4000)
    }
 
    return (
        <>
            <div className="mt-[50px] mb-[30px]">
                <Button onClick={getCodeHandler} size="large" shadow={true} text="Get your Code" />
            </div>
            <div className={cn({ "hidden": !(codeString.length > 0) }, " bg-[#333333] w-full rounded-lg border-[10px] border-b-[14px] border-[#333333]")}>
                <SyntaxHighlighter language="javascript" style={dark} customStyle={{ borderRadius: 8, height: 260, width: 'inherit' }}>
                    {codeString}
                </SyntaxHighlighter>
                <div className="h-[60px] flex justify-end items-end ">
                    <Button onClick={(e) => copyCodeHandler(e)} className="rounded-full py-1.5 !self-end" text="Copy the code" />
                </div>
            </div>
            <div className={cn({ "hidden": !(codeString.length > 0) }, "flex justify-start gap-2 items-start mt-[17px] w-[91%] ")}>
                <div className=" ">
                    <InfoIcon className="scale-[1.2] translate-y-[2px]" />
                </div>
                <p className="text-sm mt-0 leading-[16px]">
                    Copy and paste the embed code above just before the
                    closing {"</body>"} tag of your website template file.
                </p>
            </div>
        </>
    )
}