

/* Ex 4
Explain execution of next code snippets
*/



function printWithDelayAsync(name,ms){
    return new Promise(resolve =>{
      setTimeout(() => { console.log(name); resolve(name+name) }, ms)
    })
  }

Promise.race([
        printWithDelayAsync('fisrt-', 5000),
        printWithDelayAsync('second-', 3000),
    ])
    .then(() => printWithDelayAsync('third-', 1000));

printWithDelayAsync('fisrt--', 2000)
    .then(() => { throw Error('failed--') })
    .then(() => printWithDelayAsync('second--', 1000))
    .catch( x => printWithDelayAsync(x, 1000))
    .then(() => printWithDelayAsync('third--', 1000));

printWithDelayAsync('fisrt', 2000)
    .then(printWithDelayAsync)
    .catch(printWithDelayAsync)
    .then(printWithDelayAsync);


