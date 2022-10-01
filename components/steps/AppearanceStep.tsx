import React from 'react'
import NumberItem from 'components/NumberItem'


// Tools used by this Step
import { UploadLogo, PositionSelect, ColorPalette, ChangeModalSize } from 'components/paneltools'


type Props = {}


function AppearanceStep({ }: Props) {

    return (
        <>
            <div className="dosticky">
                <NumberItem value="2 Appearance (Size, colors, logo)" />
            </div>
            <label className="mt-2">Size</label>    {/* Select Sizes */}
            <ChangeModalSize />
            <label>Position</label>
            <PositionSelect />                      {/* Select Position */}
            <label>Colors</label>
            <ColorPalette colorPaletteSize={5} />
            <UploadLogo />                          {/* Upload Logo */}
        </>
    )
}

export default React.memo(AppearanceStep)