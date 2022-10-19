import React, { useEffect, useRef } from 'react'
import Button from 'components/Button'

import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { updateRadioButton } from 'redux/slices/modal'

//panel components
import { InputText } from 'components/panelComponents'

function EditRadioButtons() {
  const dispatch = useAppDispatch()

  const radios = useAppSelector((state) => state.modal.contents.radios)

  //get height for transition height effect css
  const radioTabHeightRef = useRef(0) //  I use ref during I get the height value from the HTML element because I use it one time. Therefore I didn't need to use setstate
  useEffect(() => {
    const radioTab = document.querySelector(`.radio-tab-show`) as HTMLElement
    if (radioTab && radioTabHeightRef.current === 0) {
      radioTabHeightRef.current = radioTab.getBoundingClientRect().height
      radioTab.style.height = radioTabHeightRef.current + 'px'
    }
  })

  const activeRadioTabHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    radioIndex: number,
  ) => {
    const showingTab = document.querySelector('.radio-tab-show') as HTMLElement
    const activeTabBtn = document.querySelector(
      '.selected-radio-tab-btn',
    ) as HTMLElement

    //replace not selected class.  I remove style attr because style attr make  invalid to  h-0 class on transition
    if (showingTab) {
      showingTab.classList.replace('radio-tab-show', 'radio-tab-hide')
      showingTab.removeAttribute('style')
    }

    // reset selected tab style if not selected radio tab
    activeTabBtn && activeTabBtn.classList.remove('selected-radio-tab-btn')
    const radioTab = document.querySelector(
      `.radio-tab-${radioIndex}`,
    ) as HTMLElement
    radioTab.classList.replace('radio-tab-hide', 'radio-tab-show')

    //add height attr for height transition
    radioTab.style.height = radioTabHeightRef.current + 'px'
    e.currentTarget.classList.add('selected-radio-tab-btn')
  }

  const onContentRadioChangeHandler = ({
    radioIndex,
    title,
    description,
    value,
  }: {
    radioIndex: number
    title: string
    description: string
    value: string
  }) => {
    dispatch(updateRadioButton({ radioIndex, title, description, value }))
  }

  return radios ? (
    <>
      <label>Edit your button</label>
      {radios.map((radio, index) => (
        <React.Fragment key={`text-radio-${index}`}>
          <div className='flex flex-col'>
            <Button
              theme='light-bordered'
              className={` ${
                index === 0 ? 'selected-radio-tab-btn' : ''
              } radio-tab-btn bg-design-gray-100 text-sm w-full my-0.5`}
              onClick={(e) => activeRadioTabHandler(e, index)}
              text={`Radio Button: ${radio.title}`}
            />
            <div
              className={`radio-tab-${index} ${
                index === 0 ? 'radio-tab-show' : 'radio-tab-hide'
              } my-2 origin-top`}>
              <span className='font-inter text-sm'>Title</span>
              <InputText
                onChange={async (value) =>
                  onContentRadioChangeHandler({
                    ...radio,
                    radioIndex: index,
                    title: value,
                  })
                }
                text={radio.title}
              />
              <span className='font-inter text-sm'>Description</span>
              <InputText
                onChange={async (value) =>
                  onContentRadioChangeHandler({
                    ...radio,
                    radioIndex: index,
                    description: value,
                  })
                }
                text={radio.description}
              />
              <span className='font-inter text-sm'>Value</span>
              <InputText
                onChange={async (value) =>
                  onContentRadioChangeHandler({
                    ...radio,
                    radioIndex: index,
                    value: value,
                  })
                }
                text={radio.value}
              />
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  ) : (
    <></>
  )
}

export default React.memo(EditRadioButtons)
