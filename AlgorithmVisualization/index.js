let arrToSort = [];
let animation = {};
//let i = 0;
//document.getElementById("sorted").innerHTML = bubbleSort()

const sort = document.getElementById("sort");
var ctx = sort.getContext("2d")
main();

function main() {
    initRandomArray();
    initDrawing();
}

function initRandomArray() {
    let a = []
    for (let i = 1; i < 101; i++) {
        a[i] = i;
    }
    shuffle(a)
}

function shuffle(arr) {
    while (arr.length > 0) {
        idx = Math.floor(Math.random() * arr.length);
        arrToSort.push(arr[idx]);
        arr.splice(idx, 1);
    }
    filterUndefined();
}

function filterUndefined() {
    arrToSort = arrToSort.filter(function (element) {
        return element !== undefined;
    });
}