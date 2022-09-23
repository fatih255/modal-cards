import React, { useEffect, useState } from 'react'
import cn from 'classnames'

type Props = {
    name: string
    per: number,
    children: JSX.Element[];
    containerClass?: string;
}

export default function PaginationContent({ name, per, children, containerClass = 'flex gap-8 w-full flex-wrap' }: Props) {

    const [activePage, setactivePage] = useState<number>(1);
    const total = children.length;

    const changeActivePageHandler = (pageIndex: number) => {
        setactivePage(pageIndex)
    }
    useEffect(() => {
        const container = document.querySelector(`#pagination-${name}`) as HTMLElement
        if (container) {
            const { height } = container.getBoundingClientRect();
            container.style.minHeight = `${height}px`
        }
    }, [])
    return (
        <>
            <div id={`pagination-${name}`} className={containerClass}>
                {
                    children.slice(per * activePage - per, per * activePage).map((child) => (child))
                }
            </div>
            <div className="rounded-xl bg-design-gray-100 gap-2  flex items-center justify-center overflow-hidden mt-8 font-inter font-semibold text-sm  px-1  h-[48px]">
                {Array.from({ length: total / per }).map((_, index) => (
                    <button
                        onClick={() => changeActivePageHandler(index + 1)}
                        className={cn({ 'bg-white': index + 1 === activePage }, 'h-[88%] px-4 flex items-center justify-center hover:bg-white rounded-[10px] cursor-pointer')}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </>
    )
}