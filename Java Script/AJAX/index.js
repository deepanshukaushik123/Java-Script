var list = document.getElementById('todo-list');
var btnAdd = document.getElementById('add-items');
var inputBox = document.getElementById('todo-input')
var btnUpdate = document.getElementById('update-items')
var btnRemove = document.getElementById('remove-item');

var currentInputValue = '';
inputBox.addEventListener('input', function(e) {
    currentInputValue = e.target.value;
})

inputBox.addEventListener('keyup', function(e) {
    if(e.keyCode === 13 ) {
        addListItem();
    }
})

function createNewNode() {
    var newListElement = document.createElement('li'); // li is Tag name
    var textNode = document.createTextNode(currentInputValue);
       newListElement.appendChild(textNode);
   newListElement.id = "item" + (list.childElementCount + 1);

    return newListElement;
}


function addListItem() {
    if ( currentInputValue !== undefined && currentInputValue !== null && currentInputValue !== '') {
      
        var newListElement = createNewNode();
       
    list.appendChild(newListElement);
   
    inputBox.value = '';
    currentInputValue = '';

    }

    else {
        alert('Type valid todo item')
    }

}

// list.childElementCount
btnAdd.addEventListener('click', addListItem);


btnUpdate.addEventListener('click', function() {
    var firstElement = list.firstElementChild;
    var newListElement = createNewNode();

    list.replaceChild(newListElement, firstElement);
});

// btnRemove.addEventListener('click', function() {
//     var firstElement = list.firstElementChild;

//     list.removeChild(firstElement);
// })

function createTODODynamically(id, title) {
    var newListElement = document.createElement('li'); // li is Tag name
    var textNode = document.createTextNode(title);
       newListElement.appendChild(textNode);
   newListElement.id = id;

    return newListElement;
}

function getTODOListFromBackend() {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if(this.readyState === 4) {
            if(this.status === 200) {
              var response = JSON.parse(this.responseText);
            for (var i=0; i<response.length; i++) {
                list.appendChild(createTODODynamically(response[i].id, response[i].title));
                // console.log(createTODODynamically(response[i].id, response[i].title))
            }
            } else {
                console.log('Call Failed')
            }
            
        }
    }
    http.open('GET', 'https://jsonplaceholder.typicode.com/todos', 'true');
    http.send();
}

getTODOListFromBackend();


function createTODOItemAtBackend() {
    var http = new XMLHttpRequest();
    http.open ('POST', 'https://jsonplaceholder.typicode.com/todos', 'true');
   var obj = JSON.stringify({
    "userID": 1,
    "title": currentInputValue,
    "completed": false
})
    http.send(obj);
}