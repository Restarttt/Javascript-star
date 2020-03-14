// 实现一个函数， 求数组小的奇数
function getodd(arr) {
    var min = arr[i];
    for (var i = 0; i <= arr.lenght; i++)
        if (arr[i] % 2 != 0) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
    return min;

}
console.log(getodd([2, 20, -30, 5, -6, 65]));