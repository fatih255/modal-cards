export default function getDeviceType() {
  let isMobile = window.matchMedia('only screen and (max-width: 760px)').matches

  return isMobile ? 'Mobile' : 'Desktop'
}
