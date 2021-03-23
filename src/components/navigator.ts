export function getPlugins(): string[] {
    const plugins: string[] = [];
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

export async function component() {
    const {
        cookieEnabled,
        hardwareConcurrency,
        maxTouchPoints,
        language,
        languages,
    } = navigator;

    return {
        cookieEnabled,
        hardwareConcurrency,
        maxTouchPoints,
        language,
        languages,
        plugins: getPlugins()
    };
}