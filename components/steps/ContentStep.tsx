import React from 'react'
import NumberItem from 'components/NumberItem'

// Tools used by this Step
import { EditRadioButtons, EditTextFields, UploadImage } from 'components/paneltools'

type Props = {}



export default function ContentStep({ }: Props) {


    return (
        <div data-step="3" className="flex flex-col w-full mt-6 ">
            {/* Step-3 ---Content */}
            <div className="dosticky">
                <NumberItem value="3 Content" />
            </div>

            <label className="!mt-0">Edit your content</label>

            <EditTextFields />              {/* Select Sizes */}
            <UploadImage />                 {/* Upload Image */}
            <EditRadioButtons />        {/* Edit Radio Buttons */}

        </div>
    )
}
