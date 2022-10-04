import React from 'react'

type Props = {
    text?: string,
    placeholder?: string,
    onChange?: (value: string) => {}
    type?: string
    max?: number
}


function InputText({ text = '', placeholder = '', onChange, type = "text", max }: Props) {


    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (max) {
            if (Number(e.target.value) > Number(max)) {
                console.log("here")
                e.target.value = max.toString()
            }
        }
        onChange && onChange(e.target.value)

    }

    return (
        <input
            max={max}
            placeholder={placeholder}
            onChange={onChangeHandler}
            defaultValue={text}
            type={type}
            className="default-input"
        />

    )
}
export default React.memo(InputText)