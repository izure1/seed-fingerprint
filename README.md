# seed-fingerprint

`seed-fingerprint` is a library that creates a hash that can identify users based on seeds.

The library has gained a lot of inspiration from the [https://github.com/fingerprintjs/fingerprintjs](https://github.com/fingerprintjs/fingerprintjs), and [https://github.com/pjanczyk/simple-fingerprint](https://github.com/pjanczyk/simple-fingerprint) libraries. Thank you.

For example, you may want to use fingerprints instead of tokens, but the user's finger prints can get the same value on all websites. It is not good for security because the attacker can steal the user's finger print.

`seed-fingerprint` uses seeds to generate a hash that can identify the user.

## Demo

[https://izure1.github.io/seed-fingerprint/sample.html](https://izure1.github.io/seed-fingerprint/sample.html)

## Usage

### Docs

[https://izure1.github.io/seed-fingerprint](https://izure1.github.io/seed-fingerprint)

### Advanced usage

```
import { create } from 'seed-fingerprint';

const seed = 'hello';
const fingerprint = create(seed);

const id = await fingerprint.get();
```

### Bundle file usage

```
// load
<script src="your-seed-fingerprint-library-path/bundle/index.js"></script>

// script
const seed = 'hello';
const fingerprint = window.seedFingerprint.create(seed);

const id = await fingerprint.get();
```

`fingerprint` has the following components: Each component returns a promise.

```
SeeedFingerprint {
    component: {
        canvas: {
            canvas2dRender: string
        },
        date: {
            timezoneOffset: number
        },
        font: {
            availableFonts: string[]
        },
        header: {
            header: {
                Accept: string
                Accept-Encoding: string
                Accept-Language: string
                User-Agent: string
            },
            agent: {
                ip: string
                uag: string
                loc: string
            }
        },
        navigator: {
            cookieEnabled: boolean
            hardwareConcurrency: number
            maxTouchPoints: number
            language: string
            languages: string[]
            plugins: {
                [key: string]: string
            }
            supportedConstraint: {
                [key: string]: boolean
            }
        },
        screen: {
            colorDepth: number
            width: number
            height: number
        },
        webgl: {
            webglRenderer: string
            webglRender: string
        },
    }
}
```
