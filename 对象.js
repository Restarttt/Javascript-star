// 对象是一系列key-value属性的集合（ 属性/值）
//



var n = {
        name: 'who',
        age: 3,
        color: 'blue',
        color: "sky"
    }
    // 通过 .  [] 访问对象属性
    // 对象具有唯一性 key一样后面覆盖前面
console.log(n.color)
console.log(n.color = 'red')
console.log(n['age'] = 8)

// 通过赋值  对象n的值会改变
{ name: "who", age: 8, color: "red" }


// 区别


var n = {
    name: 'who',
    age: 3,
    color: 'blue'

}
console.log(n.name)


// 定义一个变量只能通过[]访问属性值
var a = 3;


console.log(n[a])



// 对象方法---属性方法
// this---表示访问当前对象的属性

var cat = {
    color: 'gray ',
    size: 12,
    weight: function(a, b) {
        console.log(a, b)
        console.log(this.color)

    }

}
cat.weight('20kg')
console.log(cat.weight)
console.log(cat.size = 14)