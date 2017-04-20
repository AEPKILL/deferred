export interface IDefferObject<T> {
  promise: Promise<T>;
  resolve: (value?: T) => void;
  reject: (reason?: any) => void;
}

export function deferred<T>(): IDefferObject<T> {
  let resolve: (value?: T) => void = null as any;
  let reject: (reason: any) => void = null as any;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return {
    promise,
    resolve,
    reject
  };
}

export default deferred;
