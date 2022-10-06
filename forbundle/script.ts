import { ModalType } from "redux/slices/modal"

type Props = {
    html: string
    settings: Partial<ModalType['settings']>

}


export default function modalCard({ html, settings }: Props) {
    
    var cssId = "modalCardCSS";
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.id = cssId;
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "https://leafy-mermaid-eb53cb.netlify.app/_next/static/css/25540e88b84caae0.css";
    link.media = "all";
    head.appendChild(link);

    link.onload = () => {

        document.body.innerHTML = html

        // for close button trigger close event
        const modalCloseButton = document.getElementById('close-modal-btn')
        modalCloseButton && modalCloseButton.addEventListener("click", closeModalAction)

        const modalElement = document.getElementById("layout") as HTMLElement
        if (!modalElement) return


        const ModalCloseEffects: any[] = [] // this array use when settings have effects during the closing 
        let timer: number | NodeJS.Timeout | undefined;
        let modalOpenedContidions = [];
        let isModalOpened = sessionStorage.getItem("modalopened");
        let webHookData = new FormData();
        const clickedButtons: any = []
        // 1.Condition:  if modal is opened this session dont show again
        // 2.Condition:  if have traffic source setting check is have refferrer is same traffic source that entered input if not dont show modal
        // 3.Condition:  if browser language is not includes languages that entered input not show modal

        modalOpenedContidions.push(!isModalOpened)
        modalOpenedContidions.push(!settings.trafficSource || document.referrer === settings.trafficSource)
        modalOpenedContidions.push(!settings.browserLanguages || settings.browserLanguages.includes(navigator.language))

        if (modalOpenedContidions.every(v => v)) {

            //if not have any listener, show modal directly
            if (!settings.afterPercentageScroll && !settings.exitIntentTargetting && !settings.afterXSeconds) {
                openModalAction()
            }

            Object.keys(settings).forEach((setting) => {

                switch (setting) {
                    case 'afterPercentageScroll':
                        window.addEventListener("scroll", scrollEventOnDocument);
                        break;
                    case 'afterXSeconds':
                        timer = setTimeout(() => {
                            openModalAction()
                        }, Number(settings.afterXSeconds) * 1000)
                        break;
                    case 'exitIntentTargetting':
                        if (typeof screen.orientation === "undefined")
                            document.addEventListener("mouseout", exitIntentTargetting);
                        break;
                    case 'sendClickData':
                        const modalButtons = modalElement.querySelectorAll("button");
                        modalButtons.forEach((button) => {
                            button.addEventListener("click", countClick);
                        })
                        ModalCloseEffects.push(webHookData.append('clicked_buttons[]', clickedButtons))
                        break;
                    case 'webHookUrl':
                        ModalCloseEffects.push(sendDataToWebHook())
                        break;
                }
            })

        }


        // event listeners functions

        //percentage scrolling show
        function scrollEventOnDocument() {
            let scrollTop = window.scrollY;
            let docHeight = document.documentElement.offsetHeight;
            let winHeight = window.innerHeight;
            let scrollPercent = scrollTop / (docHeight - winHeight);
            let scrollPercentRounded = Math.round(scrollPercent * 100);
            // if(scrollPercentRounded < Number(value))  
            if (scrollPercentRounded === Number(settings.afterPercentageScroll)) openModalAction()
        }

        //exit indent targeting show modal
        function exitIntentTargetting(e: MouseEvent) {
            if (!e.relatedTarget) openModalAction()
        };

        //generate data functions

        function countClick(e: MouseEvent) {
            const target = e.target as HTMLElement
            if (!target) return

            clickedButtons.push(target.innerText)
            target.removeEventListener("click", countClick)
        }
        //send data to webhook
        function sendDataToWebHook() {
            if (!settings.webHookUrl) return
            fetch(settings.webHookUrl, { method: 'POST', body: webHookData })
                .then((response) => response.json())
                .then((data) => console.log(data))
        }

        //Modal Open/Close Functions

        //trigger open modal animation
        function openModalAction() {
            modalElement.classList.add('open');
            sessionStorage.setItem("modalopened", "true");
            removeAllEvents()
        }

        //trigger close modal animation
        function closeModalAction() {
            modalElement.classList.remove('open');
            modalElement.classList.add('close');
            ModalCloseEffects.forEach(code => code)

        }

        //remove all event listeners
        function removeAllEvents() {
            window.removeEventListener("scroll", scrollEventOnDocument);
            document.removeEventListener("mouseout", exitIntentTargetting)
            window.clearTimeout(timer)
        }
    }
}


