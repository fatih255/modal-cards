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
    const generatedCode = `<script src="http://localhost:3000/script.js"></script>
    <script>
    modalCard({
        html:'${modalElement_cloned.outerHTML}',
        settings:${JSON.stringify(settings)}
    })
    </script>
    `

    console.log(generatedCode)
    return generatedCode
}