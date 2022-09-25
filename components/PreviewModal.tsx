import React from 'react'
//icons
import CamperIcon from 'svgs/camper.svg'
import CloseModalIcon from 'svgs/closemodal.svg'
import GrowEmailIcon from 'svgs/growemail.svg'
import IncreaseSalesIcon from 'svgs/increasesales.svg'

export default function PreviewModal() {
    return (
        <div className="relative flex bg-white max-w-[800px] rounded-[40px] bg-no-repeat -translate-y-[50%]">
            <div className="flex-1 text-center p-8 w-full ">
                <CamperIcon className="mx-auto my-6 " />
                <div className="p-4">
                    <span className="text-[40px] font-semibold tracking-tighter">Join the club</span>
                    <p className="my-2  ">
                        Subscribe and Get an Extra
                        <br /><span className="font-semibold underline">25% Off</span> on your first purchase.
                    </p>
                    <input className="px-4 py-3 my-4 w-full rounded-xl text-gray-700 border border-design-gray-400 focus:outline focus:outline-gray-300" placeholder="Email address" />
                    <button className="p-3 font-semibold rounded-xl bg-black hover:bg-opacity-70 text-white  w-full transition-all duration-300">Subscribe</button>
                    <span className="mt-4 block w-full max-w-[250px] text-left text-xs text-design-gray-900 leading-[18px]">By signing up, you agree to  <u>Privacy Policy </u>
                        and <u>Terms of Use.</u> </span>
                </div>
            </div>
            <div className="flex-1 relative select-none">
                <img src="/images/camperimage.jpg" className="absolute w-full h-full  object-cover object-center bg-no-repeat rounded-r-[40px]" />
                <div className="z-10 absolute w-full h-full">
                    <div className="rounded-full absolute right-0 top-0 m-[7.5%] bg-white p-3 hover:bg-black cursor-pointer group  transition-all duration-300 hover:scale-110 hover:drop-shadow-xl"><CloseModalIcon className=" group-hover:invert  transition-all duration-300" /></div>
                    <div className="flex flex-col-reverse h-full p-6">
                        <span className="flex max-w-xs w-0 text-4xl text-white font-semibold tracking-tight">Mediterranean Sneakers®</span>
                    </div>
                </div>
            </div>
            <div className="absolute flex flex-col gap-3 top-1/4 right-0 translate-x-[80%]">
                <div className="flex gap-2 items-center bg-white p-3 rounded-lg font-medium">
                    <GrowEmailIcon />
                    Grow email list
                </div>
                <div className="-translate-x-4 flex gap-2 items-center bg-white bg-opacity-70 p-3 rounded-lg font-medium pr-5">
                    <IncreaseSalesIcon />
                    Increase sales conversion
                </div>
            </div>
        </div>
    )
}