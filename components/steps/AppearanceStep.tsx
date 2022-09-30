import React from 'react'
import NumberItem from 'components/NumberItem'
import RadioButton from 'components/RadioButton'
import PositionSelect from 'components/PositionSelect'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { updateLayout } from 'redux/slices/modal'
import ColorSelect from 'components/ColorSelect'
import Dropzone from 'components/Dropzone'

type Props = {}


function AppearanceStep({ }: Props) {

    const dispatch = useAppDispatch()
    const logo = useAppSelector(state => state.modal.layout.logo)
    return (
        <>
            <div className="dosticky">
                <NumberItem value="2 Appearance (Size, colors, logo)" />
            </div>
            {/* Select Sizes */}
            <label className="mt-2">Size</label>
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
            {/* Select Colors  -- colorPaletteSize generate colors like modal-color-bg/text-[1,2,3, .... n] colors take from  colorpalettegenerator on modal.scss file */}
            <label>Colors</label>
            <ColorSelect colorPaletteSize={5} />
            {/* Upload Logo */}
            {
                // if selected popup modal is not support that adding logo it doesn't show upload logo area
                // if modalConstants have value named logo user can upload own logo to modal popup
                logo && <>
                    <label>Upload Logo</label>
                    <Dropzone returnedValue={(value) => dispatch(updateLayout({ name: 'logo', value: { uploaded: value } }))} />
                </>
            }
        </>
    )
}

export default React.memo(AppearanceStep)