
import { ModalLoaderProps, default as Component } from "components/ModalLoader";
import { ModalAlias } from "components/modals";


export default {
    title: "Components",
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