// 1、 把数组转变成 字符串， 比如[1, 2, 'abc', 3, 5] => '12abc35'
//用join方法
var a = [5, -8, 9, 'ca', "5313a"]

function getstr() {
    var b = a.join(',');
    return b;
}
console.log(getstr())


// 循环的方法
var a = [5, -8, 9, 'ca', "5313a"]

function getnum(arr) {
    var b = '';
    for (var i = 0; i < arr.length; i++) {
        b = b + arr[i];
    }
    return b;
}
console.log(getnum(a))


// 2.
let a = 3; //a undefined  test function   scope == null

function test() {
    let a = 5; //a  5   
    return function() {
        a += 1
        let a = 9;
        console.log(a)
    }
}
test()() //   function()   a = 9 + 1 = 10      打印 9   
console.log(a) //3   gloabl