let text = "Hola";
printWithDelay(text, 5000, console.log);
printWithDelayAsync(text, 5000)
  .then((result) => console.log(text))
  .catch((error) => console.log(error));

function printWithDelay(text, delay = 0, callback) {
  setTimeout(() => {
    callback && callback(text);
  }, delay);
}

/* Ex 0
Do pomisification of printWithDelay
*/
function printWithDelayAsync(text, delay = 0) {
  return new Promise((resolve, reject) => {
    try {
      printWithDelay(text, delay, resolve);
    } catch (e) {
      reject(e);
    } 
  });
}
