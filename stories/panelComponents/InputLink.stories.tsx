import { InputLinkProps, default as Component, InputLinkIcons } from "components/panelComponents/InputLink";

export default {
    title: "Panel Components",
    component: Component,
    argTypes: {
        iconName: {
            control: {
                options: [...Object.keys(InputLinkIcons)],
                type: "select"
            }
        }
    }
};

export const InputLink = (args: InputLinkProps) => <Component {...args} />


InputLink.args = {
    uploadFor: 'image',
    iconName: 'AiOutlineLink',
    placeholder: 'Paste Post Request URL'
}