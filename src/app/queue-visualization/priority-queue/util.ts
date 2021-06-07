export interface CompareFunction<T> {
    (a: T, b: T): number;
}

export function defaultCompare<T>(a:T, b:T): number {
    if (a < b) return -1;
    else if (a === b) return 0;
    else return 1;
}