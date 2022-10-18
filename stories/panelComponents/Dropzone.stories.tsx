import { DropzoneProps, default as Component } from "components/modalComponents/Dropzone";

export default {
    title: "Panel Components",
    component: Component
};

export const Dropzone = (args: DropzoneProps) => <Component {...args} />

Dropzone.args = {
    uploadFor: 'image'
}