/*JavaScript code for the searching and sorting technic as 
1.  Searching
1.1  Linear Search
1.2  Binary Search
2.  Sorting
2.1  Bubble Sort
2.2  Insertion Sort
2.3  Selection Sort
2.4  Merge Sort
2.5  Quick Sort
2.6  Bucket Sort  */

// 1. Searching
// 1.1 Linear Search
function linearSearch(arr, n, x) {
    for (let i = 0; i < n; i++) {
        if (arr[i] == x) {
            return i;
        }
    }
    return -1;
}

// 1.2 Binary Search

function binarySearch(arr, l, r, x) {
    if (r >= l) {
        let mid = l + (r - l) / 2;
        if (arr[mid] == x) {
            return mid;
        }
        if (arr[mid] > x) {
            return binarySearch(arr, l, mid - 1, x);
        }
        return binarySearch(arr, mid + 1, r, x);
    }
    return -1;
}

// 2. Sorting
// 2.1 Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// 2.2 Insertion Sort
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

// 2.3 Selection Sort
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
}

// 2.4 Merge Sort
function mergeSort(arr) {
    if (arr.length > 1) {
        let mid = Math.floor(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);
        mergeSort(left);
        mergeSort(right);
        let i = 0;
        let j = 0;
        let k = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                arr[k] = left[i];
                i++;
            } else {
                arr[k] = right[j];
                j++;
            }
            k++;
        }
        while (i < left.length) {
            arr[k] = left[i];
            i++;
            k++;
        }
        while (j < right.length) {
            arr[k] = right[j];
            j++;
            k++;
        }
    }
}

// 2.5 Quick Sort
function quickSort(arr, low, high) {
    if (low < high) {
        let pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}

// 2.6 Bucket Sort

function bucketSort(arr, n) {
    let max_val = Math.max(...arr);
    let min_val = Math.min(...arr);
    let range = max_val - min_val;
    let no_of_buckets = range / n + 1;
    let bucket = [];
    for (let i = 0; i < no_of_buckets; i++) {
        bucket[i] = [];
    }
    for (let i = 0; i < n; i++) {
        let index = Math.floor((arr[i] - min_val) / range);
        bucket[index].push(arr[i]);
    }
    for (let i = 0; i < no_of_buckets; i++) {
        bucket[i].sort();
    }
    let index = 0;
    for (let i = 0; i < no_of_buckets; i++) {
        for (let j = 0; j < bucket[i].length; j++) {
            arr[index++] = bucket[i][j];
        }
    }
}
