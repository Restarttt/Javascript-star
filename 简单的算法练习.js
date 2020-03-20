// 1、计算一个数组中数字的总和  [1, 2312, 1, 33, 44, 12, 2]

function getsum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        console.log(sum, i);
    }
    return sum;
}
console.log(getsum([1, 2312, 1, 33, 44, 12, 2]))



// 2、找出数组中最大的数、最小的数

function getnum(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            console.log(max, i);
        }
    }
    return max;

}
console.log(getnum([1, 2312, 1, -33, 44, 12, -1]))

//找出数组中、最小的数
function getnum(arr) {
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            console.log(min, i)
        }
    }
    return min;
}
console.log(getnum([1, 2312, 1, -33, 44, 12, -1]))

// 3、找出数组中第二大的数


function getnum(arr) {
    var max = (arr[0] > arr[1] ? arr[0] : arr[1])
    var secondmax = (arr[0] > arr[1] ? arr[1] : arr[0])

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondmax = max;
            max = arr[i];
            console.log(max);
        } else if (arr[i] > secondmax) {
            secondmax = arr[i];
            console.log(secondmax, i);
        }

    }
    return secondmax;
}
console.log(getnum([100, 35, 31, 200, 210, 10, 50]))

// 3、找出数组中第二小的数

function getsecondmin(arr) {
    var min = (arr[0] < arr[1] ? arr[0] : arr[1])
    var secondmin = (arr[0] < arr[1] ? arr[1] : arr[0])
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            secondmin = min;
            min = arr[i];
            console.log(min);
        } else if (arr[i] < secondmin) {
            secondmin = arr[i];
            console.log(secondmin, i);
        }
    }
    return secondmin;
}
console.log(getsecondmin([100, 35, 31, 200, 26, 10, 50]))

// 4、找出数组中最大的偶数

function geteven(arr) {
    var maxeven = null;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            if (arr[i] > maxeven || maxeven == null) {
                maxeven = arr[i];
                console.log(maxeven, i);
            }
        }
    }
    return maxeven;
}

console.log(geteven([2311, 1, -33, 44, 12, -1, 2400]))


// 5、实现数组的去重
[1, 2, 78, 23, 2, 23] => [1, 2, 78, 23]

function getnum(arr) {
    var num = [];
    for (var i = 0; i < arr.length; i++) {
        if (num.indexOf(arr[i]) == -1) {
            num.push(arr[i]);
            console.log(num, i);
        }
    }
    return num;
}

console.log(getnum([3, -3, -3, 6, 9, -11, 10, -11, -11, 6, 0]))

// 6、数组中查找指定元素
function searchIndex(arr, target);

// indexof方法

function search(arr) {
    var num = 0;
    num = arr.indexOf(10);
    return num;
}
console.log(search([3, -3, 9, -11, 10, 6, 0]))


// 循环遍历方法

function search(arr, num) {
    var a = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            a = i;
            console.log(a, i);
            break;
        }
    }
    return a;
}
console.log(search([3, -3, 9, -11, 10, 6, 9], 6))

// 7、找出两个数组中相同的数


function getnum(arr1, arr2) {
    var num = [];
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] == arr2[i]) {
            num.push(arr1[i]);
            console.log(i);
        }
    }
    return num;
}
console.log(getnum([3, -3, 9, -11, 10, 6, 0], [3, 31, -11, 9, 8, 1, 6]))





// 8、从有序数组中，查找指定的元素 [循环方法、二分查找法]

// 9、实现数组排序
[1, 56, 23, 2, 78, 34] => [1, 2, 23, 34, 56, 78].

var a = ([1, 56, 23, 2, 78, 34])



// 10、实现Fibornacci数列 [递归版本、非递归版本]
1 1 2 3 5 8 13 21

// 10、学习快速排序