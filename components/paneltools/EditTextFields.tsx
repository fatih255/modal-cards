import React from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { updateModalContentText, updateModalLinkURL, updateModalPostURL } from 'redux/slices/modal'
import { shallowEqual } from 'react-redux'
import { AiOutlineLink } from 'react-icons/ai'
import { BsSignpost } from 'react-icons/bs'

//panel components
import { InputText } from 'components/panelComponents'
import { linkParser, LinkParserType } from 'lib/utils'
import InputLink from 'components/panelComponents/InputLink'




export default function EditTextFields() {

    const dispatch = useAppDispatch()
    const texts = useAppSelector(state => state.modal.contents.texts, shallowEqual)

    const onContentTextChangeHandler = (ContentIndex: string | number, ContentText: string) => {
        dispatch(updateModalContentText({ ContentIndex, ContentText }))
    }

    const onLinkChangeHandler = (ContentIndex: string | number, LinkURL: string) => {
        dispatch(updateModalLinkURL({ ContentIndex, LinkURL }))
    }

    const onPostURLChangeHandler = (ContentIndex: string | number, PostURL: string) => {
        dispatch(updateModalPostURL({ ContentIndex, PostURL }))
    }
    return (
        <>
            {
                (texts as LinkParserType).map((text, index: string | number) =>
                (
                    <React.Fragment key={`text-content-${index}`}>
                        <InputText onChange={async (value) => onContentTextChangeHandler(index, value)}
                            text={typeof text !== "string" ? text.text : text as string} />
                        {
                            typeof text === "object" &&
                            <>
                                {
                                    typeof text.linkURL === "string" && <InputLink iconName="AiOutlineLink" onChange={(value) => onLinkChangeHandler(index, value)} />
                                }
                                {
                                    typeof text.postURL === "string" && <InputLink iconName="BsSignpost" onChange={(value) => onPostURLChangeHandler(index, value)} />
                                }
                            </>
                        }

                    </React.Fragment>
                ))
            }
        </>
    )
}
