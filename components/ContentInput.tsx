import React, { useMemo } from 'react'

type Props = {
    text?: string,
    placeholder?: string,
    onChange?: (value: string) => {}
}


function ContentInput({ text = '', placeholder = '', onChange }: Props) {

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e.target.value)
    }
    return (
        <input
            placeholder={placeholder}
            onChange={onChangeHandler}
            defaultValue={useMemo(() => text, [text])}
            type="text"
            className="default-input"
        />

    )
}
export default React.memo(ContentInput)