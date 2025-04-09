# seed-fingerprint

[![](https://data.jsdelivr.com/v1/package/npm/seed-fingerprint/badge)](https://www.jsdelivr.com/package/npm/seed-fingerprint)

`seed-fingerprint` is a library that creates a hash that can identify users based on seeds.

The library has gained a lot of inspiration from the [https://github.com/fingerprintjs/fingerprintjs](https://github.com/fingerprintjs/fingerprintjs), and [https://github.com/pjanczyk/simple-fingerprint](https://github.com/pjanczyk/simple-fingerprint) libraries. Thank you.

For example, you may want to use fingerprints instead of tokens, but the user's finger prints can get the same value on all websites. It is not good for security because the attacker can steal the user's finger print.

`seed-fingerprint` uses seeds to generate a hash that can identify the user.

## Demo

[https://izure1.github.io/seed-fingerprint](https://izure1.github.io/seed-fingerprint)

## Usage

### Node.js (cjs)

```javascript
import { create } from 'seed-fingerprint';

const seed = 'hello';
const fingerprint = create(seed);

const id = await fingerprint.get();
```

### Browser (esm)

```javascript
<script type="module">
  import { create } from 'https://cdn.jsdelivr.net/npm/seed-fingerprint@2/+esm'

  const seed = 'hello';
  const fingerprint = create(seed);

  const id = await fingerprint.get();
</script>
```

`fingerprint` has the following components: Each component returns a promise.

You can specify components to exclude using the `option.excludes` argument when calling the `create` function. For example, the **header** component requires an internet connection. Therefore, you can exclude this component by writing `create(seed, { excludes: ['header'] })`.

```javascript
SeedFingerprint {
  component: {
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
      }|null
    }
  }
}
```

## LICENSE

MIT LICENSE
