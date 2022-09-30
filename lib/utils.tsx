import colors from 'tailwindcss/colors'


const twColors = colors

function scrollStep(step: string) {

  var el = document.querySelector(`[data-step="${step}"]`) as HTMLElement
  el.scrollIntoView({ behavior: "smooth" });
}

function conditionalRender(condition: string | null | undefined, jsx: JSX.Element) {
  return condition ? jsx : <></>
}


/*
    ---USAGE--- 

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
function makeStickyContainer(selector: string, nestedStickyBgColor: string = "white") {

  type containerValuesType = { container: HTMLElement, sticky: number, rect: DOMRect }[]

  const fixedContainerInfos: containerValuesType = []
  const heightDivTopValues: string[] = []
  const heightDivAreaSizes: string[] = []


  //fixed content
  let heightDiv = document.createElement("div") as HTMLDivElement;
  let nestedStickyBgDiv = document.createElement("div") as HTMLDivElement;
  //nested Sticky background div
  nestedStickyBgDiv.classList.add("sticky-nested-background")
  nestedStickyBgDiv.style.backgroundColor = nestedStickyBgColor
  nestedStickyBgDiv.style.position = "absolute"
  nestedStickyBgDiv.style.width = "100%"
  nestedStickyBgDiv.style.height = "100%"
  nestedStickyBgDiv.style.margin = "auto"
  nestedStickyBgDiv.style.zIndex = "-1"
  nestedStickyBgDiv.style.inset = "0"
  nestedStickyBgDiv.style.transform = "translateY(-20%)"
  //height div
  heightDiv.classList.add("sticky-fixed-height")


  document.querySelectorAll(selector).forEach((element, index) => {
    const container = element as HTMLElement;
    const sticky = container.offsetTop;

    const isScrollable = container.classList.contains("scrollable-sticky")
    const containerRect = container.getBoundingClientRect()

    if (isScrollable) return container.setAttribute("style", ` width:${containerRect.width}px; flex:none `)

    const nestedSticky = container.parentElement?.classList.contains(selector.replace(".", "")) || container.parentElement?.parentElement?.classList.contains(selector.replace(".", ""))

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


      if (document.documentElement.scrollTop > sticky) {
        !nestedSticky && container.setAttribute("style", ` position: fixed; top:0; left:${rect.left}px; width:${rect.width}px; height:${rect.height}px; `)
        if (nestedSticky) {
          container.children[0].setAttribute("style", `margin:0;   position: fixed; top:0; left:${rect.left}px; width:${container.children[0].getBoundingClientRect().width}px; height:${rect.height}px;  z-index:9999`)
          if (addednestedStickyContainers) {
            container.append(heightDiv)
            container.children[0].append(nestedStickyBgDiv)
          }
        }

      } else {
        if (nestedSticky) {
          container.setAttribute("style", `position:relative; width:100%; height:${heightDivAreaSizes[index]}`)
          return container.children[0].setAttribute("style", `margin:0;   position:absolute; width:100%; height:${heightDivAreaSizes[index]}`)
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

export { twColors, scrollStep, conditionalRender, makeStickyContainer }