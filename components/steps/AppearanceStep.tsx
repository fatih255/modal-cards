import React, { useEffect, useRef } from 'react'
import NumberItem from 'components/NumberItem'

// Tools used by AppearanceStep
import {
  EditPosition,
  UploadLogo,
  ChangeModalSize,
  EditColor,
} from 'components/paneltools'

function AppearanceStep() {
  return (
    <>
      <div className='dosticky'>
        <NumberItem value='2 Appearance (Size, colors, logo)' />
      </div>
      <hr className='h-8 border-none ' />
      <label className='!mt-0'>Size</label> {/* Select Sizes */}
      <ChangeModalSize />
      <label>Position</label>
      <EditPosition /> {/* Select Position */}
      <label>Colors</label>
      <EditColor />
      <UploadLogo /> {/* Upload Logo */}
    </>
  )
}

export default React.memo(AppearanceStep)
