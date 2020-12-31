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
    for (let i=1; i < 21; i++) {
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

function initDrawing() {
    ctx = sort.getContext("2d");
    ctx.clearRect(0, 0, 520, 320);
    for (let i = 0; i < arrToSort.length; i++) {
        drawBar(arrToSort[i], i)
    }
}

function redraw(x, t = -1, p=0) {
    for (let i = 0; i < arrToSort.length; i++) {
        if (x.includes(i)) {
            drawBar(arrToSort[i], i, 0, 1)
        } else if (i === t) {
            drawBar(arrToSort[i], i, 1)
        } else {
            drawBar(arrToSort[i], i);
        }
    }
}

function drawBar(bar, i, t=0, x = 0) {
    if (x === 1) {
        ctx.fillStyle = '#ff0000';
    } else if (t === 1) {
        ctx.fillStyle = '#54ff9b';
    } else {
        ctx.fillStyle = '#c7bbaf';
    }
    ctx.fillRect(11 + (25 * i), 10 + ((20 - bar) * 15), 20, (bar * 15));
}

const timer = ms => new Promise(res => setTimeout(res, ms))

async function bubbleSort() {
    //var animations = [];
    var sorted = false;
    while (sorted == false) {
        sorted = true;
        for (let i = 0; i < arrToSort.length - 1; i++) {
            if (arrToSort[i] > arrToSort[i + 1]) {
                //animations.push(arrToSort)
                swap(i, i + 1);
                sorted = false;
                ctx = sort.getContext("2d")
                ctx.clearRect(0, 0, 520, 320);
                redraw([i+1], -1, 0);
                await timer(50);
            }
        }
    }
    initDrawing();
}

function callQuickSort() {
    arrToSort = quickSort(arrToSort, 0);
    console.log(animation);
    console.log(arrToSort);
    animateQuickSort();
}

function animateQuickSort() {
    for (let x = 0; x < Object.keys(animation).length - 1; x++) {
        console.log(x)
    }
}

async function selectionSort() {
    for (let i = 0; i < arrToSort.length; i++) {
        let mini = i;
        for (let j = i + 1; j < arrToSort.length; j++) {
            ctx = sort.getContext("2d")
            ctx.clearRect(0, 0, 520, 320);
            redraw([j], mini, 0);
            await timer(50);
            if (arrToSort[j] < arrToSort[mini]) {
                mini = j;
            }
        }
        if (mini != i) {
            swap(i, mini)
        }
    }
    initDrawing();
}

async function insertionSort() {
    for (let i = 1; i < arrToSort.length; i++) {
        let target = arrToSort[i];
        let j = i - 1;
        while ((j >= 0) && (target < arrToSort[j])) {
            ctx = sort.getContext("2d");
            ctx.clearRect(0, 0, 520, 320);
            redraw([j, j+1], i, 0);
            await timer(50);
            arrToSort[j + 1] = arrToSort[j];
            j--;
        }
        arrToSort[j + 1] = target;
    }
    initDrawing();
}

function quickSort(arr, x) {
    if (arr.length === 1) {
        return arr
    }
    var pivot = arr[arr.length - 1];
    if (animation[x] === undefined) {
        animation[x] = [arr];
    } else {
        animation[x].push(arr);
    }
    if (animation["p"] === undefined) {
        animation["p"] = [pivot];
    } else {
        animation["p"].push(pivot);
    }
    var lower = []
    var greater = []
    for (let i = 0; i < arr.length -  1; i++) {
        if (arr[i] < pivot) {
            lower.push(arr[i]);
        } else {
            greater.push(arr[i])
        }
    }
    if (lower.length > 0 && greater.length > 0) {
        return [...quickSort(lower, x+1), pivot, ...quickSort(greater, x+1)];
    } else if (lower.length > 0) {
        return [...quickSort(lower, x+1), pivot];
    } else {
        return [pivot, ...quickSort(greater, x+1)];
    }
}

function swap(idx1, idx2) {
    const tmp = arrToSort[idx1];
    arrToSort[idx1] = arrToSort[idx2];
    arrToSort[idx2] = tmp
}