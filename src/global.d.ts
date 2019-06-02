declare module '@charlesstover/hsl2rgb' {
  const _: (h: number, s: number, l: number) => [ number, number, number ];
  export default _;
}

declare module 'react-multi-context' {
  import { ComponentClass, FunctionComponent } from 'react';
  interface Getter<T, K extends Array<keyof T> = Array<keyof T>> {
    children: (...keys: Array<T[keyof T]>) => JSX.Element;
    get: K;
  }
  interface Setter<T> {
    children: JSX.Element;
    set: Partial<T>;
  }
  const _: <T>(context: T) => ComponentClass<Getter<T> | Setter<T>> & {
    with<U extends Partial<T>>(...keys: Array<keyof U>): <P extends {}>(
      Component: ComponentClass<U & P> | FunctionComponent<P>,
    ) => ComponentClass<P>;
  };
  export default _;
}
