
import *  as Modals from 'components/modals';
import ReactDOMServer from "react-dom/server";


// This function returns the class of all elements in the html element given to the selector parameter, along with its own class.
export const getAllClassFromElement = (selector: string) => {
    const container = document.querySelector(selector);

    if (!container) return

    const childrens = container.querySelectorAll("*");

    const modalElements = [container, ...childrens];
    const haveClassesElements = modalElements.filter((element) =>
        element.hasAttribute("class")
    );
    const classes = haveClassesElements.map((element) =>
        element.getAttribute("class")
    );
    return classes;
};



// This function gets the HTML of the selected popup and change HTML with coming data
export const generateHtmlOutput = (selectedModalName: Modals.ModalAlias, classes: string[], texts: string[]) => {

    const selectedModalHTML = ReactDOMServer.renderToString(Modals[selectedModalName]({}));

    let output = changeElementsClasses(selectedModalHTML, classes)
    output = changeModalContentTexts(output, texts)


}




//This function change all html elements classes coming from classes array
function changeElementsClasses(htmlString: string, classes: string[]) {

    const HTMLTemplateString = htmlString;
    const parser = new DOMParser();
    const HTMLTemplate = parser.parseFromString(HTMLTemplateString, "text/html").body.firstChild;

    if (!HTMLTemplate) return

    const modalElements: any[] = [
        HTMLTemplate,
        ...Array.from((HTMLTemplate as HTMLElement).querySelectorAll("*"))
    ];

    const hasClassElements: { index: number; htmlElement: HTMLElement; }[] = [];
    modalElements.forEach((element, index) => {

        if ((element as HTMLElement).hasAttribute("class")) {
            hasClassElements.push({ index, htmlElement: (element as HTMLElement) });
        }
    });

    hasClassElements.forEach(({ htmlElement }, index) => {
        htmlElement.setAttribute("class", classes[index]);
    });

    modalElements.forEach((element, index) => {
        element[index] = hasClassElements.find(
            (obj) => obj.index === index
        )?.htmlElement;
    });

    const layoutContainer = modalElements[0];

    return layoutContainer;
};



// This function change all HTMLelement texts that are found text
function changeModalContentTexts(htmlString: string, texts: string[]) {
    const parser = new DOMParser();
    let HTMLTemplateString = htmlString;
    const htmlElement = parser.parseFromString(
        HTMLTemplateString,
        "text/html"
    ).body.firstChild;

    if (!htmlElement) return
    const elements = [htmlElement, ...(htmlElement as HTMLElement).querySelectorAll("*")];

    const parentElements = elements.map((element) => element.cloneNode(true));
    parentElements.forEach((element) => {
        const elmnt = element as HTMLElement
        while (elmnt.lastElementChild) {
            element.removeChild(elmnt.lastElementChild);
        }

        return element;
    });

    const hasTextContentElements = parentElements.filter(
        (element) => element.textContent
    );

    hasTextContentElements.forEach((element, index) => {

        const newElement = element.cloneNode() as HTMLElement;
        const elmnt = element as HTMLElement;
        newElement.textContent = texts[index];
        HTMLTemplateString.replace(elmnt.outerHTML, newElement.outerHTML);
        HTMLTemplateString = HTMLTemplateString.replace(
            elmnt.outerHTML,
            newElement.outerHTML
        );
    });

    return HTMLTemplateString;
};


