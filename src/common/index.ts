import { SeedFingerprint } from './SeedFingerprint';

export function create(seed: string): SeedFingerprint {
    return new SeedFingerprint(seed);
}