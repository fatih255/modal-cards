
type Props = {
    selector: string
}
export default function centerScroll({ selector }: Props) {
console.log("rr")
    const element = document.querySelector(selector) as HTMLElement
    
    element.scrollTo({
        top:( element.scrollHeight-element.clientHeight) / 2,
    })


}