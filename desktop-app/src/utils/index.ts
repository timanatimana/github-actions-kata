// @ts-ignore
export function sum(a: number, b: number, c: number | undefined = undefined) {
  if (c !== undefined) {
    return a + b + c;
  } else {
    return a + b;
  }
}
