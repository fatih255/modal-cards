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

    console.log(activeSettingsValues)
    //  2.Stage: check check whether there is a targeting  visitor device,
    //  if there is a targeted visitor device add a responsive class
    if (activeSettingsValues.visitorDevice) {
        modalElement_cloned.classList.add(activeSettingsValues.visitorDevice)
        modalElement_cloned.classList.add('for-generated')
        modalElement_cloned.classList.contains('close') && modalElement_cloned.classList.remove('close')
        modalElement_cloned.classList.contains('open') && modalElement_cloned.classList.remove('open')
    }

    //3.Stage: Add the hostname to the beginning of the image's source url string
    modalElement_cloned.querySelectorAll("img").forEach(img => img.src = img.src)





    //4.Stage: write event listeners and webhook process
    // Final Stage: create code between script tags
    const generatedCode = `<script>

   
      
        var cssId = "modalCardCSS"; 
        var head = document.getElementsByTagName("head")[0];
        var link = document.createElement("link");
        link.id = cssId;
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href ="https://leafy-mermaid-eb53cb.netlify.app/_next/static/css/da515a3ce7c32514.css";
        link.media = "all";
        head.appendChild(link);

      
        ${activeSettingsValues.webHookUrl ? `let webHookData=new FormData();` : ``}
        ${settings.sendClickData ? `const clickedButtons=[]` : ``}
        
        link.onload=()=>{

            //if actived sendClickData settings count click to button. If have any click , add webHookData Object
       
            
           
            document.body.innerHTML = '${modalElement_cloned.outerHTML}';
            const modalElement = document.getElementById('layout')
            const modalCloseButton=document.getElementById('close-modal-btn')
            modalCloseButton.addEventListener("click",closeModalAction)
    
            function openModalAction(){
    
                //modalElement.classList.remove('close'); this section use when you want to show more than once
                
                modalElement.classList.add('open');
                sessionStorage.setItem("modalopened", "true");
                removeEvent()

                //if actived sendClickData settings: when modal is opened, count modal button clicks
                ${settings.sendClickData ? `
               
                function countClick(e) {

                clickedButtons.push(e.target.innerText)
             
                    e.removeEventListener("click", countClick)
                }
                const modalButtons = modalElement.querySelectorAll("button");
                modalButtons.forEach((button) => {
                        button.addEventListener("click", countClick);
                    })

                `: ''}
                            
            }

          

            function closeModalAction(){
                    modalElement.classList.remove('open');
                    modalElement.classList.add('close');

                // if actived sendClickData settings:  when modal is closed, if have webhook url do request webHookData Object with fetch
                
                ${settings.sendClickData ? `webHookData.append('clicked_buttons[]', clickedButtons)` : ``}
                ${activeSettingsValues.webHookUrl ?
            `fetch('${activeSettingsValues.webHookUrl}', { method: 'POST', body: webHookData })
                    .then((response) => response.json())
                    .then((data) => console.log(data))
                    
            ` : ''}
            }
    
    
            // if modal is not opened this session dont show again
            let isModalOpened = sessionStorage.getItem("modalopened");
    
            // event functions
            // scroll percentage 
            function scrollEventOnDocument(){
    
                    const value =${settings['afterPercentageScroll']}
    
                    let scrollTop = window.scrollY;
                    let docHeight = document.documentElement.offsetHeight;
                    let winHeight = window.innerHeight;
                    let scrollPercent = scrollTop / (docHeight - winHeight);
                    let scrollPercentRounded = Math.round(scrollPercent * 100);
        
                    // if(scrollPercentRounded < Number(value))  
    
                    if (scrollPercentRounded === Number(value))  openModalAction()
            } 
    
      
    
    
            //exit indent targeting show modal
            function exitIntentTargetting(e){
                if (!e.relatedTarget) openModalAction()
            };
    
            //if browser language is not includes languages that entered input not show modal
            const currentBrowserLanguage = navigator.language || navigator.userLanguage; 
            const haveBrowserLanguages=[${activeSettingsValues.browserLanguages.map(lang => `'${lang}'`)}]

           
            // if not have modalopened session dont show modal
            // if have traffic source setting check is have refferrer is same traffic source that entered input if not dont show modal
            let haveTrafficSource="${activeSettingsValues.trafficSource ?? ''}"
            if(
                !isModalOpened && (
                    (!haveTrafficSource ||  document.referrer === haveTrafficSource) &&
                    (!haveBrowserLanguages ||  haveBrowserLanguages.includes(currentBrowserLanguage))
                )
                
                ){
    
    
                //if not have any listener, show modal directly
                ${!activeSettingsValues.afterPercentageScroll &&
            !activeSettingsValues.exitIntentTargetting &&
            !activeSettingsValues.afterXSeconds ? `
                        openModalAction()
                `: ''}
                

                
       
                ${activeSettingsValues.afterPercentageScroll ? 'window.addEventListener("scroll", scrollEventOnDocument);' : ''}
                //exitIntentTargetting just use desktop
                ${activeSettingsValues.exitIntentTargetting ? 'if(typeof screen.orientation !== "undefined") document.addEventListener("mouseout" , exitIntentTargetting);' : ''}
            
                ${activeSettingsValues.afterXSeconds ? `

                const xSecondTimeOut = setTimeout(() => {
                    openModalAction()
                }, Number(${settings['afterXSeconds']}) * 1000)
                
                ` : ''}

                // x Second Time Out x after show modal
    

            }
            
            function removeEvent(eventName){
                switch (eventName) {
                    case 'afterPercentageScroll':
                        window.removeEventListener("scroll", scrollEventOnDocument);
                        break;
                    case 'exitIntentTargetting':
                        document.removeEventListener("mouseout" , exitIntentTargetting)
                        break;
                    default:
                        window.removeEventListener("scroll", scrollEventOnDocument);
                        document.removeEventListener("mouseout" , exitIntentTargetting)
                        ${activeSettingsValues.afterXSeconds ? ` window.clearTimeout(xSecondTimeOut) ` : ''}
                        break;
                }
             
            }
           
       
            
        }
        </script>`

    console.log(generatedCode)
    return generatedCode
}