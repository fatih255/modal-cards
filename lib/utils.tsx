import { ModalType } from 'redux/slices/modal';
import { store } from 'redux/store';
import colors from 'tailwindcss/colors'


const twColors = colors

function scrollStep(step: string) {

  var el = document.querySelector(`[data-step="${step}"]`) as HTMLElement
  el.scrollIntoView({ behavior: "smooth" });
}

function conditionalRender(condition: string | null | undefined, jsx: JSX.Element) {
  return condition ? jsx : <></>
}

//generate code method
function generateCode(): {} {

  const { settings, activedSettings } = store.getState().modal
  

  const activeSettingsValues = Object
    .keys(settings)
    .filter(setting => activedSettings.includes(setting as keyof ModalType['settings']))
    .map(setting => Object({ [setting]: settings[setting as keyof ModalType['settings']] }))
    .reduce((acc, c) => Object({ ...acc, ...Object.assign(acc, c) }), {})

  const modalHTML = document.getElementById("layout")?.outerHTML
  const generatedObj = {
    html: modalHTML,                //modal layout html
    settings: activeSettingsValues  //this value return activated settings values
  }

  return generatedObj
}






/*
    ---USAGE--- makeStickyContainer function

    "selector" parameter is the name of the classes whose position will be fixed
    if you want a scrolling fixed container you can append the named classname of .scrollable-sticky to 
    the fixed container of beside, Therefore fixed container will be scrollable
    no toggle break when scrolling

    *** if you have nested stickies  you need use div structure like below ***
                
              <div className="dosticky"> 
                <NumberItem value="2 Appearance (Size, colors, logo)" />  -> first child element get sticky
              </div>
                
                I hope I can finish the case while trying to do my best. * no toggle break when scrolling
                    -who knows maybe I'll do the npm package on this
                    --calculated any height value so smoothy effects :)

*/
function makeStickyContainer(selector: string, nestedStickyBgColor: string = "white", nestedStickyHeight: number = 100, fineAdjustment: { crossTop: number, crossSticky: number } = { crossTop: 0, crossSticky: 0 }, closeStickySeletor?: string) {

  type containerValuesType = { container: HTMLElement, sticky: number, rect: DOMRect }[]

  const fixedContainerInfos: containerValuesType = []
  const heightDivTopValues: string[] = []
  const heightDivAreaSizes: string[] = []
  let closeStickyElement: HTMLElement | null = null;
  if (closeStickySeletor) {
    const closeSticky = document.querySelector(closeStickySeletor) as HTMLElement
    closeStickyElement = closeSticky
  }

  //fixed content
  let heightDiv = document.createElement("div") as HTMLDivElement;
  let nestedStickyBgDiv = document.createElement("div") as HTMLDivElement;
  //nested Sticky background div
  nestedStickyBgDiv.classList.add("sticky-nested-background")
  nestedStickyBgDiv.style.backgroundColor = nestedStickyBgColor
  nestedStickyBgDiv.style.position = "absolute"
  nestedStickyBgDiv.style.width = "100%"
  nestedStickyBgDiv.style.height = nestedStickyHeight + "px"
  nestedStickyBgDiv.style.margin = "auto"
  nestedStickyBgDiv.style.zIndex = "-1"
  nestedStickyBgDiv.style.inset = "0"
  // nestedStickyBgDiv.style.transform = "translateY(-20%)"
  //height div
  heightDiv.classList.add("sticky-fixed-height")


  document.querySelectorAll(selector).forEach((element, index) => {
    const container = element as HTMLElement;
    const nestedSticky = container.parentElement?.classList.contains(selector.replace(".", "")) || container.parentElement?.parentElement?.classList.contains(selector.replace(".", ""))

    let sticky = container.offsetTop

    const isScrollable = container.classList.contains("scrollable-sticky")
    const containerRect = container.getBoundingClientRect()

    if (isScrollable) return container.setAttribute("style", ` width:${containerRect.width}px; flex:none `)

    if (nestedSticky) {

      const currentStyle = window.getComputedStyle(container)
      heightDivTopValues.push(container.style.top)
      heightDivAreaSizes.push(parseInt(currentStyle.height) + parseInt(currentStyle.marginTop) + parseInt(currentStyle.marginBottom) + "px")

      heightDiv.style.height = heightDivAreaSizes[index]
      heightDiv.style.top = heightDivTopValues[index]
      nestedStickyBgDiv.style.top = heightDivTopValues[index]

    }

    fixedContainerInfos.push({ container, sticky, rect: containerRect })
  })

  window.onscroll = function () {
    fixedContainerInfos && doFixContainers(fixedContainerInfos)
  };


  let addednestedStickyContainers = false
  function doFixContainers(values: containerValuesType) {
    values.forEach(({ container, sticky, rect }, index) => {

      //support 2d nested
      const nestedSticky = container.parentElement?.classList.contains(selector.replace(".", "")) || container.parentElement?.parentElement?.classList.contains(selector.replace(".", ""))

      let stickyselection = sticky
      if (nestedSticky) {
        stickyselection = stickyselection + fineAdjustment.crossSticky

      }

      if (closeStickyElement && document.documentElement.scrollTop + container.offsetHeight > closeStickyElement.offsetTop) {
        nestedSticky && container.children[0].setAttribute("style", `display:none `)
        !nestedSticky && container.setAttribute("style", `position:absolute; top:${closeStickyElement.offsetTop - container.offsetHeight}px; left:${rect.left}px; width:${rect.width}px;`)
        return
      }
      if (document.documentElement.scrollTop > stickyselection) {
        !nestedSticky && container.setAttribute("style", ` position: fixed; top:0; left:${rect.left}px; width:${rect.width}px; height:${rect.height}px; `)



        if (nestedSticky) {
          container.children[0].setAttribute("style", ` position: fixed; top:${fineAdjustment.crossTop}px; left:${rect.left}px; width:${container.children[0].getBoundingClientRect().width}px; height:${nestedStickyHeight}px;   z-index:9999`)
          if (addednestedStickyContainers) {
            if (!container.parentElement?.offsetLeft) return

            nestedStickyBgDiv.style.width = container.parentElement?.offsetLeft + container.parentElement?.offsetWidth + "px"
            nestedStickyBgDiv.style.transform = `translateX(${-container.offsetLeft + "px"})`
            container.append(heightDiv)
            container.children[0].append(nestedStickyBgDiv)

          }
        }

      } else {
        if (nestedSticky) {
          container.setAttribute("style", `pointer-events:none; position:relative; width:100%; height:${heightDivAreaSizes[index]}`)
          return container.children[0].setAttribute("style", ` z-index:-1; position:absolute; width:100%;`)
        }
        container.removeAttribute("style")
      }
    })
    addednestedStickyContainers = true
  }
}

/*
 function squareBracketValue(twbrackedclass: string) {
  const value = /\[(.*)px\]/g.exec(twbrackedclass)?.[1]
  return Number(value) ?? 0
}

*/

export { twColors, scrollStep, conditionalRender, makeStickyContainer, generateCode }