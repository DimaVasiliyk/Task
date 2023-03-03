function bubbleSortConcept1(arr) {
    for (let j = arr.length ; j > 0; j--){
      for (let i = 0; i < j; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
      }
    }
    return arr;
  }
console.log(bubbleSortConcept1([2, -1, 2, 3, -9, 100, -9, 2, -3, 5, 85, 92, 12, 11, 0, 85, 1, 1, 20, 77, 01, 10.5, 10.15 ]))