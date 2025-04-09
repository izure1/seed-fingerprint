# seed-fingerprint

[![](https://data.jsdelivr.com/v1/package/npm/seed-fingerprint/badge)](https://www.jsdelivr.com/package/npm/seed-fingerprint)

`seed-fingerprint` is a library that creates a hash that can identify users based on seeds.

For example, you may want to use fingerprints instead of tokens, but the user's finger prints can get the same value on all websites. It is not good for security because the attacker can steal the user's finger print.

`seed-fingerprint` uses seeds to generate a hash that can identify the user.

## Demo

[https://izure1.github.io/seed-fingerprint](https://izure1.github.io/seed-fingerprint)

## Usage

### Node.js (cjs)

```typescript
import { create } from 'seed-fingerprint'

const seed = 'hello'
const fingerprint = create(seed)

const id = await fingerprint.get()
```

### Browser (esm)

```typescript
<script type="module">
  import { create } from 'https://cdn.jsdelivr.net/npm/seed-fingerprint@2/+esm'

  const seed = 'hello'
  const fingerprint = create(seed)

  const id = await fingerprint.get()
</script>
```

`fingerprint` has the following components: Each component returns a promise.

```typescript
SeedFingerprintComponent {
  canvas: {
    canvas2dRender: string
  },
  date: {
    timezoneOffset: number
    timezone: string
  },
  font: {
    availableFonts: string[]
  },
  header: {
    agent: {
      ip: string
      loc: string
    }
  },
  navigator: {
    cookieEnabled: boolean
    hardwareConcurrency: number
    maxTouchPoints: number
    language: string
  },
  screen: {
    colorDepth: number
    width: number
    height: number
    devicePixelRatio: number
  },
  webgl: {
    webglRenderer: string
    webglRender: string
  },
  audio: {
    fingerprint: string
  },
  crypto: {
    hex: string
  },
  connection: {
    information: {
      effectiveType: string
      downlink: number
      rtt: number
      saveData: boolean
    } | null
  }
}
```

You can specify components to exclude using the `option.excludes` argument when calling the `create` function.

For example, the **header** component requires an internet connection.  
Therefore, you can exclude this component by writing `create(seed, { excludes: ['header'] })`.

## Excluding Volatile Components

Components are used to identify individuals, but using too many can paradoxically make the fingerprint change easily. For example, Chrome and Firefox might produce different fingerprints. This is because browser settings differ, which can lead to different component values.

Therefore, to reliably identify users, it's advisable to use only stable hardware information that doesn't change easily. You can do this as follows:

```typescript
const seed = 'hello'
const fingerprint = create(seed, {
  excludes: [
    'audio',
    'canvas',
    'connection',
    'webgl',
  ]
})

const id = await fingerprint.get()
```

The code above identifies the user by excluding the **audio**, **canvas**, **connection**, and **webgl** components, which can often have different values depending on the browser.

However, be aware that using fewer components increases the probability of fingerprint collisions (i.e., different users having the same fingerprint).

## LICENSE

MIT LICENSE
