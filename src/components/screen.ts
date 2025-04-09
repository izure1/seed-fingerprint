interface ScreenComponentResult {
  colorDepth: number
  width: number
  height: number
  devicePixelRatio: number
}

export async function component(seed: string): Promise<ScreenComponentResult> {
  const {
    colorDepth,
    width,
    height,
  } = screen

  const devicePixelRatio = window.devicePixelRatio || 1

  return {
    colorDepth,
    width,
    height,
    devicePixelRatio,
  }
}