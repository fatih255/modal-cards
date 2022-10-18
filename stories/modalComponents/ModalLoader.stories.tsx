
import { ModalLoaderProps, default as Component } from "components/modalComponents/ModalLoader";
import { ModalAlias } from "components/modals";


export default {
    title: "Modal Components",
    component: Component,
    argTypes: {
        selectedModalName: {
            options: [...Object.values(ModalAlias)],
            control: { type: 'select' }
        }
    }
};

export const ModalLoader = (args: ModalLoaderProps) => <Component {...args} />

ModalLoader.args = {
    selectedModalName: 'SecurityCodeModal',
};