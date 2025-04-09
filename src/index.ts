import { SeedFingerprint, SeedFingerprintOption } from './SeedFingerprint'

export function create(seed: string, option?: SeedFingerprintOption): SeedFingerprint {
  return new SeedFingerprint(seed, option)
}
