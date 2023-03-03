
// // printWithDelay(1, 2000, console.log);
// printWithDelayAsync(1, 2000)


// // printWithDelay(2, 6000, console.log);
// printWithDelayAsync(1, 9000)


// // printWithDelay(3, 9000, console.log);
// printWithDelayAsync(3, 9000)



new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 2000);

}).then(function(result) {

  console.log(result); // 1

  return new Promise((resolve, reject) => { // (*)
    setTimeout(() => resolve(result + 1), 6000);
  });

}).then(function(result) { // (**)

  console.log(result); // 1

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result + 1), 9000);
  });

}).then(function(result) {

  console.log(result); // 1

});


/* Ex 1
|----------:----------| -> 1
                      |----------:----------:----------:----------| -> 2
                                                                  |----------:----------:----------| -> 3
OUTPUT:
2s -> 1
6s -> 2
9s -> 3
*/
