let lista0 = ["pan", "manteca", "cereales", "vegetales", "leche"]
console.log(lista0)
lista0.push("Aceite de Girasol")
console.log(lista0)

lista0.pop()
console.log(lista0)

const listapeliculas = [
    {Titulo: "Kung Fu Panda", Director: "Mark Osborne", Fecha: 2008},
    {Titulo: "Mision Imposible", Director: "Brian De Palma", Fecha: 1996},
    {Titulo: "Milagro en la celda 7", Director: "Mehmet Ada Öztekin", Fecha: 2019}
]

const porfecha = listapeliculas.filter(valor => valor.Fecha > 2010)
console.log(porfecha)

const directores = listapeliculas.map(valor => valor.Director)
console.log(directores)

const titulos = listapeliculas.map(valor => valor.Titulo)
console.log(titulos)

const titulo_director = titulos.concat(directores)
console.log(titulo_director)

const titulo_director_propagacion = [...titulos, ...directores]
console.log(titulo_director_propagacion)
