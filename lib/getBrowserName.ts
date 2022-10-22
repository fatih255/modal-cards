export default function getBrowserName() {
  // Get the user-agent string
  const userAgentString = navigator.userAgent

  // Detect Chrome
  let chromeAgent = userAgentString.indexOf('Chrome') > -1

  // Detect Internet Explorer
  const IExplorerAgent =
    userAgentString.indexOf('MSIE') > -1 || userAgentString.indexOf('rv:') > -1

  // Detect Firefox
  const firefoxAgent = userAgentString.indexOf('Firefox') > -1

  // Detect Safari
  let safariAgent = userAgentString.indexOf('Safari') > -1

  // Discard Safari since it also matches Chrome
  if (chromeAgent && safariAgent) safariAgent = false

  // Detect Opera
  const operaAgent = userAgentString.indexOf('OP') > -1

  // Discard Chrome since it also matches Opera
  if (chromeAgent && operaAgent) chromeAgent = false

  const browsers = {
    chromeAgent,
    IExplorerAgent,
    firefoxAgent,
    safariAgent,
    operaAgent,
  }
  const keys = Object.keys(browsers)
  const currentBrowserIndex = Object.values(browsers).findIndex(
    (x) => x === true,
  )
  const browser = keys[currentBrowserIndex]
  return browser.charAt(0).toUpperCase() + browser.slice(1).replace('Agent', '')
}
