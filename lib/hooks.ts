import { useEffect, useRef, useState } from "react";


export const useEffectOneTime = (callback: () => void, depencies: any[] = []) => {
    const EffectRan = useRef(false);
    useEffect(() => {
        !EffectRan.current || depencies && callback()
        return () => {
            EffectRan.current = true
        }
    }, depencies)
}


type Props = {
    selectors: {
        from: string,
        to: string
    },
    centeredBySelector?: string
    divideHeight?: number
}
export const useLayoutHeightTransformer = ({ selectors: { from, to }, centeredBySelector, divideHeight = 1 }: Props) => {

    useEffectOneTime(() => {
        const fromElement = document.querySelector(from) as HTMLElement
        const heightFrom = fromElement.getBoundingClientRect().height

        const toElement = document.querySelector(to) as HTMLElement
        toElement.style.height = heightFrom / divideHeight + "px"

        if (centeredBySelector) {
            const centeredBySelectorElement = document.querySelector(centeredBySelector) as HTMLElement
            console.log()
            centeredBySelectorElement.scrollTo({
                top: parseFloat(toElement.style.height) / 6,

            })
        }
    })
}

