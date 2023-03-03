function printWithDelay(text, delay, callback) {
    setTimeout(() => {
      callback && callback(text);
    }, delay);
  }
  

  function printWithDelayAsync(text, delay = 0) {
    return new Promise((resolve, reject) => {
      try {
        printWithDelay(text, delay, resolve);
      } catch (e) {
        reject(e);
      } 
    });
  }

  const arr = [
    printWithDelayAsync(1,2000).then((x) => { console.log(x); return x }),
    printWithDelayAsync(2,4000).then((x) => { console.log(x); return x }),
    printWithDelayAsync(3,3000).then((x) => { console.log(x); return x }),
  ]


  Promise.all(arr).then((arr) => console.log(arr.join('-')));
  

// const sleep = ms => {
//   return new Promise(resolve =>{
//     setTimeout(() => resolve(), ms)
//   })
// }

// let a = sleep(2000).then(() => console.log(1))

// let b = sleep(4000).then(() => console.log(2))

// let c = sleep(3000).then(() => console.log(3))

// Promise.all([a,b,c]).then(() => {
//   sleep(2000).then(() => console.log(123))
// })






/* Ex 3
|----------:----------| -> 1                |
|----------:----------:----------:----------| -> 2
|----------:----------:----------| -> 3     |
                                            |----------| -> 123
OUTPUT:
2s -> 1
4s -> 2
3s -> 3
5s -> 123
P.S. Last promise print concated results of first 3 promises
*/
