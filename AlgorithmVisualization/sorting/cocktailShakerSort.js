async function cocktailShakerSort() {
    var end = carr.length - 1
    var start = 0
    var sorted = false;
    while (sorted == false) {
        sorted = true;
        for (let i = start; i < end; i++) {
            if (carr[i] > carr[i + 1]) {
                swap(i, i + 1, carr);
                sorted = false;
                cctx = csort.getContext("2d")
                cctx.clearRect(0, 0, 700, 470);
                redraw(cctx, [i + 1], -1, 0, carr);
                await timer(5);
            }
        }
        if (sorted == true) {
            break;
        }
        sorted = true;
        end--;
        for (i = end - 1; i > start - 1; i--) {
            if (carr[i] > carr[i + 1]) {
                swap(i, i + 1, carr);
                sorted = false;
                cctx = csort.getContext("2d")
                cctx.clearRect(0, 0, 700, 470);
                redraw(cctx, [i + 1], -1, 0, carr);
                await timer(5);
            }
        }
        start++;
    }
    initDrawing("c")
}