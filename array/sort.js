arr = [2, 5, 1]
let save = 0

for (let i = 0; i < arr.length; i++) {
    if (arr[0] > arr[1]) {
        save = arr[0]
        arr[0] = arr[1]
        arr[1] = save
    } else if (arr[1] > arr[2]) {
        save = arr[1]
        arr[1] = arr[2]
        arr[2] = save
    }
}

console.log(arr)
