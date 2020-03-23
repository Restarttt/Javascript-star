// 使用new关键字实例化的时候发生了什么？
// 以上文中的Prince() 函数举个栗子：

// 1. 第一步， 创建一个空对象。

// var prince = {}
// 2. 第二步， 将构造函数Prince() 中的this指向新创建的对象prince。
// 3. 第三步， 将prince的_proto_属性指向Prince函数的prototype， 创建对象和原型间关系
// 4. 第四步， 执行构造函数Prince() 内的代码。





// 构造函数的名称一般都是首字母大写
// 挂载在this上面的属性为实例属性， 实例属性再每个实例间都是独立的
// 原型链属性通过prototype添加， 他是所有实例共享的
// 类方法 / 静态属性只能由构造函数本身访问
// 当实例属性和原型链上的属性重名时， 优先访问实例属性， 没有实例属性再访问原型属性
// 大多数浏览器的 ES5 实现之中， 每一个对象都有__proto__属性， 指向其的构造函数的prototype属性对象


// 创建构造函数
function Person(name, age) {
    // 挂载在this上面的都是实例属性
    this.name = name
    this.age = age
}

// 创建实例
var p1 = new Person("张三", 20)
var p2 = new Person("李四", 18)
    // 访问实例属性
console.log(p1.name, p1.age) //张三 20
console.log(p2.name, p2.age) //李四 18
    // 修改实例属性
p1.age = 25
p2.age = 23
console.log(p1.name, p1.age) //张三 25
console.log(p2.name, p2.age) //李四 23

// 添加原型链属性/方法（所有实例共享）
Person.prototype.sayHello = function() {
        console.log(`我的名字是${this.name},今年${this.age}岁`)
    }
    // 访问原型链方法
p1.sayHello() //我的名字是张三,今年25岁
p2.sayHello() //我的名字是李四,今年23岁
    // 类方法/静态属性（只能由构造函数本身访问）
Person.title = "这是构造函数的标题"
console.log(Person.title) //"这是构造函数的标题"
console.log(p1.title) //undefined
console.log(p2.title) //undefined

// 动态创建实例方法（与原型链方法重名）
p1.sayHello = function() {
        console.log("我是p1的sayHello()")
    }
    // 优先从实例属性中读取
p1.sayHello() //我是p1的sayHello()
    // p2没有相关实例属性，所以访问原型链方法
p2.sayHello() //我的名字是李四,今年23岁

// __proto__属性
console.log(p2.__proto__) //{sayHello: ƒ, constructor: ƒ}