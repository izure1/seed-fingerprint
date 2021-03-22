export interface Header extends Json {
    'Accept': string;
    'Accept-Encoding': string;
    'Accept-Language': string;
    'User-Agent': string;
}
export interface TracedAgent extends Json {
    'ip': string;
    'uag': string;
    'loc': string;
}
export interface HeaderCgiUriResult extends Json {
    headers: Header;
}
export declare function header(): Promise<Header | null>;
export declare function agent(): Promise<TracedAgent | null>;
export declare function component(): Promise<{
    header: Header | null;
    agent: TracedAgent | null;
}>;
