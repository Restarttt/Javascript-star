// 数组的方法

// join  把数组的元素转换为字符串并连接再一起、在返回最后生成的字符串
//可指定可选的字符串在生成的字符串中来分隔数组的各个元素
//默认使用逗号
// 不影响原数组
var a = [3, -5, '123', [], 4, 'c']
a.join(" . ");
"3 . -5 . 123 .  . 4 . c"


//concat  连接调用concat()的原始数组的元素和concat（） 本身
// 不影响原数组
//返回合拼之后的数组
var a = [3, -5, '123', [], 4, 'c']
a.concat(5, 'abc', [4, 5, 6], [3, ['a'], 6]);
(14) [3, -5, "123", Array(0), 4, "c", 5, "abc", 4, 5, 6, 3, Array(1), 6]


//slice 指定数组的一个片段或子数组
// 俩个参数指定的是开始和结束的位置(不包括结尾位置的元素)
//负数指的是倒数的第几个元素
// 不影响原数组

var a = [3, -5, '123', [], 4, 'c']
a.slice(2, 8); //只能到原数组的个数
(4) ["123", Array(0), 4, "c"]

a.slice(2, -1);




//splice 插入或删除元素
//第一个参数是指定插入删除的起始位置
// 第二个参数是指定删除的个数
// 第三个参数是插入的元素 --从起始位置开始
// 改变原数组

var a = [3, -5, '123', [], 4, 'c']
a.splice(3, 0, 'hhh', '321');

[]
[3, -5, '123', 'hhh', '321', Array(0), 4, 'c']



//push 从尾部添加一或多个元素，返回新数组的长度
//pop 删除最后一个元素，返回删除的元素值
//改变原数组
//添加的是数组本身不是数组的元素

var a = [3, -5, '123', [], 4, 'c']
    (8) [3, -5, "123", Array(0), 4, "c", Array(0), Array(3)]

a.push([], [1, 2, 3], true);
--9

a.pop();
--true



// unshift  从头部添加一或多个元素， 返回新数组的长度
//shift 删除第一个元素， 返回删除的元素值  空缺会补齐
//改变原数组
//添加的是数组本身不是数组的元素

var a = [3, -5, '123', [], 4, 'c']
    (10) [0, true, false, Array(2), 3, -5, "123", Array(0), 4, "c"]

a.unshift(000, true, false, [1, 2]);
-- > 10

a.shift();
-- > 0


//map  把调用的数组的每个元素传递给指定的函数
// 并且返回一个新的数组
//第一个参数 默认原数组的值 第二个参数是下标索引

var a = [3, -5, '123', [], 4, 'c']
b = a.map(function(a, b) {
    return a * a;
    console.log(a, b);
})

(6)[9, 25, 15129, 0, 16, NaN]
0: 9
1: 25
2: 15129
3: 0
4: 16
5: NaN