async function mergeSort () {
    //Create two arrays for sorting
    let sorted = Array.from(marr);
    let n = sorted.length;
    let buffer = new Array(n);

    for (let size = 1; size < n; size *= 2) {
        for (let leftStart = 0; leftStart < n; leftStart += 2 * size) {

            //Get the two sub arrays
            let left = leftStart,
                right = Math.min(left + size, n),
                leftLimit = right,
                rightLimit = Math.min(right + size, n);

            //Merge the sub arrays
            merge(left, right, leftLimit, rightLimit, sorted, buffer);
        }
        mctx = msort.getContext("2d")
        mctx.clearRect(0, 0, 700, 470);
        redraw(mctx, [-1], -1, 0, sorted);
        await timer(50);
        //Swap the sorted sub array and merge them
        let temp = sorted;
        sorted = buffer;
        buffer = temp;
    }
    marr = [...sorted];
    initDrawing('m');
}

async function merge (left, right, leftLimit, rightLimit, sorted, buffer) {
    let i = left;

    //Compare the two sub arrays and merge them in the sorted order
    while (left < leftLimit && right < rightLimit) {
        if (sorted[left] <= sorted[right]) {
            buffer[i++] = sorted[left++];
        } else {
            buffer[i++] = sorted[right++];
        }
    }
    mctx = msort.getContext("2d")
    mctx.clearRect(0, 0, 700, 470);
    redraw(mctx, [left, right], i, 0, sorted);
    await timer(5);
    //If there are elements in the left sub arrray then add it to the result
    while (left < leftLimit) {
        buffer[i++] = sorted[left++];
    
    }

    //If there are elements in the right sub array then add it to the result
    while (right < rightLimit) {
        buffer[i++] = sorted[right++];
        
    }
}