const timer = ms => new Promise(res => setTimeout(res, ms))

function swap(idx1, idx2) {
    const tmp = arrToSort[idx1];
    arrToSort[idx1] = arrToSort[idx2];
    arrToSort[idx2] = tmp
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

function drawBar(bar, i, t = 0, x = 0) {
    if (x === 1) {
        ctx.fillStyle = '#ff0000';
    } else if (t === 1) {
        ctx.fillStyle = '#54ff9b';
    } else {
        ctx.fillStyle = '#c7bbaf';
    }
    //ctx.fillRect(11 + (25 * i), 10 + ((20 - bar) * 15), 20, (bar * 15));
    ctx.fillRect(11 + (5 * i), 10 + ((100 - bar) * 3), 5, (bar * 3));
}