
import { InputTextModalProps, default as Component } from "components/InputTextModal";
import WithModalLayout from "components/WithModalLayout";

export default {
    title: "Modal Components",
    component: Component
};

export const InputTextModal = (args: InputTextModalProps) => <Component {...args} />

InputTextModal.args = {
    placeholder: "Placeholder...",

};