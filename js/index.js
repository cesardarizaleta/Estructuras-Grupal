var nav_before = document.getElementsByClassName('nav-before')[0]
var nav = document.getElementsByClassName('navbar')[0]
var box = document.getElementsByClassName('main-index')[0]
var closeside = document.getElementById('close')
var ejtitle = document.getElementById('ejercicios-titlenav')
var listaejercicios = document.getElementById('list-nav')
listaejercicios.style.display = 'none'
var inicio = document.getElementById('init')
var github = document.getElementById('git')

//Apertura de Menu
nav_before.addEventListener('click',()=>{
    nav.style.display = 'flex'
    nav_before.style.display = 'none';
})

//Cierre de Menu
closeside.addEventListener('click',()=>{
    nav.style.display = 'none'
    nav_before.style.display = 'flex'
})

//Redireccion a la portada
inicio.addEventListener('click',()=>{
    location.href = '#mainer'
})

//Redireccion de Github
github.addEventListener('click',()=>{
    location.href = 'https://github.com/PepoTH/Estructuras-Grupal'
})

//Verificar para abrir y cerrar ejercicios
var openit = true
ejtitle.addEventListener('click',()=>{
    if(openit == true){
        listaejercicios.style.display = 'flex'
        openit = false
    }
    else{
        listaejercicios.style.display = 'none'
        openit = true
    }
})

//Validacion de Numeros
function validNumber(e){
    if (isNaN(e.key)){
        e.preventDefault()
    }
}

//Factorial
function factorial (n) {
	let total = 1;
	for (i=1; i<=n; i++) {
		total = total * i;
	}
	return total;
}

//Combinacion
function combinacion(n,k){
    let c = (factorial(n))/((factorial(n-k)*factorial(k)))
    return c
}

//Permutacion
function permutacion(n,k){
    let p = (factorial(n))/(factorial(n-k))
    return p
}


//Ejercicio 1
document.getElementById('operar1').addEventListener('click',()=>{
    let n = parseInt(document.getElementById('personas1').value)
    let k = parseInt(document.getElementById('sitios1').value)
    let res = document.getElementsByClassName('result1')[0]
    if(isNaN(n) || isNaN(k)){
        alert('Por favor, introduce números válidos')
    }
    else if(n < k){
        alert('El numero de personas no puede ser menor al numero de sitios')
    }
    else{
        res.innerHTML = 'Solucion: '+combinacion(n,k)
    }
})

//Ejercicio 2
document.getElementById('operar2').addEventListener('click',()=>{
    let n = parseInt(document.getElementById('alumnos2').value)
    let k = parseInt(document.getElementById('premios2').value)
    let res = document.getElementsByClassName('result2')[0]
    let opcion = document.getElementById('opcion2').value
    if(isNaN(n) || isNaN(k)){
        alert('Por favor, introduce números válidos')
    }
    else if(n < k){
        alert('El numero de alumnos no puede ser menor al numero de premios')
    }
    else{
        if(opcion == 'Diferentes'){
            res.innerHTML = 'Solucion: '+permutacion(n,k)
        }
        else{
            res.innerHTML = 'Solucion: '+combinacion(n,k)
        }
    }
})

//Ejercicio 3
document.getElementById('operar3').addEventListener('click',()=>{
    let n = parseInt(document.getElementById('lados3').value)
    let res = document.getElementsByClassName('result3')[0]
    if(isNaN(n)){
        alert('Por favor, introduce números válidos')
    }
    else if(n < 4){
        alert('El numero de lado no puede ser menor a 4')
    }
    else{
        res.innerHTML = 'Solucion: '+ n * (n - 3) / 2;
    }
})

//Ejercicio 4
document.getElementById('operar4').addEventListener('click',()=>{
    let n = parseInt(document.getElementById('hombres4').value)
    let k = parseInt(document.getElementById('mujeres4').value)
    let res = document.getElementsByClassName('result4')[0]
    if(isNaN(n) || isNaN(k)){
        alert('Por favor, introduce números válidos')
    }
    else if(n < 1 || k < 1){
        alert('El numero de hombres y mujeres no puede ser menor a 1')
    }
    else{
        res.innerHTML = 'Solucion: '+ combinacion(n+k,k) * factorial(n)
    }
})

//Ejercicio 5
document.getElementById('operar5').addEventListener('click',()=>{
    let n = parseInt(document.getElementById('digitos5').value)
    let opcion = document.getElementById('opcion5').value
    let res = document.getElementsByClassName('result5')[0]
    if(isNaN(n)){
        alert('Por favor, introduce números válidos')
    }
    else if(n < 1){
        alert('Los digitos no pueden ser menores a 1')
    }
    else{
        if(opcion == 'Repeticion'){
            res.innerHTML = 'Solucion: '+ (9 ** n)
        }
        else {
            res.innerHTML = 'Solucion: '+ permutacion(9,n)
        }
        
    }
})

//Ejercicio 6
document.getElementById('operar6').addEventListener('click',()=>{
    let n = parseInt(document.getElementById('amigos6').value)
    let res = document.getElementsByClassName('result6')[0]
    if(isNaN(n)){
        alert('Por favor, introduce números válidos')
    }
    else if(n < 1){
        alert('Los digitos no pueden ser menores a 1')
    }
    else{
        res.innerHTML = 'Solucion: '+ 365**n
    }
})

//Ejercicio 7
document.getElementById('operar7').addEventListener('click',()=>{
    let n = parseInt(document.getElementById('rayas7').value)
    let k = parseInt(document.getElementById('puntos7').value)
    let res = document.getElementsByClassName('result7')[0]
    if(isNaN(n) || isNaN(k)){
        alert('Por favor, introduce números válidos')
    }
    else if(n < 1 || k < 1){
        alert('Los digitos no pueden ser menores a 1')
    }
    else{
        res.innerHTML = 'Solucion: '+ factorial(n+k)/(factorial(n)*factorial(k))
    }
})

//Ejercicio 8
document.getElementById('operar8').addEventListener('click',()=>{
    let total = parseInt(document.getElementById('total8').value)
    let n = parseInt(document.getElementById('cara8').value)
    let k = parseInt(document.getElementById('cruz8').value)
    let opcion = document.getElementById('opcion8').value
    let res = document.getElementsByClassName('result8')[0]
    if(isNaN(n) || isNaN(k) || isNaN(total)){
        alert('Por favor, introduce números válidos')
    }
    else if(n < 1 || k < 1 || total < 1){
        alert('Los numeros no pueden ser menores a 1')
    }
    else if(n+k > total || n+k < total){
        alert('La suma de cara y cruz tiene que ser igual al total')
    }
    else{
        if(opcion == 'Resultados'){
            res.innerHTML = 'Solucion: '+ 2 ** total
        }
        else{
            res.innerHTML = 'Solucion: '+ factorial(total)/(factorial(n)*factorial(k))
        }
    }
})

//Ejercicio 9