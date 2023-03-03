
// function quickSortRecursive(arr, start, end) {
//     if (start >= end) {
//         return;
//     }

//     let index = partition(arr, start, end);
//     quickSort(arr, start, index - 1);
//     quickSort(arr, index + 1, end);
// }

// array = [7, -2, 4, 1, 6, 5, 0, -4, 2, 2, -1, 2, 3, -9, 100, -9, 2, -3, 5, 85, 92, 12, 11, 0, 85, 1, 1, 20, 77, 01, 10.5, 10.15 ]
// quickSortRecursive(array, 0, array.length - 1)

// console.log(array)

function quickSort(arr, isAsc){
    if(arr.length < 2) return arr;
     let pivot = arr[0];
     const left = [];
     const right = [];

        for (let i = 1; i < arr.length; i++){
            if(pivot > arr[i]){
                left.push(arr[i]);
            } else {
            right.push(arr[i]);
        }
    };
    console.log(left, right);
    return quickSort(left).concat(pivot, quickSort(right));
};
let array = [5, 2, 6, 1, 30, -10];
let sirted = quickSort(array, true);
let sirted = quickSort(array, false);
console.log(sirted)




// function swap(items, leftIndex, rightIndex){
//     var temp = items[leftIndex];
//     items[leftIndex] = items[rightIndex];
//     items[rightIndex] = temp;
// }

// function part(items,left, right){

//     let pivot = items[Math.floor((right + left) / 2)];
//     let i = left;
//     let j = right;

//     while( i <= j) {

//         while(items[i] < pivot){
//             i++;
//         }

//         while(items[j] > pivot){
//             j--;
//         }
//         if (i <= j){
//             swap(items, i, j);
//             i++;
//             j--;
//         }
//     }
//     return i;
// }

// let array = [5, 2, 6, 1, 30, -10];
// part(array)
// console.log(part(array))
// 
