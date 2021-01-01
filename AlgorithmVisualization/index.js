let qarr = [];
let iarr = [];
let sarr = [];
let barr = [];
let marr = [];
let carr = [];

const qsort = document.getElementById("quicksort");
const ssort = document.getElementById("selectionsort");
const isort = document.getElementById("insertionsort");
const bsort = document.getElementById("bubblesort");
const msort = document.getElementById("mergesort");
const csort = document.getElementById("cocktailshakersort");

var qctx = qsort.getContext("2d");
var sctx = ssort.getContext("2d");
var ictx = isort.getContext("2d");
var bctx = bsort.getContext("2d");
var mctx = msort.getContext("2d");
var cctx = csort.getContext("2d");
main();

async function main() {
    initRandomArray();
    initDrawing("c");
    initDrawing("m");
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
    mergeSort();
    cocktailShakerSort();
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
    marr = [...sarr];
    carr = [...sarr]
}

function filterUndefined() {
    sarr = sarr.filter(function (element) {
        return element !== undefined;
    });
}