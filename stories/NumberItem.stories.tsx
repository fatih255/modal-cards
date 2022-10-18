
import { NumberItemProps, default as Component } from "components/NumberItem";


export default {
    title: "Modal Components",
    component: Component
};

export const NumberItem = (args: NumberItemProps) => <Component {...args} />

NumberItem.args = {
    value: "2 Appearance (Size, colors, logo)",
    bracketsClassName: "font-normal",
    className: ''

};