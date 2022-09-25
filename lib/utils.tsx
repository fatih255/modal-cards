import colors from 'tailwindcss/colors'

function scrollStep(step: String) {

  var el = document.querySelector(`[data-step="${step}"]`) as HTMLElement
  el.scrollIntoView({ behavior: "smooth" });
}

function conditionalRender(condition: string | null | undefined, jsx: JSX.Element) {
  return condition ? jsx : <></>
}

const twColors = colors



export { scrollStep, conditionalRender, twColors }