import React, { useEffect, useState } from 'react'
import cn from 'classnames'

type Props = {
    name: string
    per: number,
    jsx: ({ data }: { data: any }) => JSX.Element;
    data: any[]
    containerClass?: string;
}

export default function PaginationContent({ name, per, jsx, data, containerClass = 'flex gap-8 w-full flex-wrap' }: Props) {

    const [activePage, setactivePage] = useState<number>(1);
    const total = data.length;

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

    const rendered = data.slice(per * activePage - per, per * activePage)
        .map((props, index) => {
            return jsx({ data: { ...props, key: index } })
        })

    return (
        <>
            <div id={`pagination-${name}`} className={containerClass}>
                {rendered}
            </div>
            <div className="rounded-xl bg-design-gray-100 gap-2  flex items-center justify-center overflow-hidden mt-8 font-inter font-semibold text-sm  px-1  h-[48px]">
                {Array.from({ length: total / per }).map((_, index) => (
                    <button
                        key={`pagination-${name}-btn-${index + 1}`}
                        onClick={() => changeActivePageHandler(index + 1)}
                        className={cn({ 'bg-white': index + 1 === activePage }, 'h-[88%] px-4 flex items-center justify-center hover:bg-white rounded-[10px] cursor-pointer')}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </>
    )
}