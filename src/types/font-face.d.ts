// File: src/types/font-face.d.ts
// Spec: https://www.w3.org/TR/css-font-loading/
export {}

declare global {
  interface Document {
    fonts: FontFaceSet
  }

  type CSSOMString = string;
  type FontFaceLoadStatus = 'unloaded' | 'loading' | 'loaded' | 'error';
  type FontFaceSetStatus = 'loading' | 'loaded';

  interface FontFaceDescriptors {
    family: CSSOMString;
    style: CSSOMString;
    weight: CSSOMString;
    stretch: CSSOMString;
    unicodeRange: CSSOMString;
    variant: CSSOMString;
    featureSettings: CSSOMString;
  }

  class FontFace implements FontFaceDescriptors {
    constructor(family: string, source: string | ArrayBuffer, descriptors?: FontFaceDescriptors);
    readonly status: FontFaceLoadStatus;
    readonly loaded: Promise<FontFace>;
    family: CSSOMString;
    style: CSSOMString;
    weight: CSSOMString;
    stretch: CSSOMString;
    unicodeRange: CSSOMString;
    variant: CSSOMString;
    featureSettings: CSSOMString;
    variationSettings: CSSOMString;
    display: CSSOMString;
    load(): Promise<FontFace>;
  }

  interface FontFaceSet extends Iterable<FontFace> {
    readonly status: FontFaceSetStatus;
    readonly ready: Promise<FontFaceSet>;
    add(font: FontFace): void;
    check(font: string, text?: string): boolean; // throws exception
    load(font: string, text?: string): Promise<FontFace[]>
    delete(font: FontFace): void;
    clear(): void;
  }
}