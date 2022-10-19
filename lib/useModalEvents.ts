/*
Mouse Events
    afterXSeconds
    afterPercentageScroll
    exitIntentTargetting
*/

import { useEffect } from 'react'
import centerScroll from './centerScroll'

function useModalEvents(
  eventType: string,
  status?: boolean | null,
  value?: string,
) {
  useEffect(() => {
    const modalElement = document.getElementById('layout')
    const previewContainer = document.querySelector(
      '.preview-outer',
    ) as HTMLElement

    if (!modalElement) return

    const ifClosedOpen = () => {
      if (modalElement.classList.contains('close')) {
        modalElement.classList.remove('close')
        modalElement.classList.add('open')
      }
    }
    const openModalAction = () => {
      modalElement.classList.remove('close')
      modalElement.classList.add('open')
    }

    const closeModal = () => {
      modalElement.classList.remove('open')
      modalElement.classList.add('close')
    }

    const scrollToTop = () => {
      if (previewContainer.scrollTop > 0) {
        previewContainer.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
    }

    //event functions
    const mouseOutEvent = (e: MouseEvent) => {
      if (!e.relatedTarget && modalElement.classList.contains('close')) {
        openModalAction()
      }
    }
    const calculateScrollPercentageAndShow = (
      scrolltop: number,
      docheigh: number,
      winheight: number,
    ) => {
      const scrollTop = scrolltop
      const docHeight = docheigh
      const winHeight = winheight
      const scrollPercent = scrollTop / (docHeight - winHeight)
      const scrollPercentRounded = Math.round(scrollPercent * 100)

      //scrollPercentRounded < Number(value) && closeModal()
      scrollPercentRounded === 0 && closeModal()
      if (
        scrollPercentRounded === Number(value) &&
        modalElement.classList.contains('close')
      ) {
        openModalAction()
      }
    }

    const scrollEventOnPreviewContainer = () => {
      //for preview we need show on this scroll event on preview container scroll
      calculateScrollPercentageAndShow(
        previewContainer.scrollTop,
        previewContainer.scrollHeight,
        previewContainer.offsetHeight,
      )
    }
    const scrollEventOnDocument = () => {
      //for generate Code -- is calculating for doc element
      /* calculateScrollPercentageAndShow(window.scrollY, document.body.offsetHeight, window.innerHeight);
       */
    }

    let timer: NodeJS.Timeout | false = false
    const xSecondTimeOut = () => {
      timer =
        Number(value) > 0 &&
        setTimeout(() => {
          openModalAction()
        }, Number(value) * 1000)
    }

    let returnForStatusFalse: boolean | {} = false
    if (status === false) {
      switch (eventType) {
        case 'afterXSeconds':
          returnForStatusFalse = () => {
            timer && window.clearTimeout(timer)
            ifClosedOpen()
          }
          break
        case 'afterPercentageScroll':
          returnForStatusFalse = () => {
            window.removeEventListener('scroll', scrollEventOnDocument)
            previewContainer.removeEventListener(
              'scroll',
              scrollEventOnPreviewContainer,
            )
            centerScroll({
              selector: '.preview-outer',
              condition: 'ifnotcentered',
            })
            ifClosedOpen()
          }
          break
        case 'exitIntentTargetting':
          returnForStatusFalse = () =>
            document.removeEventListener('mouseout', mouseOutEvent)
          break
      }
    }

    if (typeof returnForStatusFalse === 'function')
      return returnForStatusFalse()

    switch (eventType) {
      case 'afterXSeconds':
        closeModal()
        xSecondTimeOut()
        break
      case 'afterPercentageScroll':
        scrollToTop()
        window.addEventListener('scroll', scrollEventOnDocument)
        previewContainer.addEventListener(
          'scroll',
          scrollEventOnPreviewContainer,
        )
        break
      case 'exitIntentTargetting':
        document.addEventListener('mouseout', mouseOutEvent)
        break
    }

    return () => {
      document.removeEventListener('mouseout', mouseOutEvent)
      window.removeEventListener('scroll', scrollEventOnDocument)
      previewContainer.removeEventListener(
        'scroll',
        scrollEventOnPreviewContainer,
      )
      timer && window.clearTimeout(timer)
    }
  }, [status, value, eventType])
}

export { useModalEvents }
