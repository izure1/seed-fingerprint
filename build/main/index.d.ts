import * as header from './components/header';
declare class SeedFingerprint {
    readonly seed: string;
    constructor(seed: string);
    get component(): {
        canvas: Promise<{
            canvas2dRender: string | null;
        }>;
        date: Promise<{
            timezoneOffset: number;
        }>;
        font: Promise<{
            availableFonts: string[];
        }>;
        header: Promise<{
            header: header.Header | null;
            agent: header.TracedAgent | null;
        }>;
        navigator: Promise<{
            cookieEnabled: boolean;
            hardwareConcurrency: number;
            maxTouchPoints: number;
            language: string;
            languages: readonly string[];
            plugins: string[];
            supportedConstraint: MediaTrackSupportedConstraints;
        }>;
        screen: Promise<{
            colorDepth: number;
            width: number;
            height: number;
        }>;
        webgl: Promise<{
            webglRenderer: string | null;
            webglRender: string | null;
        }>;
        [Symbol.iterator](): Generator<Promise<{
            canvas2dRender: string | null;
        }> | Promise<{
            timezoneOffset: number;
        }> | Promise<{
            availableFonts: string[];
        }> | Promise<{
            header: header.Header | null;
            agent: header.TracedAgent | null;
        }> | Promise<{
            cookieEnabled: boolean;
            hardwareConcurrency: number;
            maxTouchPoints: number;
            language: string;
            languages: readonly string[];
            plugins: string[];
            supportedConstraint: MediaTrackSupportedConstraints;
        }> | Promise<{
            colorDepth: number;
            width: number;
            height: number;
        }> | Promise<{
            webglRenderer: string | null;
            webglRender: string | null;
        }>, void, unknown>;
    };
    get(): Promise<string>;
}
export declare function create(seed: string): SeedFingerprint;
export {};
