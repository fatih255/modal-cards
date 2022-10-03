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
    }

    //3.Stage: Add the hostname to the beginning of the image's source url string
    modalElement_cloned.querySelectorAll("img").forEach(img => img.src = img.src)

    // Final Stage: create code between script tags
    const generatedCode = `
    <script>
      document.body.innerHTML = '${modalElement_cloned.outerHTML}';
      var cssId = "modalCardCSS"; 
      var head = document.getElementsByTagName("head")[0];
      var link = document.createElement("link");
      link.id = cssId;
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href ="https://633a7bffa39a490df7495584--leafy-mermaid-eb53cb.netlify.app/_next/static/css/c51015471aa6e4bc.css";
      link.media = "all";
      head.appendChild(link);
    </script>
    `



    return generatedCode
}