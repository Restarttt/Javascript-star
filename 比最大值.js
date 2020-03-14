// 输出五个数比大小比最大de

function getmax(a, b, c, d, e) {
    var max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    if (d > max) {
        max = d;
    }
    if (e > max) {
        max = e;
    }
    return max;

}
console.log(getmax(-100, 1, .5, 3, 200));