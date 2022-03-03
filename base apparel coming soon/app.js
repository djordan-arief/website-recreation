const email = document.querySelector('#email');
const submit = document.querySelector('#submit');
const showError = document.querySelector('.showError');

console.log(showError);

submit.addEventListener('click', (e)=>{
    if(email.value === '' || email.value == null){
        showError.textContent = 'the email is invalid *';
        showError.style.color = 'red'
        e.preventDefault()
    }else{
        alert('Thank You for subscribing to our newsletter')
    }
   
})