(function logThis(){
    console.log(this === module.exports) // false
    console.log(this === global) // true

    this.perigo = '...' //add no global /!\ CUIDADO
})()
