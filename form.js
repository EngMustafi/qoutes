let username = document.querySelector('#username')
let password = document.getElementById('password')
let button = document.getElementById('btn')
let check = document.getElementById('checking')

user = 'cabaas'
pass = 12345

button.addEventListener('submit',function(e){
   if (username.value == user && password.value == pass){
        console.log('Pass')

   }
   else if (username.value == '' || password.value == ''){
    check.textContent='Please Enter Username and password'
    e.preventDefault()
}
   else{
        check.textContent='Incorrect Username or password'
        e.preventDefault()
   }
 
    
    
})
