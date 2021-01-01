async function selectionSort() {
    for (let i = 0; i < sarr.length; i++) {
        let mini = i;
        for (let j = i + 1; j < sarr.length; j++) {
            sctx = ssort.getContext("2d")
            sctx.clearRect(0, 0, 700, 470);
            redraw(sctx, [j], mini, 0, sarr);
            await timer(1);
            if (sarr[j] < sarr[mini]) {
                mini = j;
            }
        }
        if (mini != i) {
            swap(i, mini, sarr)
        }
    }
    initDrawing("s");
}