export function getPlugins() {
    const plugins = [];
    for (let i = 0, len = navigator.plugins.length; i < len; i++) {
        const plugin = navigator.plugins.item(i);
        if (plugin === null) {
            continue;
        }
        const { name } = plugin;
        plugins.push(name);
    }
    return plugins;
}
export function getSupportedConstraints() {
    return navigator.mediaDevices.getSupportedConstraints();
}
export async function component() {
    const { cookieEnabled, hardwareConcurrency, maxTouchPoints, language, languages, } = navigator;
    return {
        cookieEnabled,
        hardwareConcurrency,
        maxTouchPoints,
        language,
        languages,
        plugins: getPlugins(),
        supportedConstraint: getSupportedConstraints()
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvbmF2aWdhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sVUFBVSxVQUFVO0lBQ3RCLE1BQU0sT0FBTyxHQUFhLEVBQUUsQ0FBQztJQUM3QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMxRCxNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDakIsU0FBUztTQUNaO1FBQ0QsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQztRQUN4QixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3RCO0lBQ0QsT0FBTyxPQUFPLENBQUM7QUFDbkIsQ0FBQztBQUVELE1BQU0sVUFBVSx1QkFBdUI7SUFDbkMsT0FBTyxTQUFTLENBQUMsWUFBWSxDQUFDLHVCQUF1QixFQUFFLENBQUM7QUFDNUQsQ0FBQztBQUVELE1BQU0sQ0FBQyxLQUFLLFVBQVUsU0FBUztJQUMzQixNQUFNLEVBQ0YsYUFBYSxFQUNiLG1CQUFtQixFQUNuQixjQUFjLEVBQ2QsUUFBUSxFQUNSLFNBQVMsR0FDWixHQUFHLFNBQVMsQ0FBQztJQUVkLE9BQU87UUFDSCxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxRQUFRO1FBQ1IsU0FBUztRQUNULE9BQU8sRUFBRSxVQUFVLEVBQUU7UUFDckIsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUU7S0FDakQsQ0FBQztBQUNOLENBQUMifQ==