// 2 求字符串中最大的数‘ 34234234324’ => 4 
let a = '34234234324'

function getmax(str) {
    let max = null;
    for (var i = 0; i < str.length; i++) {
        let b = parseInt(str[i])
            // console.log(b)
        if (b > max || max == null) {
            max = b;
        }
    }
    return max;
}
console.log(getmax(a))

// ' 求字符串中最大的数 '31239' => 9
let a = '311039'

function getmax(str) {
    let max = 0;
    for (var i = 0; i < str.length; i++) {
        let b = parseInt(str[i])
            // console.log(b)
        if (b > max || max == null) {
            max = b;
        }
    }
    return max;
}
console.log(getmax(a))



// 3 求字符串中最大的数‘ 3423 abc7de '  =>  7
let a = '3423 abc7de '

function getmax(str) {
    let max = null;
    for (var i = 0; i < str.length; i++) {
        let b = parseInt(str[i])
        console.log(b)
        if (b > max || max == null) {
            max = b;
            console.log(max)
        }
    }
    return max;
}
console.log(getmax(a))