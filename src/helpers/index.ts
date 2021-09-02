export function textOverflow(text: string, wc?: number): string | null {
    const wordCount = 300;

    return text ? text.slice(0, wc || wordCount) + '...' : null;
}
