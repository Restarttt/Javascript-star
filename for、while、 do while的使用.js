// 计算 1-200 中 所有能被6整除的数的总和 
// 计算 1-200 中 所有既能被4整除、也能被7整除的数的总和 
// 计算 1-200 中 所有能被3整除、或者能被5整除的数的总和 
// 计算 1-6   中 所有既不能被2整除、也不能被3整除的数的总和


// for循环语句
var sum = 0;
for (var i = 1; i <= 200; ++i) {
    if (i % 6 == 0) {
        sum += i;
    }
}


// while 循环控制语句
var sum = 0;
var i = 0;
while (i <= 200) {

    if (i % 4 == 0 && i % 7 == 0) {
        sum += i;
    }
    ++i;
}

// while 循环控制语句
var sum = 0;
var i = 0;
while (i <= 200) {

    if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
    }
    ++i;

}

// do while 循环语句
var sum = 0;
var i = 0;
do {

    if (i % 2 != 0 && i % 3 != 0) {
        sum += i;
    }
    ++i;
} while (i <= 6);