interface CryptoComponentResult {
  hex: string
}

async function getCryptoFingerprint(seed: string): Promise<string> {
  const data = new TextEncoder().encode("Fingerprint Test");
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
  return hashHex
}

export async function component(seed: string): Promise<CryptoComponentResult> {
  return {
    hex: await getCryptoFingerprint(seed)
  }
}
