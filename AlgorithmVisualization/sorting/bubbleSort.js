async function bubbleSort() {
    //var animations = [];
    var sorted = false;
    while (sorted == false) {
        sorted = true;
        for (let i = 0; i < barr.length - 1; i++) {
            if (barr[i] > barr[i + 1]) {
                //animations.push(arrToSort)
                swap(i, i + 1, barr);
                sorted = false;
                bctx = bsort.getContext("2d")
                bctx.clearRect(0, 0, 700, 470);
                redraw(bctx, [i + 1], -1, 0, barr);
                await timer(5);
            }
        }
    }
    initDrawing("b");
}