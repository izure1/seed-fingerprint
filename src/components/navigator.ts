interface NavigatorComponentResult {
  cookieEnabled: boolean
  hardwareConcurrency: number
  maxTouchPoints: number
  language: string
}

export async function component(seed: string): Promise<NavigatorComponentResult> {
  let {
    cookieEnabled,
    hardwareConcurrency,
    maxTouchPoints,
    language,
  } = navigator

  language = language.split('-')[0].toLowerCase()

  return {
    cookieEnabled,
    hardwareConcurrency,
    maxTouchPoints,
    language,
  }
}
