export type Indexed<T = unknown> = {
  [key in string]: T;
};

export function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }

  const parts = path.split('.');
  const [part, ...rest] = parts;
  if (parts.length === 1) {
    (object as Indexed)[part] = value;
  } else {
    if ((object as Indexed)[part] === undefined) {
      (object as Indexed)[part] = {};
    }
    set((object as Indexed)[part], rest.join('.'), value);
  }

  return object;
}

export function isEqual(a: any, b: any): boolean {
  if (a === null || a === undefined || b === null || b === undefined) {
    return a === b;
  }

  if (typeof a !== 'object' || typeof b !== 'object') {
    return a === b;
  }

  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  return aKeys.every((key) => isEqual(a[key], b[key]))
      && bKeys.every((key) => isEqual(a[key], b[key]));
}
