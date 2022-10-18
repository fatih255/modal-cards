import { TitleProps, default as Component } from "components/Title";

export default {
    title: "Components",
    component: Component,

};

export const Title = (args: TitleProps) => <Component {...args} />

Title.args = {
    children: "Title Example",
    className:''
};