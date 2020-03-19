// 只试用有序数组（也叫升序排列）

var a = [1, 20, 25, 34, 39, 47, 86, 90, 100, 102]
var b = 102;

function search(arr, num) {
    var star = 0;
    var end = arr.length - 1;

    while (star <= end) {
        var mid = Math.ceil((star + end) / 2);
        console.log(mid);
        if (num > arr[mid]) {
            star = mid + 1;

        } else if (num < arr[mid]) {
            end = mid - 1;
        } else {
            return mid;
        }
    }
    console.log(arr, num, star, end);
    return -1;
}

console.log(search(a, b))



// 递归  自己调用自己

var a = 5;

function recursive(b) {
    console.log('1')
    if (b <= 0) {
        return;
    }

    --b;
    recursive(b);
    console.log('3');

}


recursive(a)