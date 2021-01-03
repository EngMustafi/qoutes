let username = document.querySelector('#username')
let password = document.getElementById('password')
let button = document.getElementById('btn')
let check = document.getElementById('checking')

let user = 'cabaas'
let pass = 12345

button.addEventListener('click',function(e){
    if (username.value == '' || password.value == ''){
     check.textContent='Please Enter Username and password'
     e.preventDefault()
    }
    else if (username.value != user && password.value != pass){
        check.textContent='Incorrect Username or password'
     e.preventDefault()
 
    }
  
     
     
 })
