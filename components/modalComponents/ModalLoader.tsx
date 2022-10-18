import React, { Suspense, useEffect } from "react";
import dynamic from "next/dynamic";
import { linkParser } from "lib/utils";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { ModalType, selectModal } from "redux/slices/modal";
import { ModalAlias } from "../modals";

export type ModalLoaderProps = {
    selectedModalName: ModalAlias
}
export type ModalProps = {
    contents: ModalType['contents'],
    layout: ModalType['layout']
}

function ModalLoader({ selectedModalName }: ModalLoaderProps) {


    const dispatch = useAppDispatch()
    const modalProps = useAppSelector(state => Object(
        {
            contents: {
                ...state.modal.contents,
                texts: linkParser(state.modal.contents.texts),
            },
            layout: state.modal.layout
        }
    ))


    useEffect(() => {
        dispatch(selectModal(selectedModalName))
    }, [selectedModalName])

    const SelectedModal = dynamic(() => import(`components/modals/${selectedModalName}`), { suspense: false, ssr: false });
    return selectedModalName ? <Suspense><SelectedModal {...modalProps} /></Suspense> : <></>
}

export default React.memo(ModalLoader)