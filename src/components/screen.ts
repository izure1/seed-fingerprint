export async function component() {
    const {
        colorDepth,
        width,
        height
    } = screen;

    return {
        colorDepth,
        width,
        height,
    };
}