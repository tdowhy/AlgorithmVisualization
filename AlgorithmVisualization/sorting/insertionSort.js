async function insertionSort() {
    for (let i = 1; i < arrToSort.length; i++) {
        let target = arrToSort[i];
        let j = i - 1;
        while ((j >= 0) && (target < arrToSort[j])) {
            ctx = sort.getContext("2d");
            ctx.clearRect(0, 0, 520, 320);
            redraw([j + 1], i, 0);
            await timer(10);
            arrToSort[j + 1] = arrToSort[j];
            j--;
        }
        arrToSort[j + 1] = target;
    }
    initDrawing();
}