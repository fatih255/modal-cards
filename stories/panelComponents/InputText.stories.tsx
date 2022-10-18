import { InputTextProps, default as Component } from "components/panelComponents/InputText";

export default {
    title: "Panel Components",
    component: Component
};

export const InputText = (args: InputTextProps) => <Component {...args} />

InputText.args = {
    placeholder: "Your Webhook URL"
}