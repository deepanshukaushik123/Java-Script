var username = document.getElementById('username');
var loginForm = document.getElementById('login-form')

username.addEventListener('input', function(event) {
    var currentValue = event.target.value;
    currentValue = currentValue.toUpperCase();
    console.log(currentValue);
    username.value = currentValue;
});

//Focus Event
username.addEventListener('focus', function() {
    console.log('Element Focused');
})

//Blur Event
username.addEventListener('blur', function() {
    console.log('Element Looses Focus');
})

// Submit Event
loginForm.addEventListener('submit', function(e) {
    alert('Submit Button Clicked')
    e.preventDefault();
})