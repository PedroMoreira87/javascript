let arr = [
    {id: 1, name: "John"},
    {id: 2, name: "Jane"},
    {id: 1, name: "Bob"},
    {id: 1, name: "Isa"},
    {id: 2, name: "Julia"},
    {id: 3, name: "Poly"},
];

// Using for loop
let uniqueArr = [];
for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < uniqueArr.length; j++) {
        if (arr[i].id === uniqueArr[j].id) {
            found = true;
            break;
        }
    }
    if (!found) {
        uniqueArr.push(arr[i]);
    }
}
console.log(uniqueArr);

// Using filter
let uniqueArr2 = arr.filter((item, index, self) =>
    self.findIndex(t => t.id === item.id) === index);
console.log(uniqueArr2);

// Return a boolean
let hasDuplicate = arr.filter((item, index, self) =>
    self.findIndex(t => t.id === item.id) !== index).length !== 0;
console.log(hasDuplicate);