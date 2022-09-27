import { useEffect, useRef } from "react";
import { useAppSelector } from "../redux/hooks";
import { colorSelectPalette } from "./contants";
import { twColors } from "./utils";


export const useEffectOneTime = (callback: () => void, depencies: [] = []) => {
    const EffectRan = useRef(false);
    useEffect(() => {
        !EffectRan.current || depencies && callback()
        return () => {
            EffectRan.current = true
        }
    }, depencies)
}

export const useChanges = () => {

    const { ModalProps: { content, image }, LayoutProps: { size, position, colors } } = useAppSelector(state => state.modal)
    const LayoutRef = useRef<null | HTMLElement>(null)
    const ImageRef = useRef<null | HTMLElement>(null)
    const ColorChangeableElements = useRef<null | HTMLElement[]>(null)
    useEffect(() => {
        LayoutRef.current = document.getElementById('layout') as HTMLElement;
        ImageRef.current = document.querySelector('.modal-image') as HTMLElement;
       

        //for change content
        if (content?.length) {
            content.forEach((content: string, contentIndex: number) => {
                const contentElement = document.querySelector(`.content-${contentIndex + 1}`) as HTMLElement
                if (contentElement?.innerHTML) {
                    contentElement.innerHTML = content
                } else {
                    if ((contentElement as HTMLInputElement)?.placeholder) (contentElement as HTMLInputElement).placeholder = content
                }
            })
        }
      
        // for layout props change size, position etc....
        if (LayoutRef.current) {
            LayoutRef.current.className = ' default ' + Object.values({ size, position }).join(' ')
        }



    }, [size, position, colors, image, content])
}