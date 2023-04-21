export const hasOwn = (obj: object, key: string | symbol): boolean => {
  return Object.prototype.hasOwnProperty.call(obj, key);
};

export const throttle = (fun: Function, delay: number): Function => {
  let timeoutId: NodeJS.Timeout;

  return (...args: any[]) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fun(args);
    }, delay);
  };
};

type ReturnPromise<R = any> = (x: any) => Promise<R>;
export function PrimoseThrottle<R>(
  fun: ReturnPromise<R>,
  delay = 500
): ReturnPromise<R> {
  let timeoutId: NodeJS.Timeout;
  let rejectFun = () => {};

  return (...args) => {
    clearTimeout(timeoutId);
    rejectFun();

    return new Promise((resolve, reject) => {
      rejectFun = reject;
      timeoutId = setTimeout(() => {
        resolve(null);
      }, delay);
    }).then(() => fun(...args));
  };
}
