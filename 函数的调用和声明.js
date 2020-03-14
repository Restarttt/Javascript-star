// 1 - 100 中最大的奇数


function getodd() {
    var max = 0;
    for (var a = 0; a <= 100; a++) {
        if (a % 2 != 0) {
            if (a > max) {
                max = a;
            }
        }

    }

    return max;
}

console.log(getodd());

// console.log(max);
// 1 - 100 中最小的能被7整除的数
function getmin() {
    var min = 200;
    for (var a = 1; a <= 100; a++) {
        if (a % 7 == 0) {
            if (a < min) {
                min = a;
            }
        }
    }
    return min;
}
console.log(getmin());



// 1 - 100 中最大的能被2整除的数
function getmax() {
    var max = 0;
    for (var a = 1; a <= 100; a++) {
        if (a % 2 == 0) {
            if (a > max) {
                max = a;
            }
        }

    }
    return max;
}
console.log(getmax())

// 1 - 100 中最小的， 既能被3整除， 又能被5整除的数
function getmin() {
    var min = 101;
    for (var a = 1; a <= 100; a++) {
        if (a % 3 == 0 && a % 5 == 0) {
            if (a < min) {
                min < a;
            }
        }
    }
    return min;
}
console.log(getmin());
// 1 - 1999 中最大的偶数
function getseven() {
    var max = 0;
    for (var a = 1; a <= 1999; a++) {
        if (a % 2 == 0) {
            if (a > max) {
                max = a;
            }
        }
    }
    return max;
}
console.log(getseven());

// 打印1 - 100 中所有能被8整除的数
function getall() {
    for (var a = 1; a <= 100; a++) {
        if (a % 8 == 0) {
            console.log(a);
        }
    }
}
console.log(getall());

// 写一个函数， 获取三个数中最小的数
function getmax(a, b, c) {
    var min = 0;
    if (a > b) {
        if (b > c) {
            min = c;
        } else {
            min = b;
        }

    } else {
        if (a > c) {
            min = c;
        } else {
            min = a;
        }

    }
    return min;
}
console.log(getmax(-2, -1, -5));