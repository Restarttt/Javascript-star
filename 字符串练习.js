// 1、 从字符串中找到目标字符 functon search(str, targetChar)

// indexof方法
var a = "3,5,3,-3,9,11,-99"

function getnum(str) {
    var num = 0;
    num = str.indexOf(-6);
    return num;

}
console.log(getnum(a))



// 循环遍历
var a = "3,5,3,-3,9,c,d,e,11,-99"
var b = 'e'

function getnum(str, target) {
    var num = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == target) {
            num = i;
            console.log(num, i);
            return num;

        }

    }
    return -1;
}
console.log(getnum(a, b))


// 1、实现字符串的反转 'abcde' => 'edcba'
var a = "abcdee"

function getrev(str) {
    var b = "";

    for (var i = str.length - 1; i >= 0; i--) {
        // b = arr[i];
        b = b + str[i];
    }
    return b;
}

console.log(getrev(a))



// 2、实现获取两个字符串的相同字符并生成新的字符串 
//    'abcdef' | 'edfghi'  => 'de'


var a = 'aslkjdal'
var b = 'cakjc13cas'

function getnum(str1, str2) {
    var num = '';

    for (var i = 0; i < str1.length; i++) {
        if (str2.indexOf(str1[i]) !== -1) {
            num = num + str1[i];
            console.log(str1, str2);
        }
    }

    return num;
}
console.log(getnum(a, b))



var a = 3;
var b = 6;
var c = 9;

var t = c;
a = b;