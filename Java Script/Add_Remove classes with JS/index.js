var mainheading = document.getElementById("main-heading");

var btn = document.getElementById('Btn-click')

var sidebar = document.getElementById('sidebar')

mainheading.classList.add('big');

btn.addEventListener('click', function() {
   
    setTimeout(function() {
        mainheading.classList.remove('big')
    }, 1500);

})
