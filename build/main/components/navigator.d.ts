export declare function getPlugins(): string[];
export declare function getSupportedConstraints(): MediaTrackSupportedConstraints;
export declare function component(): Promise<{
    cookieEnabled: boolean;
    hardwareConcurrency: number;
    maxTouchPoints: number;
    language: string;
    languages: readonly string[];
    plugins: string[];
    supportedConstraint: MediaTrackSupportedConstraints;
}>;
