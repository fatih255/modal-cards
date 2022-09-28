import React from 'react'
import NumberItem from 'components/NumberItem'
import RadioButton from 'components/RadioButton'
import PositionSelect from 'components/PositionSelect'
import { useAppDispatch } from 'redux/hooks'
import { updateLayout } from 'redux/slices/modal'
import { colorSelectPalette } from 'lib/contants'
import ColorSelect from 'components/ColorSelect'
import Dropzone from 'components/Dropzone'

type Props = {}


function AppearanceStep({ }: Props) {

    const dispatch = useAppDispatch()

    return (
        <>
            <NumberItem value="2 Appearance (Size, colors, logo)" />
            {/* Select Sizes */}
            <label className="!mt-0">Size</label>
            <RadioButton
                returnedValue={(value) => dispatch(updateLayout({ name: 'size', value: value }))}
                options={
                    [
                        { text: "Small", value: "small" },
                        { text: "Medium", value: "medium" },
                        { text: "Large", value: "large" },
                    ]
                } />
            {/* Select Position */}
            <label>Position</label>
            <PositionSelect returnedValue={(value) => dispatch(updateLayout({ name: 'position', value: value }))} />
            {/* Select Colors */}
            <label>Colors</label>
            <ColorSelect colors={colorSelectPalette} />
            {/* Upload Logo */}
            <label>Upload Logo</label>
            <Dropzone returnedValue={(value) => dispatch(updateLayout({ name: 'logo', value: value }))} />
        </>
    )
}

export default React.memo(AppearanceStep)