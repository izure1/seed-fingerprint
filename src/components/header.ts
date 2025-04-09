import type { Json, Tuple } from '../types/index'

interface HeaderComponentResult {
  agent: TracedAgent|null
}

interface TracedAgent extends Json {
  'ip': string
  'loc': string
}

const agentUri  = 'https://www.cloudflare.com/cdn-cgi/trace'

function getSafetyValue<T>(origin: T, properties: string[]): T {
  const result: T = { ...origin }
  for (const i in origin) {
    if (properties.includes(i)) {
      continue
    }
    delete result[i]
  }
  return result
}

function parseTOML<T extends Json>(toml: string): T {
  const tuples: Tuple[] = toml.split(/\r\n|\n/g).map((query: string): Tuple => {
    return query.split('=') as Tuple
  })
  const result: Json = {}
  for (const [ property, value ] of tuples) {
    result[property] = value
  }
  return result as T
}

export async function agent(): Promise<TracedAgent|null> {
  try {
    const response  = await fetch(agentUri)
    const text = await response.text()

    const acceptAgent = [ 'ip', 'loc' ]
    const tracedAgent = parseTOML<TracedAgent>(text)
    
    return getSafetyValue(tracedAgent, acceptAgent)
  } catch(e) {
    return null
  }
}

export async function component(seed: string): Promise<HeaderComponentResult> {
  return {
    agent: await agent()
  }
}
