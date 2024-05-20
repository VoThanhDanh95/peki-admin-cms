export const isOneOf = <Type extends string | number | boolean>(list: readonly Type[]) =>
    (value: unknown): value is Type => list.some(item => value === item);