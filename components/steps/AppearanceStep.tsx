import React from 'react'
import NumberItem from '../NumberItem'
import RadioButton from '../RadioButton'
import PositionSelect from '../PositionSelect'
import { useAppDispatch } from '../../redux/hooks'
import { updateLayoutProps, updateModalProps } from '../../redux/slices/modal'
import { colorSelectPalette } from '../../lib/contants'
import ColorSelect from '../ColorSelect'
import Dropzone from '../Dropzone'
type Props = {}


 function AppearanceStep({ }: Props) {

    const dispatch = useAppDispatch()

    return (
        <>
            <NumberItem value="2 Appearance (Size, colors, logo)" />
            {/* Select Sizes */}
            <label className="!mt-0">Size</label>
            <RadioButton
                returnedValue={(value) => dispatch(updateLayoutProps({ name: 'size', value: value }))}
                options={
                    [
                        { text: "Small", value: "small" },
                        { text: "Medium", value: "medium" },
                        { text: "Large", value: "large" },
                    ]
                } />
            {/* Select Position */}
            <label>Position</label>
            <PositionSelect returnedValue={(value) => dispatch(updateLayoutProps({ name: 'position', value: value }))} />
            {/* Select Colors */}
            <label>Colors</label>
            <ColorSelect colors={colorSelectPalette} />
            {/* Upload Logo */}
            <label>Upload Logo</label>
            <Dropzone returnedValue={(value) => dispatch(updateModalProps({ name: 'image', value: value }))} />
        </>
    )
}

export default React.memo(AppearanceStep)