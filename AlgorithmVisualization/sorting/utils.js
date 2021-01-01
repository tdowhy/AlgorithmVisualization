const timer = ms => new Promise(res => setTimeout(res, ms))

function swap(idx1, idx2, a) {
    const tmp = a[idx1];
    a[idx1] = a[idx2];
    a[idx2] = tmp
}

async function initDrawing(c) {
    if (c === "q") {
        qctx = qsort.getContext("2d");
        qctx.clearRect(0, 0, 700, 470);
        for (let i = 0; i < qarr.length; i++) {
            drawBar(qctx, qarr[i], i)
        }
    }
    else if (c === "s") {
        sctx = ssort.getContext("2d");
        sctx.clearRect(0, 0, 700, 470);
        for (let i = 0; i < sarr.length; i++) {
            drawBar(sctx, sarr[i], i)
        }
    }
    else if (c === "i") {
        ictx = isort.getContext("2d");
        ictx.clearRect(0, 0, 700, 470);
        for (let i = 0; i < iarr.length; i++) {
            drawBar(ictx, iarr[i], i)
        }
    }
    else if (c === "b") {
        bctx = bsort.getContext("2d");
        bctx.clearRect(0, 0, 700, 470);
        for (let i = 0; i < barr.length; i++) {
            drawBar(bctx, barr[i], i)
        }
    }
}

function redraw(ctx, x, t = -1, p=0, a) {
    for (let i = 0; i < a.length; i++) {
        if (x.includes(i)) {
            drawBar(ctx, a[i], i, 0, 1)
        } else if (i === t) {
            drawBar(ctx, a[i], i, 1)
        } else {
            drawBar(ctx, a[i], i);
        }
    }
}

async function drawBar(c, bar, i, t = 0, x = 0) {
    if (x === 1) {
        c.fillStyle = '#ff0000';
    } else if (t === 1) {
        c.fillStyle = '#54ff9b';
    } else {
        c.fillStyle = '#c7bbaf';
    }
    //ctx.fillRect(11 + (25 * i), 10 + ((20 - bar) * 15), 20, (bar * 15));
    c.fillRect(15 + (4.5 * i), 10 + ((150 - bar)) * 3, 3, bar*3);
    //c.fillRect(20 + (5 * i), 10 + ((133 - bar)) * 3, 4, (bar * 3));
    //c.fillRect(20 + (5 * i), 10 + ((300 - bar)) * 10, 4, (bar * 0.5));
}