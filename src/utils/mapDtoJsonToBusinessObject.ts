import _ from 'lodash';

type CamelCase<S extends string> = S extends `${infer P1}_${infer P2}${infer P3}`
  ? `${Lowercase<P1>}${Uppercase<P2>}${CamelCase<P3>}`
  : Lowercase<S>;

export type ToCamelCase<T extends Record<string, any> | readonly any[]> =
  T extends readonly any[]
    ? {
        [P in keyof T]: T[P] extends Record<string, any> | readonly any[]
          ? // eslint-disable-next-line @typescript-eslint/ban-types
            {} extends ToCamelCase<T[P]>
            ? T[P]
            : ToCamelCase<T[P]>
          : T[P];
      }
    : T extends Record<string, any>
    ? {
        [Property in keyof T as CamelCase<string & Property>]: ToCamelCase<T[Property]>;
      }
    : T;

const isObject = (value: unknown) => {
  return value === Object(value) && !Array.isArray(value) && typeof value !== 'function';
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const mapToBusinessEntity = <T>(value: T): ToCamelCase<T> => {
  if (isObject(value)) {
    // isObject means value type is Record
    const valueAsRecord = value as Record<string, unknown>;
    const result = {} as Record<string, unknown>;

    Object.keys(valueAsRecord).forEach((key) => {
      result[_.camelCase(key)] = mapToBusinessEntity(valueAsRecord[key]);
    });

    // This recursive function can't definitely know
    // which type will come next as param.
    // So we forced to disable checks on returns.
    // This "ignore" allows us to get IDE typescript correct autocompletion for mapped object
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return result;
  }

  if (Array.isArray(value)) {
    // same here
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return value.map(mapToBusinessEntity);
  }

  // same here
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return value;
};
