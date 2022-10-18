import { InputText } from 'components/panelComponents'
import React from 'react'
import { useAppDispatch } from 'redux/hooks'
import { updateSettings } from 'redux/slices/modal'



export default function EditWebhookURL() {

    const dispatch = useAppDispatch()

    return (
        <>
            <span className="mb-2 font-poppins font-semibold text-lg tracking-[-3%] leading-[36px] ">
                Webhook to Send data
            </span>
            <span className="font-poppins text-sm">Enter youe Webhook URL</span>
            <p className=" mb-2 mt-[2px] font-poppins text-xs leading-[14px]">
                You can  create a simple one with <b className="font-semibold">make.com</b>
            </p>
            <InputText onChange={(data) => dispatch(updateSettings({ name: "webHookUrl", value: data }))} placeholder="Your Webhook URL" />
        </>
    )
}
