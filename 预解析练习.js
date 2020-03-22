let count = 10;

function test() {
    console.log(count)
    count = 100;
    console.log(count)
}
test();



// 预解析过程

// 1. 找到全局作用域、全局变量和函数作用域、函数变量
//全局变量 count    test   scope ==> null 函数变量 scope ==>  global 
//2.给找到的变量初始化 都为undefined
// 全局变量 count = undefined    test = function   函数变量  无
//3.执行（从上到下）  全局变量被赋值   count =10  test function   函数变量 第一次打印是10 （当前没有count scope往上一层找）  count = 100 
// 4.全局变量  count = 100  test function  函数变量  第一次打印为10 count= 100  第二次打印是100




let count = 10;

function test() {
    var my_age = 100;
    count = 100;
    return function() {
        return my_age;
    }
}

console.log(get_age);
var get_age = test();
console.log(get_age());
console.log(count);


// 预解析过程

// 1. 找到全局作用域、全局变量和函数作用域、函数变量
//全局变量 count    scope ==> null 函数变量  my_age     scope ==>  global 
//2.给找到的变量初始化 都为undefined
// 全局变量 count = undefined    test = function   函数变量 my_age = undelined   count = undelined
//3.执行代码（从上往下）  全局变量被赋值   count =10  test function   函数变量 my_age = 100   count(当前作用域没有) scope ==> global
// 4.全局变量  count = 100  test function  函数变量  第一次打印为10 count= 100  第二次打印是100

// console.log(get_age); == undefined   
// var get_age = test(); == test的返回值 ==>functon(); 
// console.log(get_age()); == 调用get-age的函数体 ===> 100
// console.log(count);==100