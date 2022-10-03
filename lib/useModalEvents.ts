

/*
Mouse Events
    afterXSeconds
    afterPercentageScroll
    exitIntentTargetting
*/

import { useEffect } from "react"

function useModalEvents(eventType: string, status?: boolean | null, value?: string) {


    useEffect(() => {

        const modalElement = document.getElementById('layout')
        const previewContainer = document.querySelector(".preview-outer") as HTMLElement;



        if (!modalElement) return

        const openModalAction = () => {
            modalElement.classList.remove('close');
            modalElement.classList.add('open');
        }

        //event functions
        const mouseOutEvent = (e: MouseEvent) => {
            if (!e.relatedTarget && modalElement.classList.contains('close')) {
                openModalAction()
            }
        };
        const calculateScrollPercentage = (scrolltop: number, docheigh: number, winheight: number) => {
            let scrollTop = scrolltop;
            let docHeight = docheigh;
            let winHeight = winheight;
            let scrollPercent = scrollTop / (docHeight - winHeight);
            let scrollPercentRounded = Math.round(scrollPercent * 100);
            console.log(scrollPercentRounded, value)
            if (scrollPercentRounded === Number(value) && modalElement.classList.contains('close')) {
                return true;
            }
        }

        const scrollEventOnPreviewContainer = () => {
            //for preview we need show on this scroll event on preview container scroll
            const canOpenOnPreviewContainer = calculateScrollPercentage(previewContainer.scrollTop, previewContainer.scrollHeight, previewContainer.offsetHeight);
            if (canOpenOnPreviewContainer) {
                openModalAction()
            }
        }
        const scrollEventOnDocument = () => {
            //for generate Code -- is calculating for doc element
            /*   const canOpenOnDocument = calculateScrollPercentage(window.scrollY, document.body.offsetHeight, window.innerHeight);
              if (canOpenOnDocument) {
                  modalElement.classList.remove('close');
                  modalElement.classList.add('open');
              } */
        }

        let timer: number | undefined;
        const xSecondTimeOut = () => {
            window.clearTimeout(timer);
            timer = window.setTimeout(() => {
                openModalAction()
                console.log(Number(value))
            }, Number(value) * 100);

        }

        let returnForStatusFalse: any = false;
        if (status === false) {
            switch (eventType) {
                case "afterPercentageScroll":
                    returnForStatusFalse = () => {
                        window.removeEventListener("scroll", scrollEventOnDocument)
                        previewContainer.removeEventListener("scroll", scrollEventOnPreviewContainer)
                    }
                    break;
                case "exitIntentTargetting":
                    returnForStatusFalse = () => document.removeEventListener('mouseout', mouseOutEvent);
                    break;
            }
        }

        if (typeof returnForStatusFalse === 'function') return returnForStatusFalse()

        switch (eventType) {
            case "afterXSeconds":
                xSecondTimeOut()
                break;
            case "afterPercentageScroll":
                window.addEventListener("scroll", scrollEventOnDocument)
                previewContainer.addEventListener("scroll", scrollEventOnPreviewContainer)
                break;
            case "exitIntentTargetting":
                document.addEventListener('mouseout', mouseOutEvent);
                break;
        }


        return () => {
            document.removeEventListener('mouseout', mouseOutEvent);
            window.removeEventListener("scroll", scrollEventOnDocument)
            previewContainer.removeEventListener("scroll", scrollEventOnPreviewContainer)
        }
    }, [status, value])

}

export { useModalEvents }