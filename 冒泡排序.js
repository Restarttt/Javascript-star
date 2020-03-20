// 俩俩对比 求出最大后移循环（有序数组）

var a = [40, 30, 85, 79, 10, 2, 6, 99, 70]

30 40 85 79 10 2 6 99 70
30 40 85 79 10 2 6 99 70
30 40 79 85 10 2 6 99 70
30 40 79 10 85 2 6 99 70
30 40 79 10 2 85 6 99 70
30 40 79 10 2 6 85 99 70
30 40 79 10 2 6 85 99 70
30 40 79 10 2 6 85 70 99


function sort(arr) {
    for (var i = arr.length - 1; i >= 0; --i) {
        for (var j = 0; j < i; ++j) {
            if (arr[j] > arr[j + 1]) {
                var b = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = b;
            }
        }
    }
    return arr;
}
console.log(sort(a))





var a = [40, 30, 85, 79, 10, 2, 6, 99, 70]

function sort(arr) {
    for (var i = arr.length - 1; i >= 0; --i) {
        for (var j = 0; j < i; ++j) {
            if (arr[j] < arr[j + 1]) {
                var b = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = b;
            }
        }
    }
    return arr;
}
console.log(sort(a))