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