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
                redraw([i + 1], -1, 0);
                await timer(10);
            }
        }
    }
    initDrawing();
}