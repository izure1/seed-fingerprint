import { hmac, sha256 } from 'hash.js';

import * as canvas from '../components/canvas';
import * as date from '../components/date';
import * as font from '../components/font';
import * as header from '../components/header';
import * as navigator from '../components/navigator';
import * as screen from '../components/screen';
import * as webgl from '../components/webgl';

type ResolvedArg<T> = T extends PromiseLike<infer U> ? U : T;

interface SeedFingerprintComponent {
    canvas:     ReturnType<typeof canvas.component>;
    date:       ReturnType<typeof date.component>;
    font:       ReturnType<typeof font.component>;
    header:     ReturnType<typeof header.component>;
    navigator:  ReturnType<typeof navigator.component>;
    screen:     ReturnType<typeof screen.component>;
    webgl:      ReturnType<typeof webgl.component>;
}

type ResolvedSeedFingerprintComponent = {
    [K in keyof SeedFingerprintComponent]: ResolvedArg<SeedFingerprintComponent[K]>
}

interface SeedFingerprintComponentIterator extends SeedFingerprintComponent {
    [Symbol.iterator](): Generator<Promise<unknown>>;
}

export interface SeedFingerprintResult {
    /** The fingerprint of the user. */
    id: string;
    /** List of components used to create fingerprints for users. */
    component: ResolvedSeedFingerprintComponent;
}

export class SeedFingerprint {
    readonly seed: string;
    constructor(seed: string) {
        this.seed = seed;
    }

    private get component(): SeedFingerprintComponentIterator {
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

    /**
     * Gets the fingerprint of the user. This is the same as `this.result().id`.
     */
    async get(): Promise<string> {
        const { id } = await this.result();
        return id;
    }

    /**
     * Gets the user's fingerprint and component.
     */
    async result(): Promise<SeedFingerprintResult> {
        const component: any = {};
        const copy: SeedFingerprintComponentIterator = this.component;
        const keys: string[] = Object.keys(copy);
        let i = 0;
        for (const result of copy) {
            const property: string = keys[i++];
            component[property] = await result;
        }
        const text: string = JSON.stringify(component);
        const id: string = hmac(sha256 as any, this.seed).update(text).digest('hex');

        return { id, component };
    }
}