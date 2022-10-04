import { ModalType } from "redux/slices/modal";
import { store } from "redux/store";

//generate code method
export default function generateCode(): string {

    const { settings, activedSettings } = store.getState().modal


    const activeSettingsValues: ModalType["settings"] = Object
        .keys(settings)
        .filter(setting => activedSettings.includes(setting as keyof ModalType['settings']))
        .map(setting => Object({ [setting]: settings[setting as keyof ModalType['settings']] }))
        .reduce((acc, c) => Object({ ...acc, ...Object.assign(acc, c) }), {})

    //GenerateCode Stages
    //  1.Stage: clone current modal layout
    let modalElement = document.getElementById("layout");
    if (!modalElement) return ''
    let modalElement_cloned = modalElement.cloneNode(true) as HTMLElement;


    //  2.Stage: check check whether there is a targeting  visitor device,
    //  if there is a targeted visitor device add a responsive class
    if (activeSettingsValues.visitorDevice) {
        modalElement_cloned.classList.add(activeSettingsValues.visitorDevice)
        modalElement_cloned.classList.add('for-generated')
    }

    //3.Stage: Add the hostname to the beginning of the image's source url string
    modalElement_cloned.querySelectorAll("img").forEach(img => img.src = img.src)



    //4.Stage: write event listeners
    // Final Stage: create code between script tags
    const generatedCode = `
    
        document.body.innerHTML = '${modalElement_cloned.outerHTML}';
        var cssId = "modalCardCSS"; 
        var head = document.getElementsByTagName("head")[0];
        var link = document.createElement("link");
        link.id = cssId;
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href ="https://leafy-mermaid-eb53cb.netlify.app/_next/static/css/1c7e9cfb1ac0f201.css";
        link.media = "all";
        head.appendChild(link);

        const modalElement = document.getElementById('layout')
        const modalCloseButton=document.getElementById('close-modal-btn')
        modalCloseButton.addEventListener("click",closeModalAction)

        function openModalAction(){
            modalElement.classList.remove('close');
            modalElement.classList.add('open');
        }
        function closeModalAction(){
                modalElement.classList.remove('open');
                modalElement.classList.add('close');
        }

        // event functions
        // scroll percentage 
        function scrollEventOnDocument(value){
           
                let scrollTop = window.scrollY;
                let docHeight = document.documentElement.offsetHeight;
                let winHeight = window.innerHeight;
                let scrollPercent = scrollTop / (docHeight - winHeight);
                let scrollPercentRounded = Math.round(scrollPercent * 100);
    
                if(scrollPercentRounded < Number(value))  closeModalAction()
                if (scrollPercentRounded === Number(value) && modalElement.classList.contains('close')) {
                    openModalAction()
                } 
        } 

        // x Second Time Out x after show modal
        function xSecondTimeOut(value){
            if(Number(value) > 0){
                timer = Number(value) > 0 && setTimeout(() => {
                    openModalAction()
                }, Number(value) * 1000);
            }
        }

        //exit indent targeting show modal
        function exitIntentTargetting(e){
            if (!e.relatedTarget && modalElement.classList.contains('close')) {
                openModalAction()
            }
        };

        ${activeSettingsValues.afterPercentageScroll ? `window.addEventListener("scroll", ()=> scrollEventOnDocument(${settings['afterPercentageScroll']}));` : ''}
        ${activeSettingsValues.exitIntentTargetting ? `document.addEventListener("mouseout" , exitIntentTargetting);` : ''}
        ${activeSettingsValues.afterXSeconds ? `xSecondTimeOut(${settings['afterXSeconds']});` : ''}
        
       

    
    `


    return generatedCode
}