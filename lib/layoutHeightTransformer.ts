import { useEffect, useRef } from "react";


type Props = {
    selectors: {
        from: string,
        to: string
    },
    centeredBySelector?: string
    divideHeight?: number
}
export const layoutHeightTransformer = ({ selectors: { from, to }, centeredBySelector, divideHeight = 1 }: Props) => {

    const fromElement = document.querySelector(from) as HTMLElement
    const heightFrom = fromElement.getBoundingClientRect().height

    const toElement = document.querySelector(to) as HTMLElement
    toElement.style.height = heightFrom / divideHeight + "px"

    if (centeredBySelector) {
        const centeredBySelectorElement = document.querySelector(centeredBySelector) as HTMLElement
        console.log()
        centeredBySelectorElement.scrollTo({
            top: parseFloat(toElement.style.height) / divideHeight * 2,

        })
    }
    
}

