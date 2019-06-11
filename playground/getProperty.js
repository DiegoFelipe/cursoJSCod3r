const person = {
    birthDate: '2010-05-05',
    get age() {
      let yearNow = new Date
      let birthDate = new Date(this.birthDate)
      return yearNow.getFullYear() - birthDate.getFullYear()
    }
  }
  
  console.log(person.age)