async function insertionSort() {
    for (let i = 1; i < iarr.length; i++) {
        let target = iarr[i];
        let j = i - 1;
        while ((j >= 0) && (target < iarr[j])) {
            ictx = isort.getContext("2d");
            ictx.clearRect(0, 0, 700, 470);
            redraw(ictx, [j + 1], i, 0, iarr);
            await timer(5);
            iarr[j + 1] = iarr[j];
            j--;
        }
        iarr[j + 1] = target;
    }
    initDrawing("i");
}