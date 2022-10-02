import React from 'react'

type Props = {
    text?: string,
    placeholder?: string,
    onChange?: (value: string) => {}
}


function InputText({ text = '', placeholder = '', onChange }: Props) {

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e.target.value)
    }
    return (
        <input
            placeholder={placeholder}
            onChange={onChangeHandler}
            defaultValue={text}
            type="text"
            className="default-input"
        />

    )
}
export default React.memo(InputText)