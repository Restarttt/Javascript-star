// 异步 (async)
// cpu暂时搁置当前的任务、等待主线程的任务完成后、在响应该任务。
// 异步事件
// 1.ajax异步请求数据

// 2.定时器  setTimeout(定时一次)  setInterval（循环执行）
let num = function() {
    console.log('第一次执行')
    setTimeout(function(a) {
        console.log(a)
    }, 3000, "第二次执行")
    console.log('第三次执行')
}


let num = function() {
    console.log('第一次执行')
    setInterval(function(a) {
        console.log(a)
    }, 3000, "第二次执行")
    console.log('第三次执行')
}


// 同步 (sync)
//任务顺序的执行、在上一个任务完成之前下一个任务等待执行的过程。


// 1. 所有同步任务都在主线程上执行， 形成一个执行栈（ execution context stack）。
// 2. 主线程之外， 还存在一个“ 任务队列”（ task queue）， 只要异步
// 任务有了运行结果， 就在“ 任务队列” 中放置一个事件。
// 3. 一旦“ 执行栈” 中的所有同步任务执行完毕， 系统就会读取“ 任务队
// 列”， 看看里边有哪些事件。 哪些对应的异步任务， 于是结束等待
// 状态， 进入“ 执行栈” 开始执行。
// 4. 主线程不断重复上边的第三步。