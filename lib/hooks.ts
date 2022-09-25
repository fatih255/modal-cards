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

    const { LayoutProps: { size, position, colors } } = useAppSelector(state => state.modal)
    const LayoutRef = useRef<null | HTMLElement>(null)
    const ColorChangeableElements = useRef<null | HTMLElement[]>(null)
    const modalButtons = useRef<null | HTMLElement[]>(null)
    useEffect(() => {
        LayoutRef.current = document.getElementById('layout') as HTMLElement;


        //for color chance
        ColorChangeableElements.current = Array.from(document.querySelectorAll('.theme-color')) as HTMLElement[];
        ColorChangeableElements.current && ColorChangeableElements.current.forEach(element => {

            const haveColorClass = Array.from(element.classList).find(x => colorSelectPalette.includes(x))
            if (haveColorClass) {
                element.classList.replace(haveColorClass, colors)
            } else {
                element.classList.add(colors)
            }

        })
    

        // for layout props change size, position etc....
        if (LayoutRef.current) {
            LayoutRef.current.className = ' default ' + Object.values({ size, position }).join(' ')
        }
    }, [size, position, colors])
}