// 实现一个函数，获取1-200的既能被3整除也能被5整数的数的最大值



function getSum() {
    var max = 0;
    for (var a = 1; a <= 200; a++) {
        if (a % 3 == 0 && a % 5 == 0) {
            if (a > max) {
                max = a;
            }
        }
    }
    return max;

}
console.log(getSum())

// 实现一个函数，获取1-200的总和


function getSum() {
    var sum = 0;
    for (var a = 1; a <= 200; a++) {
        sum += a;
    }
    return (sum);
}
console.log(getSum());


// 实现一个函数，获取1-200中奇数的总和


function getSum() {
    var sum = 0;
    for (var a = 0; a <= 200; a++) {
        if (a % 2 != 0) {
            sum += a;
        }
    }
    return sum;
}
console.log(getSum());


// 实现一个函数，判断传入的参数是否是偶数，如果是，则返回true ，如果不是则返回false
function getSum(a) {
    if (a % 2 == 0) {
        a = true;


    } else if (a % 2 != 0) {
        a = false;

    }
    return a;

}
// getSum(41);
console.log(getSum(923));

var a = 0;
var age = (a % 2 == 0 ? ture : flase)




function getSum(a) {
    var age = (a % 2 == 0 ? ture : flase)
    return;
}
console.log(getSum(923));