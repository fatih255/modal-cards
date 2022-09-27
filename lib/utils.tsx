import colors from 'tailwindcss/colors'

function scrollStep(step: string) {

  var el = document.querySelector(`[data-step="${step}"]`) as HTMLElement
  el.scrollIntoView({ behavior: "smooth" });
}

function conditionalRender(condition: string | null | undefined, jsx: JSX.Element) {
  return condition ? jsx : <></>
}

const twColors = colors


/*
 function squareBracketValue(twbrackedclass: string) {
  const value = /\[(.*)px\]/g.exec(twbrackedclass)?.[1]
  return Number(value) ?? 0
}

*/

export { scrollStep, conditionalRender, twColors }