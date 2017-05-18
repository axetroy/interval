export default function interval(func, ms) {
  let timer = setTimeout(function repeat() {
    func();
    timer = setTimeout(repeat, ms);
  }, ms);
  return function clear() {
    clearTimeout(timer);
  };
}