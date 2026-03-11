
export function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
  if (val === undefined || val === null) {
    throw new Error(`Expected 'val' to be defined, but received ${val}`);
  }
}


export const sleep = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

