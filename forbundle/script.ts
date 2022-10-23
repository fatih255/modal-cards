import { ModalAlias } from 'components/modals'
import getBrowserName from 'lib/getBrowserName'
import getDeviceType from 'lib/getDeviceType'
import getOperatingSystem from 'lib/getOperatingSystem'
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
  const cssId = 'modalCardCSS'
  const head = document.getElementsByTagName('head')[0]
  const link = document.createElement('link')
  link.id = cssId
  link.rel = 'stylesheet'
  link.type = 'text/css'
  link.href = `https://leafy-mermaid-eb53cb.netlify.app/styles/modal.css`
  link.media = 'all'
  head.appendChild(link)

  type formDataType = {
    selectedRadioButtonValue?: { name: string; value: string | null }
    textFields?: { name: string; value: string }[]
  }

  let formData: formDataType = {}
  const clickedButtons: string[] = []

  link.onload = async () => {
    document.body.insertAdjacentHTML('beforeend', html)

    // for close button trigger close event X icon
    const modalCloseButton = document.querySelectorAll('.close-modal-action')
    modalCloseButton.forEach((closebutton) => {
      closebutton.addEventListener('click', () => {
        closeModalAction(false)
      })
    })

    // for trigger button actions
    const buttons = document.querySelectorAll('button')
    if (buttons.length > 0) {
      buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
          clickedButtons.push((e.target as HTMLElement).innerText)
          //if have data post url
          const havePostURL = button.getAttribute('data-post-url')
          const haveLinkURL = button.getAttribute('data-link')
          const haveCloseModalAction = button.getAttribute('data-close-modal')
          const haveWebHookPostAction = button.getAttribute('data-webhook-post')

          if (havePostURL) {
            const data = button.getAttribute('data-value') as string
            fetch(havePostURL, { method: 'POST', body: data })
              .then((response) => response.json())
              .then((data) => console.log(data))
            closeModalAction()
          }
          if (haveLinkURL) {
            // if button action is redirect page
            window.location.href = button.getAttribute('data-link') ?? ''
          }
          // iftrigger close modal
          if (haveCloseModalAction) {
            closeModalAction(false)
          }
          if (haveWebHookPostAction) {
            closeModalAction()
          }
        })
      })
    }

    // iffor radio buttons
    const radioButtons = document.querySelectorAll('[data-radio-value]')

    if (radioButtons.length > 0) {
      radioButtons.forEach((radio) => {
        const defaultSelected = radio.querySelector('.selected-radio')
        if (defaultSelected) {
          formData = {
            ...formData,
            selectedRadioButtonValue: {
              name: 'selected-radio',
              value: radio.getAttribute('data-radio-value'),
            },
          }
        }
      })

      //for form submissions
      radioButtons.forEach((radio) => {
        radio.addEventListener('click', () => {
          const radioEye = radio.querySelector('.radio-eye')
          const previousSelected = document.querySelector('.selected-radio')
          if (previousSelected) {
            previousSelected.classList.remove('selected-radio')
            radioEye?.classList.remove('scale-[.4]')
          }

          if (!radio.firstChild) return

          const radioCircle = radio.firstChild as HTMLDivElement

          if (!radioCircle.classList.contains('selected-radio')) {
            (radio.firstChild as HTMLDivElement).classList.add(
              'selected-radio',
            )
            radioEye?.classList.add('scale-[.4]')

            formData = {
              ...formData,
              selectedRadioButtonValue: {
                name: 'selected-radio',
                value: radio.getAttribute('data-radio-value'),
              },
            }
          }
        })
      })
    }
    //for form submissions
    function getTextFields() {
      const textInputs = document.querySelectorAll('[data-text]')
      if (textInputs.length > 0) {
        textInputs.forEach((textInput) => {
          const target = textInput as HTMLInputElement
          formData['textFields'] = [
            ...(formData.textFields ?? []),
            { name: target.placeholder, value: target.value },
          ]
        })
      }
    }

    const modalElement = document.getElementById('layout') as HTMLElement
    if (!modalElement) return

    // fixed modal position and opacity 0
    modalElement.classList.add('for-generated')
    const ModalCloseSendDataEffects: (() => void)[] = []
    const ModalCloseEffects: (() => void)[] = [] // this array use when settings have effects during the closing
    let timer: number | NodeJS.Timeout | undefined
    const modalOpenedContidions = []
    const isModalOpened = sessionStorage.getItem('modalopened')

    type webHookDataType = {
      clickedButtons: string[] //get button innerText
      browserLanguage: readonly string[]
      browserName: string
      operatingSystem: string
      deviceType: string
      dateTime: string
      formData?: object
    }
    const webHookData: webHookDataType = {
      dateTime: '', // get date when send request - new Date(Date.now())
      browserLanguage: navigator.languages.filter((lang) => lang.length > 2),
      browserName: getBrowserName(),
      operatingSystem: getOperatingSystem(),
      deviceType: getDeviceType(),
      clickedButtons: [],
    }
    // 1.Condition:  if modal is opened this session dont show again
    // 2.Condition:  if have traffic source setting check is have refferrer is same traffic source that entered input if not dont show modal
    // 3.Condition:  if browser language is not includes languages that entered input not show modal

    modalOpenedContidions.push(!isModalOpened)
    modalOpenedContidions.push(
      !settings.trafficSource || document.referrer === settings.trafficSource,
    )
    modalOpenedContidions.push(
      !settings.browserLanguages ||
      settings.browserLanguages.some((lang) =>
        navigator.languages.includes(lang),
      ),
    )

    if (modalOpenedContidions.every((v) => v)) {
      // if not have any listener, show modal directly
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
            ModalCloseEffects.push(
              () => (webHookData.clickedButtons = clickedButtons),
            )
            break
          case 'sendFormSubmission':
            ModalCloseEffects.push(() => (webHookData.formData = formData))
            break
          case 'webHookUrl':
            ModalCloseEffects.push(
              () => getTextFields(),
              () => (webHookData.dateTime = new Date(Date.now()).toString()),
            )
            ModalCloseSendDataEffects.push(() => sendDataToWebHook())
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
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.offsetHeight
      const winHeight = window.innerHeight
      const scrollPercent = scrollTop / (docHeight - winHeight)
      const scrollPercentRounded = Math.round(scrollPercent * 100)
      // if(scrollPercentRounded < Number(value))
      if (scrollPercentRounded === Number(settings.afterPercentageScroll))
        openModalAction()
    }

    //exit indent targeting show modal
    function exitIntentTargetting(e: MouseEvent) {
      if (!e.relatedTarget) openModalAction()
    }

    //generate data functions

    /*
    function countClick(e: MouseEvent) {
      const target = e.target as HTMLButtonElement
      if (!target) return

      webHookData.clickedButtons.push(target.innerText)
      target.removeEventListener('click', countClick)
    }
     */
    //send data to webhook
    function sendDataToWebHook() {
      if (!settings.webHookUrl) return

      fetch(settings.webHookUrl, {
        method: 'POST',
        body: JSON.stringify(webHookData),
      })
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

    // trigger close modal animation
    function closeModalAction(useSideEffects = true) {
      modalElement.classList.remove('open')
      modalElement.classList.add('close')

      if (useSideEffects) {
        ModalCloseEffects.forEach((code) => code())

        ModalCloseSendDataEffects.forEach((code) => code())
        // console.log(webHookData)
      }
    }

    // remove all event listeners
    function removeAllEvents() {
      window.removeEventListener('scroll', scrollEventOnDocument)
      document.removeEventListener('mouseout', exitIntentTargetting)
      window.clearTimeout(timer)
    }
  }
}
