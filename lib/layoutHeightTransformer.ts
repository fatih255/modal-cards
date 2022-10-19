type Props = {
  selectors: {
    from: string
    to: string
  }
  centeredBySelector?: string
  divideHeight?: number
}
export const layoutHeightTransformer = ({
  selectors: { from, to },
  divideHeight = 1,
}: Props) => {
  const fromElement = document.querySelector(from) as HTMLElement
  const heightFrom = fromElement.getBoundingClientRect().height

  const toElement = document.querySelector(to) as HTMLElement
  toElement.style.height = heightFrom / divideHeight + 'px'
}
