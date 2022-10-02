import React from 'react'
import NumberItem from 'components/NumberItem'
import { InputText, CheckBoxList } from 'components/panelComponents'
import Button from 'components/Button'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import InfoIcon from 'icons/info.svg'
type Props = {}

export default function SettingsAndCodeStep({ }: Props) {

    const codeString = '<script type="text/javascript" src="https://popupsmart.com/freechat.js"></script><script> window.start.init({ title: "Hi there :v:", message: "How may we help you? Just send us a message now to get assistance.", color: "#FA764F", position: "right", placeholder: "Enter your message", withText: "Write with", viaWhatsapp: "Or write us directly via Whatsapp", gty: "Go to your", awu: "and write us", connect: "Connect now", button: "Write us", device: "everywhere", services: [{"name":"whatsapp","content":null}]})</script>'

    return (
        <>
            <div className="mt-[70px]" />
            <div className="dosticky">
                <NumberItem value="5 Settings and Code" />
            </div>
            <div className="mb-4" />
            <span className="mb-2 font-poppins font-semibold text-lg tracking-[-3%] leading-[36px] ">
                Webhook to Send data
            </span>
            <span className="font-poppins text-sm">Enter youe Webhook URL</span>
            <p className=" mb-2 mt-[2px] font-poppins text-xs leading-[14px]">You can  create a simple one with <b className="font-semibold">make.com</b></p>
            <InputText placeholder="Your Webhook URL" />
            <div>
                <CheckBoxList items={
                    [
                        { text: "Send form submissions", value: "send-from-submissions" },
                        { text: "Send click data", value: "send-click-data" },
                    ]
                } />
            </div>
            <div className="mt-[50px] mb-[30px]">
                <Button size="large" shadow={true} text="Get your Code" />
            </div>
            <div className="bg-[#333333] rounded-lg border-[10px] border-b-[14px] border-[#333333]">
                <SyntaxHighlighter language="javascript" style={dark} customStyle={{ borderRadius: 8, height: 260, width: '100%' }}>
                    {codeString}
                </SyntaxHighlighter>
                <div className="h-[60px] flex justify-end items-end ">
                    <Button className="rounded-full py-1.5 !self-end	" text="Copy the code" />
                </div>
            </div>
            <div className="flex justify-start gap-2 items-start mt-[17px] w-[91%] ">
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
