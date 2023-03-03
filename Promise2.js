
// printWithDelayAsync(1, 2000).then(console.log)
// printWithDelayAsync(2, 4000).then(console.log)
// printWithDelayAsync(3, 3000).then(console.log)

printWithDelayAsync(1, 2000)
.then(console.log)
.then(() => printWithDelayAsync(2, 4000))
.then(console.log)
.then(() => printWithDelayAsync(3, 3000))
.then(console.log)


printWithDelayAsync(1, 2000).then(console.log)
.then(() => printWithDelayAsync(2, 4000).then(console.log))
.then(() => printWithDelayAsync(3, 3000).then(console.log))

  // .then((result) => console.log(num))
  // .catch((error) => console.log(error));

function printWithDelay(num, delay, callback) {
  setTimeout(() => {
    callback && callback(num);
  }, delay);
}

function printWithDelayAsync(num, delay) {
  return new Promise((resolve, reject) => {
    try {
      printWithDelay(num, delay, resolve);
    } catch (e) {
      reject(e);
    } 
  });
}
/* Ex 2
|----------:----------| -> 1
|----------:----------:----------:----------| -> 2
|----------:----------:----------| -> 3
OUTPUT:
2s -> 1
4s -> 2
3s -> 3
*/
