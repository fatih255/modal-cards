import React from 'react'
import colors from 'tailwindcss/colors'

const twColors = colors

function scrollStep(step: string) {
  const el = document.querySelector(`[data-step="${step}"]`) as HTMLElement
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth' })
}

function conditionalRender(
  condition: string | null | undefined,
  jsx: (conditiondata?: any) => JSX.Element,
) {
  return condition ? jsx(condition) : <></>
}





//link parser for specific button actions post request or redirect any link
export type LinkParserType = (
  | { text: string; linkURL?: string; postURL?: string }
  | string
)[]

function linkParser(
  texts: string[],
): ({ text: string; linkURL?: string; postURL?: string } | string)[] {
  const parsedTexts = texts.map((text) => {
    let contentText = text

    if (text.includes('@Link')) {
      const splitting = text.split('@Link')
      contentText = splitting[0].trim()
      const link = splitting[1].replace(':', '')
      return { text: contentText, linkURL: link }
    }

    if (text.includes('@Post')) {
      const splitting = text.split('@Post')
      contentText = splitting[0].trim()
      const postURL = splitting[1].replace(':', '')
      return { text: contentText, postURL: postURL }
    }

    return text
  })

  return parsedTexts
}

export { linkParser, twColors, scrollStep, conditionalRender }
