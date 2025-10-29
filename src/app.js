import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

// for each
// TODO los que es FOR, NO DEVUELVE, NO TIENE RETURN
// for each es un loop con esteroides
const arr = ['pepe', 'maria', 'lola', 'matia', 'barbara']


const sayHi = (name) => {
  console.log('hi ' + name)
  return 'hi ' + name
}

for (let name of arr) {
  console.log(name)
  sayHi(name)
}

for (let i in  arr) {
  console.log(i) // indice
  console.log(arr[i]) // valor
  console.log(i, arr[i]) // indice y valor
  sayHi(arr[i])
}

//callback
arr.forEach(el=>{
  console.log('forEach -> ',el)
})

arr.forEach(el=>{
  if (el.length > 4) {
    console.log(el)
  }
})
// primer parametro de la funcion es el valor, segundo parametro es el indice
arr.forEach((el, i) =>{
  console.log(el, i)
})


arr.forEach(sayHi) // se llama a la funcion, no se ejecuta. es decir, se pone sin ()
let retornos = arr.forEach(sayHi) // da indefinido, el forEach no devuelve nada
console.log('retornos', retornos)
//map
// SI DEVUELVE
retornos = arr.map(sayHi) // devuelve un NUEVO array
console.log('retornos', retornos)


const nombresConPerez = arr.map(el=> {
  return el+" Perez"
})
console.log(nombresConPerez)

const nums = [1,2,3,4,5,6,7,8,9]

const potenciados = nums.map((el, i)=> {
  return el*el
})
console.log(nums)
console.log(potenciados)

const numsEven = nums.map(el=>{
  if ( el%2==0){
    return el
  }
})
console.log(numsEven)


//filter

// const newNumsEven = nums.filter(el=>{
//   if ( el%2==0){
//     return el
//   }
// })

const newNumsEven = nums.filter((el, i)=> el%2==0) 
console.log(newNumsEven)

console.log(10%2) // devuelve 0
console.log(10%3) // devuelve 1

//reduce
let initialValue = 100

// notas de mi estudiante
const student = {
  notas : [5,5,5,4],
  faltas: 3
}

const sumatoria = nums.reduce((acc, current) => acc + current, initialValue )
console.log(sumatoria)

const gradeStudent = (student) => {
  let extraPoints= 0 
  if (student.faltas< 3) {
 extraPoints = 10
  }
 if (student.faltas>= 3 && student.faltas<6) {
 extraPoints = 5
  }
  return student.notas.reduce((acc, val) => acc+val, extraPoints)
}

const pepe = {
  notas : [5,5,5,4],
  faltas: 1
}
const lola = {
  notas : [5,5,5,4],
  faltas: 10
}

const matia =  {...pepe, faltas: 15 } // copiamos objeto pepe, modificamos faltas de 1 a 15
console.log('matia--------------------------------------', pepe)

console.log('matia--------------------------------------', matia)
console.log(gradeStudent(student))
console.log(gradeStudent(pepe))
console.log(gradeStudent(lola))

console.log(nums.reduce((a,b)=> a+b))

//ejemplo para sacar promedio
const sacarPromedio = (notas) => (notas.reduce((a,b)=>a+b)/notas.length).toFixed(2)
console.log(sacarPromedio([10,10,5,8]))


const arr1 = [1,2,3]
const arr2 = arr1
console.log(arr1===arr2) // true
const arr3 = [1,2,3]
console.log(arr1===arr3) // false
const arr4 = [...arr1] // spread operator

console.log('arr1',arr1)
console.log('arr2',arr2)
console.log('arr4',arr4)

arr1.push(5)
console.log('arr1',arr1)
console.log('arr2',arr2)
console.log('arr4',arr4)


const text1 = 'pepe'
const text2 = 'pepe'
console.log(text1 === text2)

console.log(arr1[1] === arr3[1])
console.log([...arr1, 5,8,6]) // copiamos el contenido y añadimos los elemtos que queramos

//NO SE MODIFICA ARRAY ORIGINAL, OBJETO ORIGINAL


const newArrTest = [1,2,3,4]

console.log(newArrTest)
newArrTest.push(5) // añadir 5 al final
console.log('push',newArrTest)
newArrTest.pop() // elimina ultimo valor del array
console.log('pop',newArrTest)
newArrTest.shift() // elimina el primer elemento
console.log('shift',newArrTest)
newArrTest.unshift(5) // elimina ultimo valor del array
console.log('unshift',newArrTest) // añade valor al principio del array

//slice --> una porcion del array --> no modifica array padre ---> retorna un array nuevo
const porcion = newArrTest.slice(1,3)
console.log(newArrTest)
console.log(porcion)


// splice ---> OJO, DANGER< CUIDADO< PELIGRO!!!!! MODIFICA EL PADRE
console.table(newArrTest)
// newArrTest.splice(0, 2) // elimina dos elementos desde la posicion 0
// newArrTest.splice(0, 2, 'pepe', 'matia', 'susano') // elimina 2 elementos desde la posicion 0 e inserta en esa posicion los elementos que le pasemos
newArrTest.splice(2, 0, 'pepe', 'matia', 'susano') // desde la posicion 2, no elimines nada, inserta tantos elementos como te he pasado

console.table(newArrTest)


// programacion funcional 
// una funcion ---> una responsabilidad

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

const randomNumber = arr => {
  return Math.floor(Math.random() * arr.length)
}

console.log(randomNumber(who))
console.log(randomNumber(action))
console.log(randomNumber(what))
console.log(randomNumber('esto es un string'))

