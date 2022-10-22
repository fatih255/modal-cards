import React from 'react';
// icons
import CamperIcon from 'icons/camper.svg';
import CloseModalIcon from 'icons/closemodal.svg';
import GrowEmailIcon from 'icons/growemail.svg';
import IncreaseSalesIcon from 'icons/increasesales.svg';

export type PreviewModalProps = {
  containerClass?: string
  extraClass?: string
  texts?: (string | JSX.Element)[]
}
export const defaultPreviewModalValues = {
  containerClass: 'bg-white max-w-[800px] rounded-[40px] bg-no-repeat ',
  texts: [
    'Join the club',
    'Subscribe and Get an Extra',
    '25% Off',
    'on your first purchase.',
    'Subscribe',
    'By signing up, you agree to',
    'Privacy Policy',
    'and',
    'Terms of Use.',
    'Mediterranean Sneakers®',
    'Grow email list',
    'Increase sales conversion',
  ],
}
function PreviewModal({
  containerClass = defaultPreviewModalValues.containerClass,
  extraClass = '',
  texts = defaultPreviewModalValues.texts,
}: PreviewModalProps) {
  return (
    <div className={`relative flex ${containerClass} ${extraClass}`}>
      <div className='flex-1 text-center p-8 w-full '>
        <CamperIcon className='mx-auto my-6 ' />
        <div className='p-4'>
          <span className='text-[40px] font-semibold tracking-tighter'>
            {texts[0]}
          </span>
          <p className='my-2  '>
            {texts[1]}
            <br />
            <span className='font-semibold underline'> {texts[2]}</span>{' '}
            {texts[3]}
          </p>
          <input
            className='px-4 py-3 my-4 w-full rounded-xl text-gray-700 border border-design-gray-400 focus:outline focus:outline-gray-300'
            placeholder='Email address'
          />
          <button className='p-3 font-semibold rounded-xl bg-black hover:bg-opacity-70 text-white  w-full transition-all duration-300'>
            {texts[4]}
          </button>
          <span className='mt-4 block w-full max-w-[250px] text-left text-xs text-design-gray-900 leading-[18px]'>
            {texts[5]} <u> {texts[6]} </u>
            {texts[7]} <u>{texts[8]} </u>
          </span>
        </div>
      </div>
      <div className='flex-1 relative select-none'>
        <img
          alt="previewmodal"
          src='/images/camperimage.jpg'
          className='absolute w-full h-full  object-cover object-center bg-no-repeat rounded-r-[40px]'
        />
        <div className='z-10 absolute w-full h-full'>
          <div className='rounded-full absolute right-0 top-0 m-[7.5%] bg-white p-3 hover:bg-black cursor-pointer group  transition-all duration-300 hover:scale-110 hover:drop-shadow-xl'>
            <CloseModalIcon className=' group-hover:invert  transition-all duration-300' />
          </div>
          <div className='flex flex-col-reverse h-full p-6'>
            <span className='flex max-w-xs w-0 text-4xl text-white font-semibold tracking-tight'>
              {texts[9]}
            </span>
          </div>
        </div>
      </div>
      <div className='absolute flex flex-col gap-3 top-1/4 right-0 translate-x-[80%]'>
        <div className='flex gap-2 items-center bg-white p-3 rounded-lg font-medium'>
          <GrowEmailIcon />
          {texts[10]}
        </div>
        <div className='-translate-x-4 flex gap-2 items-center bg-white bg-opacity-70 p-3 rounded-lg font-medium pr-5'>
          <IncreaseSalesIcon />
          {texts[11]}
        </div>
      </div>
    </div>
  )
}

export default React.memo(PreviewModal)
