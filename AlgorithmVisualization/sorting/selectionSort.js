async function selectionSort() {
    for (let i = 0; i < arrToSort.length; i++) {
        let mini = i;
        for (let j = i + 1; j < arrToSort.length; j++) {
            ctx = sort.getContext("2d")
            ctx.clearRect(0, 0, 520, 320);
            redraw([j], mini, 0);
            await timer(10);
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