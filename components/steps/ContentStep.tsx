import React from 'react'
import NumberItem from 'components/NumberItem'

// Tools used by Content Step
import { EditRadioButtons, EditTextFields, UploadImage } from 'components/paneltools'





export default function ContentStep() {


    return (
        <div data-step="3" className="flex flex-col w-full mt-6 ">
            {/* Step-3 ---Content */}
            <hr className="h-14 border-none " />
            <div className="dosticky">
                <NumberItem value="3 Content" />
            </div>
            <hr className="h-2 border-none " />

            <label className="!mt-0">Edit your content</label>

            <EditTextFields />              {/* Select Sizes */}
            <UploadImage />                 {/* Upload Image */}
            <EditRadioButtons />        {/* Edit Radio Buttons */}

        </div>
    )
}
