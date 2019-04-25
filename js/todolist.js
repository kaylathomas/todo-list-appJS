$( document ).ready(function() {

// let todoForm = document.getElementById('todoForm');
// let itemList = document.getElementById('todoList')

// //Form submit event
// todoForm.addEventListener('submit', addItem);
// //Delete event
// itemList.addEventListener('click', removeItem)

// //Add item 
// function addItem(e){
//     e.preventDefault(); //Prevents normal default for form submission

//     //Get input value
//     let newItem = document.getElementById('todoInput').value;

//     //Create new li element
//     let li = document.createElement('li');
//     //Add a class to it
//     li.className = 'list-group-item'
//     //Add text node with input value
//     li.appendChild(document.createTextNode(newItem));

//     //Create delete button
//     let deleteBtn = document.createElement('button')
//     //Add classes to delete button
//     deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
//     //Append text node
//     deleteBtn.appendChild(document.createTextNode('X'))
//     //Append button to li
//     li.appendChild(deleteBtn)

//     //Append li to list
//     itemList.appendChild(li);

//     //Remove item
//     function removeItem(e){
//         if(e.target.classList.contains('delete')){
//             if(confirm('Are you sure?')){
//                 var li = e.target.parentElement;
//             }
//         }
//     }
// }




    //ADD a to-do list item
    $('#addTodo').click(function(event) {
        event.preventDefault();
        let newListItem = $('#todoInput').val();
        $('#todoList').append(
            '<li class="list-group-item">' + newListItem + '<button class="btn btn-danger btn-sm float-right delete"><i class="fa fa-trash" aria-hidden="true" id="trashcan"></i></button></li>'
        );
            //DELETE to-do list item
        $('.btn-danger').click(function(event) {
            console.log($(this).parent().html())
            event.preventDefault();
            $(this).parent().remove();;
        })
    })

    // $('.btn-warning').click(function(event) {
    //     event.preventDefault();
    //     let newList = $()
    // })
})