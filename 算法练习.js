// 1、 去重
var a = ([3, 5, 9, 7, 6, 3, 4, 9, 7, 6])

function getnum(arr) {
    var b = [];
    for (var i = 0; i < arr.length; i++) {
        if (b.indexOf(arr[i]) == -1) {
            b.push(arr[i]);
        }
    }
    return b;
}
console.log(getnum(a));


// 2、 找出数组中第二大的偶数
var a = ([430, 100, 80, -22, 3, 7, 140, -11, 90, 420])

function getsecond(arr) {
    var max = null;
    var second = null;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            if (arr[i] > max || max == null) {
                second = max;
                max = arr[i];
            } else if (arr[i] > second || max == null) {
                second = arr[i];
            }
        }
    }
    return second;
}
console.log(getsecond(a))



// 3、 找出数组中最大的偶
var a = ([421, 100, 80, -22, 3, 7, 66, -66, 10, 420])

function geteven(arr) {
    var maxeven = null;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            if (arr[i] > maxeven || maxeven == null) {
                maxeven = arr[i];
            }
        }
    }
    return maxeven;
}
console.log(geteven(a))



// 1、 找出数组中所有的偶数
var a = ([421, 100, 80, -22, 3, 7, 66, -66, 10, 420])

function geteven(arr) {
    var even = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even.unshift(arr[i]);
        }
    }
    return even;
}
console.log(geteven(a))
    // 2、 找出数组中第二小的奇数
var a = ([420, 7, 80, -11, 3, 9, 77, -1, 13, 150])

function getodd(arr) {
    var maxodd = null;
    var secondodd = null;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            if (arr[i] < maxodd || maxodd == null) {
                secondodd = maxodd;
                maxodd = arr[i];
            } else if (arr[i] < secondodd || secondodd == null) {
                secondodd = arr[i];
            }
        }
    }
    return secondodd;
}
console.log(getodd(a))


// 3、 找出数组中所有奇数之和
var a = ([420, 7, 80, -11, 3, 7, 77, -1, 13, 150])

function getsum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (!(arr[i] % 2 == 0)) {
            sum += arr[i];
            console.log(sum, i);
        }
    }
    return sum;
}
console.log(getsum(a));

// 4、 找出两个数组中相同的数


var c = ([420, 7, 80, -11, 3, 7, 77, -11, 13, 3, 0])
var d = ([13, 0, 80, 3, -11, -14, -20, -50, 10, 0])

function getnum(arr, target) {
    var num = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == target[i]) {
            num.unshift(arr[i]);
            console.log(num, i);
        }
    }
    return num;
}
console.log(getnum([3, -3, 9, -11, 10, 6, 0], [3, 31, 9, -11, 8, 6, 1]))