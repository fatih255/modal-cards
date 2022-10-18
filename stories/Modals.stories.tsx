
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
    title: "SecurityCodeModal",
    component: SecurityCodeModal,
    parameters: {
        [PARAM_REDUX_MERGE_STATE]: JSON.stringify(initialState)
    },
    argTypes: {
        selectedModalName: {
            options: [...Object.values(ModalAlias).filter(value => typeof value === 'string')],
            control: { type: 'select' }, // Automatically inferred when 'options' is defined

        }
    }
};

export const Modals = (args: ModalLoaderProps) => <ModalLoader {...args} />

Modals.args = {
    selectedModalName: 'SecurityCodeModal',
    
};
