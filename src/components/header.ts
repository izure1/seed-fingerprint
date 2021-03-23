export interface Header extends Json {
    'Accept': string;
    'Accept-Encoding': string;
    'Accept-Language': string;
    'User-Agent': string;
}

export interface TracedAgent extends Json {
    'ip': string;
    'loc': string;
}

export interface HeaderCgiUriResult extends Json {
    headers: Header;
}

const headerUri = 'https://httpbin.org/headers';
const agentUri  = 'https://www.cloudflare.com/cdn-cgi/trace';

function getSafetyValue<T>(origin: T, properties: string[]): T {
    const result: T = { ...origin };
    for (const i in origin) {
        if (properties.includes(i)) {
            continue;
        }
        delete result[i];
    }
    return result;
}

function parseTOML<T extends Json>(toml: string): T {
    const tuples: Tuple[] = toml.split(/\r\n|\n/g).map((query: string): Tuple => {
        return query.split('=') as Tuple;
    });
    const result: Json = {};
    for (const [ property, value ] of tuples) {
        result[property] = value;
    }
    return result as T;
}

export async function header(): Promise<Header|null> {
    try {
        const response      = await fetch(headerUri);
        const { headers }   = await response.json() as HeaderCgiUriResult;

        const acceptHeaders: string[] = [ 'Accept', 'Accept-Encoding', 'Accept-Language', 'User-Agent' ];
        return getSafetyValue<Header>(headers, acceptHeaders);
    } catch(e) {
        return null;
    }
}

export async function agent(): Promise<TracedAgent|null> {
    try {
        const response      = await fetch(agentUri);
        const text: string  = await response.text();

        const acceptAgent: string[] = [ 'ip', 'loc' ];
        const tracedAgent: TracedAgent = parseTOML<TracedAgent>(text);
        
        return getSafetyValue(tracedAgent, acceptAgent);
    } catch(e) {
        return null;
    }
}

export async function component() {
    return {
        header: await header(),
        agent: await agent(),
    };
}