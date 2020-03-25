//函数外部可以访问函数内的变量
// 构造私有变量/
// 容易造成内存泄漏
// 利用返回值调用嵌套的函数里的变量
let a = 0;

function getnum() {
    var c = 3;
    return function() {
        console.log(c);
        ++c;
        return c;

    }
}
var b = getnum();
console.log(b());
console.log(b());
console.log(b());