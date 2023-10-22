
type Mods = Record<string, boolean | string>;

export function className(cls: string, mods: Mods, additional: string[]) {
    return [
        cls,
        ...additional,
        Object.entries(mods)
            .filter(([cls, value]) => Boolean(value))
            .map(([cls]) => cls)
    ]
        .join(" ");
}