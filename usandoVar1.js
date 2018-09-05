{
  {
    {
      {
        var sera = 'Será ????' // escopo global
      }
    }
  }
}

console.log(sera) // funciona

function teste() {
  var local = 123 // visível apenas na função
}

teste()
console.log(local) // local is not defined
