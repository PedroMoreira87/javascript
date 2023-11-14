// You can run binary search only on a sorted list of elements.
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetElement = 7;

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let guess = arr[mid];
        if (guess === target) {
            return mid;
        }
        if (guess > target) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }

    return -1;
}

console.log(binarySearch(sortedArray, targetElement));

function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    // Base case: if the left pointer is greater than the right pointer, the target is not in the array.
    if (left > right) {
        return -1;
    }

    // Calculate the middle index of the current search range.
    const mid = Math.floor((left + right) / 2);

    // Check if the middle element is the target.
    if (arr[mid] === target) {
        return mid;
    }

    // If the target is less than the middle element, search the left half.
    if (target < arr[mid]) {
        return binarySearchRecursive(arr, target, left, mid - 1);
    }

    // If the target is greater than the middle element, search the right half.
    return binarySearchRecursive(arr, target, mid + 1, right);
}

console.log(binarySearchRecursive(sortedArray, targetElement));
