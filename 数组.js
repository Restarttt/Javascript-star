// 实现一个函数， 求数组小的奇数
function getodd(arr) {
    var min = arr[0];
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 != 0) {
            if (arr[i] < min) {
                min = arr[i];

            }
        }
    }
    return min;

}
console.log(getodd([-40, 20, -30, 5, -7, 65]));



// 求数组中所有的偶数之和
function getsum(arr) {
    var sum = 0;
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(getsum([4, 9, 18, 17, 11, 2, 6, 22]))

// 所有偶数和奇数总和的差
function getsum(arr) {
    var sum = 0;
    var odd = 0;
    var even = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even += arr[i];
        } else {
            odd += arr[i];
        }
    }
    sum = even - odd;
    console.log(even, odd);
    return sum;
}

console.log(getsum([4, 8, 5, 3, 7, 9, 2, 6, 10]))



// 求数组最大值和最小值的差值
function getdv(arr) {
    var dv = 0;
    var max = 0;
    var min = 0; //怎么给最大的值？
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }
    dv = max - min;
    console.log(max, min);
    return dv;
}
console.log(getdv([100, 50, 20, 40, 300, 10, 3]))


// 求数组最大偶数和最小偶数的差值
function getdv(arr) {
    var even = 0;
    var odd = 0;
    var dv = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0 && arr[i] > even) {
            even = arr[i];
        } else if (arr[i] % 2 == 0 && arr[i] < odd) {
            odd = arr[i];
        }
    }
    dv = even - odd;
    console.log(even, odd);
    return dv;
}
console.log(getdv([-100, -20, -15, 40, 19, 23, -11]))