import { hmac, sha256 } from 'hash.js'

import * as canvas from './components/canvas'
import * as date from './components/date'
import * as font from './components/font'
import * as header from './components/header'
import * as webNavigator from './components/navigator'
import * as webScreen from './components/screen'
import * as webgl from './components/webgl'
import * as audio from './components/audio'
import * as webCrypto from './components/crypto'
import * as connection from './components/connection'

export interface SeedFingerprintComponent {
  canvas:     ReturnType<typeof canvas.component>
  date:       ReturnType<typeof date.component>
  font:       ReturnType<typeof font.component>
  header:     ReturnType<typeof header.component>
  navigator:  ReturnType<typeof webNavigator.component>
  screen:     ReturnType<typeof webScreen.component>
  webgl:      ReturnType<typeof webgl.component>
  audio:      ReturnType<typeof audio.component>
  crypto:     ReturnType<typeof webCrypto.component>
  connection: ReturnType<typeof connection.component>
}

type SeedFingerprintComponentKey = keyof SeedFingerprintComponent

type AwaitedSeedFingerprintComponent = {
  [K in keyof SeedFingerprintComponent]: Awaited<SeedFingerprintComponent[K]>
}

interface SeedFingerprintComponentIterator extends SeedFingerprintComponent {
  [Symbol.iterator](): Generator<Promise<unknown>>
}

export interface SeedFingerprintOption {
  /** List of components to exclude. */
  excludes?: SeedFingerprintComponentKey[]
}

export interface SeedFingerprintResult {
  /** The fingerprint of the user. */
  id: string
  /** List of components used to create fingerprints for users. */
  component: AwaitedSeedFingerprintComponent
}

export class SeedFingerprint {
  /**
   * The seed used to generate the fingerprint.
   */
  readonly seed: string
  /**
   * List of components to exclude.
   */
  readonly excludes?: SeedFingerprintComponentKey[]
  /**
   * @param seed The seed used to generate the fingerprint.
   * @param option List of components to exclude.
   */
  constructor(seed: string, option?: SeedFingerprintOption) {
    this.seed = seed
    this.excludes = option?.excludes
  }

  /**
   * Gets the component.
   */
  protected get component(): SeedFingerprintComponentIterator {
    const excludes = this.excludes ?? []
    const componentsMap = {
      canvas: canvas.component,
      date: date.component,
      font: font.component,
      header: header.component,
      navigator: webNavigator.component,
      screen: webScreen.component,
      webgl: webgl.component,
      audio: audio.component,
      crypto: webCrypto.component,
      connection: connection.component,
    }
    const res: any = {
      *[Symbol.iterator]() {
        for (const componentKey in this) yield this[componentKey]
      }
    }
    for (const componentKey in componentsMap) {
      const k = componentKey as SeedFingerprintComponentKey
      if (excludes.includes(k)) {
        continue
      }
      res[componentKey] = componentsMap[k](this.seed)
    }
    return res
  }

  /**
   * Gets the fingerprint of the user. This is the same as `this.result().id`.
   */
  async get(): Promise<string> {
    const { id } = await this.result()
    return id
  }

  /**
   * Gets the user's fingerprint and component.
   */
  async result(): Promise<SeedFingerprintResult> {
    const component: any = {}
    const information = this.component
    const keys = Object.keys(information)
    let i = 0
    for (const result of information) {
      const property = keys[i++]
      component[property] = await result
    }
    const text = JSON.stringify(component)
    const id = hmac(sha256 as any, this.seed).update(text).digest('hex')

    return { id, component }
  }
}
