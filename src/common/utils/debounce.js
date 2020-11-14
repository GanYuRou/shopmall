export function debounce(func, delay) {
  let timer = null;
      return function(...res) {
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
          func.call(this, res);
        }, delay)
      }
}