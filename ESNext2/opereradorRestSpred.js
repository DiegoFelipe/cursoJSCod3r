// rest pra juntar e o spred pra espalhar

// usar spread com objeto
const funcionario = {nome: 'Maria', salario: 5562.89}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// usar spread com array
const grupoA = ['Pedro','Tiago','João']
const grupoFinal =['Maria',...grupoA,'Diego']
console.log(grupoFinal)
 
