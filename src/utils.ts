export function debounce<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
) {
  let timer: NodeJS.Timeout;
  return function (...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(args);
    }, delay);
  };
}
