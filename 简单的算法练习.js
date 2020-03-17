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

// 3、找出数组中第二大的数、第二小的数

function getnum(arr) {
    var max = arr[0];
    var two = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];

            console.log(max, i);
        }
    }
    return max;
}
console.log(getnum([20, 35, 31, -10, 26, 10, 50]))


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
    var a = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i]) {
            a = arr.indexof(3);
        }
    }
    return a;
}

console.log(serach([3, -3, -3, 6, 9, -11, 10, -11, -11, 6, 0]))

// 6、数组中查找指定元素
function searchIndex(arr, target);

// indexof方法

a = [3, -3, 9, -11, 10, 6, 0];
a.indexOf(0)

// function search(arr) {
//     search.indexOf(0);
//     return search;


// }
// console.log(search([3, -3, 9, -11, 10, 6, 0]))


// 循环遍历方法

function search(arr) {
    var a = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 10) {
            a = arr[i];
            console.log(a, i);
        }
    }
    return a;
}
console.log(search([3, -3, 9, -11, 10, 6, 0]))

// 7、找出两个数组中相同的数


// 8、从有序数组中，查找指定的元素 [循环方法、二分查找法]

// 9、实现数组排序
[1, 56, 23, 2, 78, 34] => [1, 2, 23, 34, 56, 78]

// 10、实现Fibornacci数列 [递归版本、非递归版本]
1 1 2 3 5 8 13 21

// 10、学习快速排序