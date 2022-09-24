import { useEffect, useRef } from "react";

export const useEffectOneTime = (callback: () => void, depencies: [] = []) => {
    const EffectRan = useRef(false);
    useEffect(() => {
        !EffectRan.current || depencies && callback()
        return () => {
            EffectRan.current = true
        }
    }, depencies)
}