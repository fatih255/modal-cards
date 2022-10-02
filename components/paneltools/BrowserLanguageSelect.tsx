import React from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { settingStatus, updateSettings } from 'redux/slices/modal'


//panel components
import { InputSelect, Switch } from 'components/panelComponents'
import { shallowEqual } from 'react-redux'

type Props = {}

export default function BrowserLanguageSelect({ }: Props) {


    const { browserLanguages, activeSettings } = useAppSelector(state => Object(
        {
            browserLanguages: state.modal.settings.browserLanguages,
            activeSettings: state.modal.activedSettings
        }), shallowEqual)

    const dispatch = useAppDispatch()


    return (
        <div className="mt-[30px]">
            <Switch
                text="Browser Language"
                fieldName="browserLanguages"
                returnedValue={({ fieldName }) => dispatch(settingStatus(fieldName))}
                activeDefault={activeSettings.includes("browserLanguages")}
            >
                <InputSelect
                    onChange={(data) => dispatch(updateSettings({ name: "browserLanguages", value: data }))}
                    selectAllText="All Languages"
                    items={
                        [
                            { checked: browserLanguages.includes('english'), text: "English", value: "english" },
                            { checked: browserLanguages.includes('french'), text: "French", value: "french" },
                            { checked: browserLanguages.includes('german'), text: "German", value: "german" },
                            { checked: browserLanguages.includes('polish'), text: "Polish", value: "polish" },
                            { checked: browserLanguages.includes('dutch'), text: "Dutch", value: "dutch" },
                            { checked: browserLanguages.includes('finnish'), text: "Finnish", value: "finnish" },

                            //extra languages
                            { checked: browserLanguages.includes('korea'), text: "Korea", value: "korea" },
                            { checked: browserLanguages.includes('tamil'), text: "Tamil", value: "tamil" },
                            { checked: browserLanguages.includes('india'), text: "India", value: "india" },
                            { checked: browserLanguages.includes('italy'), text: "Italy", value: "italy" },
                            { checked: browserLanguages.includes('italian'), text: "Italian", value: "italian" },
                            { checked: browserLanguages.includes('urdu'), text: "Urdu", value: "urdu" },
                        ]
                    } />
            </Switch>
        </div>
    )
}