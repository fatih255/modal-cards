import React from 'react';
import cn from 'classnames';

type Props = {
    text: string
    theme?: 'light' | 'primary' | 'primary-light' | 'light-bordered'
    size?: 'small' | 'large' | 'medium' | 'modal-default'
    shadow?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}


export default function Button({ text, theme = 'primary', size = "small", shadow = false, onClick }: Props) {
    return (
        <button onClick={onClick} className={`${getClass(theme, size, shadow)} hover:bg-opacity-80 transition-all duration-300  font-inter self-center`}>
            {text}
        </button>
    )
}

const getClass = (theme: Props['theme'], size: Props['size'], shadow: boolean) => {
    let themeClass: string = '';
    switch (theme) {
        case 'primary':
            themeClass = 'bg-primary text-white hover:bg-opacity-85 '
            break;
        case 'primary-light':
            themeClass = 'bg-white text-primary bg-white  border border-gray-100 hover:border-gray-200 hover:!text-white hover:!bg-opacity-100 hover:!bg-primary hover:!border-primary hover:shadow-lg'
            break;
        case 'light':
            themeClass = 'bg-white text-black bg-primary  border border-gray-100 hover:border-gray-200 '
            break;
        case 'light-bordered':
            themeClass = 'bg-white text-black bg-primary  outline outline-[1px] outline-gray-200 hover:outline-gray-400 border-none'
            break;
    }
    switch (size) {
        case 'small':
            themeClass += ' px-5 py-1 rounded-xl'
            break;
        case 'medium':
            themeClass += ' px-6 py-3 rounded-xl'
            break;
        case 'large':
            themeClass += ' px-7 py-4 rounded-xl'
            break;
        case 'modal-default':
            themeClass += ' px-7 py-[11px] rounded-lg'
            break;
    }

    if (shadow) themeClass += ' drop-shadow-primary '

    return themeClass
}