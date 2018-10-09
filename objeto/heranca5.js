console.log(typeof String)

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

//Array.prototype.first = () => this[0]
Array.prototype.first = function() {
         return this[0]
}

console.log('Diego Felipe'.reverse())
console.log([1,2,3,4,5,6,7].first())
