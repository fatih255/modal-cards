import React from 'react'
import { useAppDispatch } from 'redux/hooks'
import { updateSettings } from 'redux/slices/modal'

//panel components
import { InputSelect } from 'components/panelComponents'

type Props = {}

export default function BrowserLanguageSelect({ }: Props) {

    const dispatch = useAppDispatch()


    return (
        <InputSelect
            onChange={(data) => dispatch(updateSettings({ name: "browserLanguages", value: data }))}
            selectAllText="All Languages"
            items={
                [
                    { text: "English", value: "english" },
                    { text: "French", value: "french" },
                    { text: "German", value: "german" },
                    { text: "Polish", value: "polish" },
                    { text: "Dutch", value: "dutch" },
                    { text: "Finnish", value: "finnish" },

                    //extra languages
                    { text: "Korea", value: "korea" },
                    { text: "Tamil", value: "tamil" },
                    { text: "India", value: "india" },
                    { text: "Italy", value: "italy" },
                    { text: "Italian", value: "italian" },
                    { text: "Urdu", value: "urdu" },
                ]
            } />
    )
}