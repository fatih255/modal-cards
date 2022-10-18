
import { SecurityCodeModal } from "components/modals";
import { PARAM_REDUX_MERGE_STATE } from 'addon-redux'
import { ModalInitialState } from "redux/slices/modal";
import { getModalContants } from "lib/modalConstants";
import { ModalAlias } from '../components/modals'
import ModalLoader, { ModalLoaderProps } from "components/ModalLoader";


const selectedModalConstants = getModalContants(ModalAlias.SecurityCodeModal)
const initialState = {
    modal: {
        ...ModalInitialState,
        contents: selectedModalConstants.contents,
        layout: { ...ModalInitialState.layout, ...selectedModalConstants.layout },
        selectedModalName: "SecurityCodeModal",
    }
}

export default {
    title: "Modals",
    component: ModalLoader,
    parameters: {
        [PARAM_REDUX_MERGE_STATE]: JSON.stringify(initialState)
    },
    argTypes: {
        selectedModalName: {
            options: [...Object.values(ModalAlias)],
            control: { type: 'select' }, // Automatically inferred when 'options' is defined

        }
    }
};

export const Modals = (args: ModalLoaderProps) => <ModalLoader {...args} />

Modals.args = {
    selectedModalName: 'SecurityCodeModal',
    
};
