var btn = document.getElementById("button")
var mainDiv = document.querySelector('body')


function onbutton() {
    var randomNum = Math.floor(Math.random() * 255)

    mainDiv.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," +
    Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255)+ ")"
}

btn.addEventListener('click', onbutton)

// btn.onclick = function() {
//     alert('Button clicked');
// }

// btn.onclick = onbutton;


//By event listner
// btn.addEventListener('click' , function() {
// alert('Function called')
// })