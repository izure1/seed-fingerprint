interface AudioComponentResult {
  fingerprint: string
}

async function audioFingerprint(): Promise<string> {
  const OfflineAudioContext = window.OfflineAudioContext || (window as any).webkitOfflineAudioContext
  if (!OfflineAudioContext) {
    return Promise.resolve('Not Supported')
  }
  const context = new OfflineAudioContext(1, 44100, 44100)

  const oscillator = context.createOscillator()
  oscillator.type = 'triangle'
  oscillator.frequency.setValueAtTime(10000, 0)

  const compressor = context.createDynamicsCompressor()
  compressor.threshold.setValueAtTime(-50, 0)
  compressor.knee.setValueAtTime(40, 0)
  compressor.ratio.setValueAtTime(12, 0)
  compressor.attack.setValueAtTime(0, 0)
  compressor.release.setValueAtTime(0.25, 0)

  oscillator.connect(compressor)
  compressor.connect(context.destination)
  oscillator.start(0)

  const renderedBuffer = await context.startRendering()
  let sum = 0
  const channelData = renderedBuffer.getChannelData(0)
  for (let i = 0; i < channelData.length; i++) {
    sum += Math.abs(channelData[i])
  }
  return sum.toString()
}

export async function component(seed: string): Promise<AudioComponentResult> {
  return {
    fingerprint: await audioFingerprint()
  }
}
