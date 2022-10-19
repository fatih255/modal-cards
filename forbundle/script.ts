import { ModalAlias } from 'components/modals'
import { ModalType } from 'redux/slices/modal'

type Props = {
  modalName: ModalAlias
  content: {
    texts: string[]
  }
  classes: string[]
  html: string
  settings: Partial<ModalType['settings']>
}

export default function modalCard({ html, settings }: Props) {
  var cssId = 'modalCardCSS'
  var head = document.getElementsByTagName('head')[0]
  var link = document.createElement('link')
  link.id = cssId
  link.rel = 'stylesheet'
  link.type = 'text/css'
  link.href =
    'https://leafy-mermaid-eb53cb.netlify.app/_next/static/css/8e0d75d4c6a1da72.css'
  link.media = 'all'
  head.appendChild(link)

  link.onload = async () => {
    document.body.insertAdjacentHTML('beforeend', html)

    // for close button trigger close event
    const modalCloseButton = document.querySelectorAll('.close-modal-action')
    modalCloseButton.forEach((closebutton) => {
      closebutton.addEventListener('click', closeModalAction)
    })

    //for trigger button actions
    const buttons = document.querySelectorAll('button')
    if (buttons.length > 0) {
      buttons.forEach((button) => {
        button.addEventListener('click', () => {
          //if have data post url
          const havePostURL = button.getAttribute('data-post-url')
          const haveLinkURL = button.getAttribute('data-link')

          if (havePostURL) {
            const data = button.getAttribute('data-value') as string
            fetch(havePostURL, { method: 'POST', body: data })
              .then((response) => response.json())
              .then((data) => console.log(data))
            closeModalAction()
          }
          if (haveLinkURL) {
            //if button action is redirect page
            window.location.href = button.getAttribute('data-link') ?? ''
          }
        })
      })
    }

    const modalElement = document.getElementById('layout') as HTMLElement
    if (!modalElement) return

    //fixed modal position and opacity 0
    modalElement.classList.add('for-generated')

    const ModalCloseEffects: any[] = [] // this array use when settings have effects during the closing
    let timer: number | NodeJS.Timeout | undefined
    let modalOpenedContidions = []
    let isModalOpened = sessionStorage.getItem('modalopened')
    let webHookData = new FormData()
    const clickedButtons: any = []
    // 1.Condition:  if modal is opened this session dont show again
    // 2.Condition:  if have traffic source setting check is have refferrer is same traffic source that entered input if not dont show modal
    // 3.Condition:  if browser language is not includes languages that entered input not show modal

    modalOpenedContidions.push(!isModalOpened)
    modalOpenedContidions.push(
      !settings.trafficSource || document.referrer === settings.trafficSource,
    )
    modalOpenedContidions.push(
      !settings.browserLanguages ||
        settings.browserLanguages.includes(navigator.language),
    )

    if (modalOpenedContidions.every((v) => v)) {
      //if not have any listener, show modal directly
      if (
        !settings.afterPercentageScroll &&
        !settings.exitIntentTargetting &&
        !settings.afterXSeconds
      ) {
        openModalAction()
      }

      Object.keys(settings).forEach((setting) => {
        switch (setting) {
          case 'afterPercentageScroll':
            window.addEventListener('scroll', scrollEventOnDocument)
            break
          case 'afterXSeconds':
            timer = setTimeout(() => {
              openModalAction()
            }, Number(settings.afterXSeconds) * 1000)
            break
          case 'exitIntentTargetting':
            if (typeof screen.orientation === 'undefined')
              document.addEventListener('mouseout', exitIntentTargetting)
            break
          case 'sendClickData':
            const modalButtons = modalElement.querySelectorAll('button')
            modalButtons.forEach((button) => {
              button.addEventListener('click', countClick)
            })
            ModalCloseEffects.push(
              webHookData.append('clicked_buttons[]', clickedButtons),
            )
            break
          case 'webHookUrl':
            ModalCloseEffects.push(sendDataToWebHook())
            break
          case 'visitorDevice':
            modalElement.classList.add(settings.visitorDevice as string)
            break
        }
      })
    }

    // event listeners functions

    //percentage scrolling show
    function scrollEventOnDocument() {
      let scrollTop = window.scrollY
      let docHeight = document.documentElement.offsetHeight
      let winHeight = window.innerHeight
      let scrollPercent = scrollTop / (docHeight - winHeight)
      let scrollPercentRounded = Math.round(scrollPercent * 100)
      // if(scrollPercentRounded < Number(value))
      if (scrollPercentRounded === Number(settings.afterPercentageScroll))
        openModalAction()
    }

    //exit indent targeting show modal
    function exitIntentTargetting(e: MouseEvent) {
      if (!e.relatedTarget) openModalAction()
    }

    //generate data functions

    function countClick(e: MouseEvent) {
      const target = e.target as HTMLElement
      if (!target) return

      clickedButtons.push(target.innerText)
      target.removeEventListener('click', countClick)
    }
    //send data to webhook
    function sendDataToWebHook() {
      if (!settings.webHookUrl) return
      fetch(settings.webHookUrl, { method: 'POST', body: webHookData })
        .then((response) => response.json())
        .then((data) => console.log(data))
    }

    //Modal Open/Close Functions

    //trigger open modal animation
    function openModalAction() {
      modalElement.classList.add('open')
      sessionStorage.setItem('modalopened', 'true')
      removeAllEvents()
    }

    //trigger close modal animation
    function closeModalAction() {
      modalElement.classList.remove('open')
      modalElement.classList.add('close')
      ModalCloseEffects.forEach((code) => code)
    }

    //remove all event listeners
    function removeAllEvents() {
      window.removeEventListener('scroll', scrollEventOnDocument)
      document.removeEventListener('mouseout', exitIntentTargetting)
      window.clearTimeout(timer)
    }
  }
}
