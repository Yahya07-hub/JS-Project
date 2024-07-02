Array = [1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D', 'E']
let getOtp = document.querySelector('#refreshBtn')
let logIn = document.querySelector('#loginBtn')
let captha = document.querySelector('#captha')
let studentId = document.querySelector('#username')
let password = document.querySelector('#password')

// Generate captcha on page load
window.onload = generateCaptcha;

getOtp.addEventListener('click', generateCaptcha);

logIn.addEventListener('click', () => {
    if (otp.value.toUpperCase() === captha.innerHTML && studentId.value === 'admin' && password.value === '123456') {
        alert("Welcome Admin");
    } else {
        alert('Wrong Username or password');
    }
});

function generateCaptcha(e){
    e.preventDefault();

    let randomIndex = '';
    for (let i = 0; i <= 5; i++) {
        randomIndex += Array[Math.floor(Math.random() * Array.length)];
    }
    captha.innerHTML = randomIndex;
}