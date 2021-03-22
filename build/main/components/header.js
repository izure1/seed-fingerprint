const headerUri = 'https://httpbin.org/headers';
const agentUri = 'https://www.cloudflare.com/cdn-cgi/trace';
function getSafetyValue(origin, properties) {
    const result = { ...origin };
    for (const i in origin) {
        if (properties.includes(i)) {
            continue;
        }
        delete result[i];
    }
    return result;
}
function parseTOML(toml) {
    const tuples = toml.split(/\r\n|\n/g).map((query) => {
        return query.split('=');
    });
    const result = {};
    for (const [property, value] of tuples) {
        result[property] = value;
    }
    return result;
}
export async function header() {
    try {
        const response = await fetch(headerUri);
        const { headers } = await response.json();
        const acceptHeaders = ['Accept', 'Accept-Encoding', 'Accept-Language', 'User-Agent'];
        return getSafetyValue(headers, acceptHeaders);
    }
    catch (e) {
        return null;
    }
}
export async function agent() {
    try {
        const response = await fetch(agentUri);
        const text = await response.text();
        const acceptAgent = ['ip', 'uag', 'loc'];
        const tracedAgent = parseTOML(text);
        return getSafetyValue(tracedAgent, acceptAgent);
    }
    catch (e) {
        return null;
    }
}
export async function component() {
    return {
        header: await header(),
        agent: await agent(),
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCQSxNQUFNLFNBQVMsR0FBRyw2QkFBNkIsQ0FBQztBQUNoRCxNQUFNLFFBQVEsR0FBSSwwQ0FBMEMsQ0FBQztBQUU3RCxTQUFTLGNBQWMsQ0FBSSxNQUFTLEVBQUUsVUFBb0I7SUFDdEQsTUFBTSxNQUFNLEdBQU0sRUFBRSxHQUFHLE1BQU0sRUFBRSxDQUFDO0lBQ2hDLEtBQUssTUFBTSxDQUFDLElBQUksTUFBTSxFQUFFO1FBQ3BCLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN4QixTQUFTO1NBQ1o7UUFDRCxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNwQjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBaUIsSUFBWTtJQUMzQyxNQUFNLE1BQU0sR0FBWSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQWEsRUFBUyxFQUFFO1FBQ3hFLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQVUsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNILE1BQU0sTUFBTSxHQUFTLEVBQUUsQ0FBQztJQUN4QixLQUFLLE1BQU0sQ0FBRSxRQUFRLEVBQUUsS0FBSyxDQUFFLElBQUksTUFBTSxFQUFFO1FBQ3RDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUM7S0FDNUI7SUFDRCxPQUFPLE1BQVcsQ0FBQztBQUN2QixDQUFDO0FBRUQsTUFBTSxDQUFDLEtBQUssVUFBVSxNQUFNO0lBQ3hCLElBQUk7UUFDQSxNQUFNLFFBQVEsR0FBUSxNQUFNLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3QyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUssTUFBTSxRQUFRLENBQUMsSUFBSSxFQUF3QixDQUFDO1FBRWxFLE1BQU0sYUFBYSxHQUFhLENBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLFlBQVksQ0FBRSxDQUFDO1FBQ2pHLE9BQU8sY0FBYyxDQUFTLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQztLQUN6RDtJQUFDLE9BQU0sQ0FBQyxFQUFFO1FBQ1AsT0FBTyxJQUFJLENBQUM7S0FDZjtBQUNMLENBQUM7QUFFRCxNQUFNLENBQUMsS0FBSyxVQUFVLEtBQUs7SUFDdkIsSUFBSTtRQUNBLE1BQU0sUUFBUSxHQUFRLE1BQU0sS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sSUFBSSxHQUFZLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTVDLE1BQU0sV0FBVyxHQUFhLENBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUUsQ0FBQztRQUNyRCxNQUFNLFdBQVcsR0FBZ0IsU0FBUyxDQUFjLElBQUksQ0FBQyxDQUFDO1FBRTlELE9BQU8sY0FBYyxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztLQUNuRDtJQUFDLE9BQU0sQ0FBQyxFQUFFO1FBQ1AsT0FBTyxJQUFJLENBQUM7S0FDZjtBQUNMLENBQUM7QUFFRCxNQUFNLENBQUMsS0FBSyxVQUFVLFNBQVM7SUFDM0IsT0FBTztRQUNILE1BQU0sRUFBRSxNQUFNLE1BQU0sRUFBRTtRQUN0QixLQUFLLEVBQUUsTUFBTSxLQUFLLEVBQUU7S0FDdkIsQ0FBQztBQUNOLENBQUMifQ==