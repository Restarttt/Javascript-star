// JSON == 》javascript对象表示法（ javascript Object Notation）
// json是轻量级的文本数据交换格式
//JSON.parse()   json串转换为对象
//JSON.stringify()   对象转换为json串


//JSON.stringify()的五个特性
// 名称/值对包括字段名称（在双引号中），后面写一个冒号，然后是值：

const b = {
    "name": "zhouhui ",
    "age": 21
}
console.log(b);
console.log(JSON.stringify(b))

// 第二个参数(数组)单独找出一个key
// 在第二个参数中将所需的键作为数组传递， 从而只打印所需的属性。
let lisa = {
    "name": ["zhouhui", "blackpink", "lisa"],
    "type": 23,
    "id": "lisa"
}
console.log(JSON.stringify(lisa)) //打印全部
console.log(JSON.stringify(lisa, ["id"])) //打印id得value

//第三个参数为数字或者字符串
//第三个参数控制最后一个字符串的间距。如果参数是一个数字，则字符串化中的每个级别都将缩进这个数量的空格字符
let lisa = {
    "name": "zhouhui ",
    "age": 21
}
console.log(JSON.stringify(lisa, null, "****"))
console.log(JSON.stringify(lisa, null, "2"))


// ==
// {
// ****"name": "zhouhui ",
// **** "age": 21
// }



//序列化json字符串转换为对象
JSON.parse()