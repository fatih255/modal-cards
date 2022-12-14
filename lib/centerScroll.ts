type Props = {
  selector: string
  condition?: 'ifnotcentered'
  behavior?: ScrollBehavior
}
export default function centerScroll({
  selector,
  condition = undefined,
  behavior = 'smooth',
}: Props) {
  const element = document.querySelector(selector) as HTMLElement

  let conditions = true
  if (condition) {
    switch (condition) {
      case 'ifnotcentered':
        conditions =
          element.scrollTop !==
          (element.scrollHeight - element.clientHeight) / 2
        break
    }
  }

  if (conditions) {
    element.scrollTo({
      top: (element.scrollHeight - element.clientHeight) / 2,
      behavior: behavior,
    })
  }
}
