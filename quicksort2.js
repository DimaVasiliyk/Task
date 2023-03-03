function quickSort(arr, isAsc){
    if(arr.length < 2) return arr;
     let pivot = arr[0];
     const left = [];
     const right = [];

        if (isAsc == true){
            for (let i = 1; i < arr.length; i++){
                if(pivot > arr[i]){
                    left.push(arr[i]);
                } else {
                right.push(arr[i]);
                }
            };
        return quickSort(left,isAsc).concat(pivot, quickSort(right,isAsc)); 

        } else {
            for (let i = 1; i < arr.length; i++){
                if(pivot < arr[i]){
                    left.push(arr[i]);
                } else {
                right.push(arr[i]);
                }
            };
        return quickSort(left).concat(pivot, quickSort(right)); 
        }
};


let array = [5, 2, 6, 1, 30, -10];
let sirted = quickSort(array, true);
// let sirted = quickSort(array, false);
console.log(sirted)





function quickSort(arr, isAsc){
    if(arr.length < 2) return arr;
     let pivot = arr[0];
     const left = [];
     const right = [];
        for (let i = 1; i < arr.length; i++){
            if(sorting(pivot, arr[i],isAsc)){
                left.push(arr[i]);
            } else {
            right.push(arr[i]);
        }
    };
    return quickSort(left,isAsc).concat(pivot, quickSort(right,isAsc));
};

function sorting(pivot,arr,isAsc){
    if(isAsc){
        return pivot > arr
    } else {
         return pivot < arr
    }
}

let array = [5, 2, 6, 1, 30, -10];
let sirted = quickSort(array, true);
// let sirted = quickSort(array, false);
console.log(sirted)
