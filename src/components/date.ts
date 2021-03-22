function getTimezoneOffset(): number {
    const year: number = new Date().getFullYear();
    const a: number = new Date(year, 0, 1).getTimezoneOffset();
    const b: number = new Date(year, 6, 1).getTimezoneOffset();
    return Math.max(a, b);
}

export async function component() {
    return {
        timezoneOffset: getTimezoneOffset()
    };
}