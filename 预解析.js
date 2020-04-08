//JS在执行前会先进行预解析
// scope（作用域）变量范围是可见的
//js俩种作用域（全局作用域和函数作用域）
// 全局作用域是函数外的范围
// 函数作用域是函数count内的范围


var num = 0;

function count() {
    num = 1;
    return num;
}
console.log(count())


// 预解析过程

// 从上往下扫描代码
// 找出有哪些作用域
// 找出每个作用域内的变量
// 此时变量初始化为undefined, 函数变量则为function
// 找出每个作用域的没scope, 指向上一层的作用域



// 声明提前（hoisting)



console.log(a)
var a = 3;

//找到全局变量 a  scope指向null
//找到打印的a   value初始化为undefined
//定义之前就可以使用了
//执行到var a = 3
//打印value为3