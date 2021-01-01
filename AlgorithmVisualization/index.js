let qarr = [];
let iarr = [];
let sarr = [];
let barr = [];

const qsort = document.getElementById("quicksort");
const ssort = document.getElementById("selectionsort");
const isort = document.getElementById("insertionsort");
const bsort = document.getElementById("bubblesort");

//var ctx = sort.getContext("2d")
var qctx = qsort.getContext("2d");
var sctx = ssort.getContext("2d");
var ictx = isort.getContext("2d");
var bctx = bsort.getContext("2d");
main();

async function main() {
    initRandomArray();
    initDrawing("q");
    initDrawing("b");
    initDrawing("i");
    initDrawing("s");
}

function initRandomArray() {
    let a = []
    for (let i = 1; i < 151; i++) {
        a[i] = i;
    }
    shuffle(a)
}

async function sortAll() {
    selectionSort();
    insertionSort();
    bubbleSort();
    quickSort();
}

function shuffle(arr) {
    while (arr.length > 0) {
        idx = Math.floor(Math.random() * arr.length);
        sarr.push(arr[idx]);
        arr.splice(idx, 1);
    }
    filterUndefined();
    iarr = [...sarr];
    barr = [...sarr];
    qarr = [...sarr];
}

function filterUndefined() {
    sarr = sarr.filter(function (element) {
        return element !== undefined;
    });
}