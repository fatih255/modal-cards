
type Props = {
    selector: string,
    condition?: 'ifnotcentered'
}
export default function centerScroll({ selector, condition }: Props) {

    const element = document.querySelector(selector) as HTMLElement

    let conditions = true
    if (condition)
        switch (condition) {
            case 'ifnotcentered':
                conditions = (element.scrollTop !== (element.scrollHeight - element.clientHeight) / 2)
                break;
        }

    if (conditions) {
        element.scrollTo({
            top: (element.scrollHeight - element.clientHeight) / 2,
            behavior: "smooth"
        })
    }



}