import React from 'react'
import NumberItem from '../NumberItem'
import RadioButton from '../RadioButton'
import PositionSelect from '../PositionSelect'
import { useAppDispatch } from '../../redux/hooks'
import { updateLayoutProps } from '../../redux/slices/modal'
import { colorSelectPalette } from '../../lib/contants'
import ColorSelect from '../ColorSelect'
import Dropzone from '../Dropzone'
type Props = {}


export default function AppearanceStep({ }: Props) {

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
                        { text: "Small", value: "max-w-[500px] max-h-[500px]" },
                        { text: "Medium", value: "max-w-[600px] max-h-[600px]" },
                        { text: "Large", value: "max-w-[700px] max-h-[700px]" },
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
            <Dropzone />
        </>
    )
}