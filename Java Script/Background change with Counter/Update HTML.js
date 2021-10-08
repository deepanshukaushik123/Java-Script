var countDownElement = document.getElementById('countdown')

var initialCountdownVal = countDownElement.innerHTML


setInterval(function(){
    initialCountdownVal =
    initialCountdownVal > 0 ?
    initialCountdownVal - 1 : 0;
    countDownElement.innerHTML = initialCountdownVal
}, 1000);

