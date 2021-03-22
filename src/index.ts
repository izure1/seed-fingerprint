
import { HmacSHA256 } from 'crypto-js';

import * as canvas from './components/canvas';
import * as date from './components/date';
import * as font from './components/font';
import * as header from './components/header';
import * as navigator from './components/navigator';
import * as screen from './components/screen';
import * as webgl from './components/webgl';

class SeedFingerprint {
    readonly seed: string;
    constructor(seed: string) {
        this.seed = seed;
    }

    get component() {
        return {
            canvas: canvas.component(this.seed),
            date: date.component(),
            font: font.component(),
            header: header.component(),
            navigator: navigator.component(),
            screen: screen.component(),
            webgl: webgl.component(),
            *[Symbol.iterator]() {
                yield this.canvas;
                yield this.date;
                yield this.font;
                yield this.header;
                yield this.navigator;
                yield this.screen;
                yield this.webgl;
            }
        };
    }

    async get(): Promise<string> {
        const components: Json[] = [];
        for await (const component of this.component) {
            components.push(component as unknown as Json);
        }
        const text: string = JSON.stringify(components);
        return HmacSHA256(text, this.seed).toString();
    }
}

export function create(seed: string): SeedFingerprint {
    return new SeedFingerprint(seed);
}