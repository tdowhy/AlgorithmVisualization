function callQuickSort() {
    arrToSort = quickSort(arrToSort, 0);
    //console.log(animation);
    console.log(arrToSort);
    //animateQuickSort();
}

function quickSortRecursive(arr, x) {
    if (arr.length === 1) {
        return arr
    }
    var pivot = arr[arr.length - 1];
   // if (animation[x] === undefined) {
   //     animation[x] = [arr];
    //} else {
    //    animation[x].push(arr);
   // }
    //if (animation["p"] === undefined) {
    //    animation["p"] = [pivot];
   // } else {
    //    animation["p"].push(pivot);
   // }
    var lower = []
    var greater = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            lower.push(arr[i]);
        } else {
            greater.push(arr[i])
        }
        wait(10, [i], pivot, arr)
    }
    if (lower.length > 0 && greater.length > 0) {
        return [...quickSort(lower, x + 1), pivot, ...quickSort(greater, x + 1)];
    } else if (lower.length > 0) {
        return [...quickSort(lower, x + 1), pivot];
    } else {
        return [pivot, ...quickSort(greater, x + 1)];
    }
}

async function quickSort() {
    let stack = [];
    stack.push(0);
    stack.push(arrToSort.length - 1);

    while (stack[stack.length - 1] >= 0) {
        end = stack.pop();
        start = stack.pop();
        pivotVal = arrToSort[end];
        pivotIdx = start;
        for (let i = start; i < end; i++) {
            if (arrToSort[i] < pivotVal) {
                swap(i, pivotIdx);
                pivotIdx++;
            }
        }
        swap(pivotIdx, end)
        if (pivotIdx - 1 > start) {
            stack.push(start);
            stack.push(pivotIdx - 1);
            ctx = sort.getContext("2d")
            ctx.clearRect(0, 0, 520, 320);
            redraw([pivotIdx - 1], pivotIdx, 0);
            await timer(100);
        }
        if (pivotIdx + 1 < end) {
            stack.push(pivotIdx + 1);
            stack.push(end);
            ctx = sort.getContext("2d")
            ctx.clearRect(0, 0, 520, 320);
            redraw([pivotIdx + 1], pivotIdx, 0);
            await timer(100);
        }
    }
    initDrawing();
}