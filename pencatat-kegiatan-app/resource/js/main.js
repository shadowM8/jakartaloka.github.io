// function pencetButton(){
//     console.log('oi')
// }

// var add = document.getElementById('add')
// add.addEventListener('click', pencetButton)

//saat user memencet button add maka
//jika ada text di dalam placeholder, text tersebut akan masuk ke dalam to-do list


// Remove and complete icons in SVG format
var removeSVG = '<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" version="1.1" width="22px" height="22px"><g id="surface1"><path class="fill" d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z "/></g></svg>';
var completeSVG = '<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" version="1.1" width="22px" height="22px"><g id="surface1"><path class="fill" d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z "/></g></svg>';

document.getElementById('add').addEventListener('click', function(){
    var value = document.getElementById('item').value
    if(value){
        addItemToDo(value)
        document.getElementById('item').value = ''
    }
})

function removeItem(){
    var item = this.parentNode.parentNode
    var parent = item.parentNode

    parent.removeChild(item)
}

function completeItem(){
    var item = this.parentNode.parentNode
    var parent = item.parentNode
    var id = parent.id

    // cek jika item text sebaiknya diletakkan di list yang sudah dilakukan atau diulang lagi di list 
    // yang akan dilakukan

    var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo')

    parent.removeChild(item)
    target.insertBefore(item, target.childNodes[0])

    // if (id === 'todo'){
    //     // jika idnya todo maka item ini akan dilakukan
    //     target = document.getElementById('completed')
    // }
    // else {
    //     //jika idnya completed berarti item sudah dilakukan, mungkin akan diulang
    //     target = document.getElementById('todo')
    // }
}

//menambahkan text ke dalam daftar todolist
function addItemToDo(text){

    var list = document.getElementById('todo')

    var item = document.createElement('li')
    item.innerText = text

    var buttons = document.createElement('div')
    buttons.classList.add('buttons')

    var remove = document.createElement('button')
    remove.classList.add('remove')
    remove.innerHTML = removeSVG

    //add clickEvent untuk meremove item text
    remove.addEventListener('click', removeItem)

    var complete = document.createElement('button')
    complete.classList.add('complete')
    complete.innerHTML = completeSVG

    //add clickEvent untuk menambah item text yang sudah dikerjakan
    complete.addEventListener('click', completeItem)

    buttons.appendChild(remove)
    buttons.appendChild(complete)
    item.appendChild(buttons)

    list.insertBefore(item, list.childNodes[0])
}