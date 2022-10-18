
import { ButtonProps, default as Component } from "components/Button";


export default {
    title: "Components",
    component: Component,
    argTypes: { onClick: { action: 'clicked' } },
};

export const Button = (args: ButtonProps) => <Component {...args} />

Button.args = {
    text: 'Button',
    theme: "primary",
    size: "medium",
    shadow: false,
    className: "mt-4",
};