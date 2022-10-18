import { CheckBoxButtonProps, default as Component } from "components/panelComponents/CheckBoxButton";

//icons
import DesktopIcon from 'icons/desktop.svg'
import MobileIcon from 'icons/mobile.svg'


export default {
    title: "Panel Components",
    component: Component
};

export const CheckBoxButton = (args: CheckBoxButtonProps) => <Component {...args} />

CheckBoxButton.args = {
    items: [
        { checked: false, text: "Desktop", value: "desktop", icon: <DesktopIcon fill="#999999" /> },
        { checked: false, text: "Mobile", value: "mobile", icon: <MobileIcon fill="#999999" /> },
    ]
};