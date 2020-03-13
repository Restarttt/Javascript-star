// /* <!-- // 计算 1- 100 的总和 //
//    计算 1-100中 所有偶数的总和 // 
//    计算 1-100中 所有奇数的总和 // 
//    计算 1-100中 所有能被7整除的数的总和  、
var sum = 0;
for (var i; i <= 100; ++i) {
    sum += i;
}


var sum = 0;
for (var i = 0; i <= 100; ++i) {
    if (i % 2 == 0) {
        sum += i;
    }
}


var sum = 0;
for (var i = 0; i <= 100; ++i) {
    if (i % 2 != 0) {
        sum += i;
    }
}


var sum = 0;
for (var i = 0; i <= 100; ++i) {
    if (i % 7 == 0) {
        sum += i;
    }
}