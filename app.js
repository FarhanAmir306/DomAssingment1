

const inputTodo = document.querySelector('#inputtodo');
const submitTodo = document.querySelector('#submitTodo');
const todoList = document.querySelector('#todoList');
const form = document.querySelector('form');

const totaltask = document.querySelector('#totalTasks');

submitTodo.addEventListener('click', (e) => {
    e.preventDefault();
    const todoText = inputTodo.value;
    inputTodo.value = '';
    createTodoElement(todoText);
    alert('Todo added successfully')
})

let todoArray = [];
function createTodoElement(text){
    const ul = document.querySelector('#todoList');
    const numli = document.createElement('li');
    numli.innerHTML = `<h1>${todoArray.length + 1}</h1>`;
    ul.appendChild(numli);

    const todoElement = document.createElement('li');
    todoElement.textContent = text;
    todoArray.push(todoElement); 
    totaltask.innerHTML = `<span class="text-4xl pt-3 text-purple-500">${todoArray.length}</span>`
    
    const dateli = document.createElement('li');
    const dateTime = new Date(); //get the current date and time
    const dateTimeString = `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`; // format the date and time as a string
    dateli.innerHTML = `<h1>${dateTimeString}</h1>`; 

    const taskdelete = document.createElement('button');
    taskdelete.type = 'submit';
    taskdelete.id = 'deletebtn';
    taskdelete.className = 'px-8 py-3 rounded-xl font-bold bg-red-600 hover:bg-green-500 mx-10';
    taskdelete.textContent = 'Delete';

    const taskedit = document.createElement('button');
    taskedit.type = 'submit';
    taskedit.id = 'editbtn';
    taskedit.className = 'px-8 py-3 rounded-xl font-bold bg-yellow-600 hover:bg-red-500 mx-10';
    taskedit.textContent = 'Edit';

    ul.appendChild(numli);
    ul.appendChild(todoElement);
    ul.appendChild(dateli);
    ul.appendChild(taskdelete);
    ul.appendChild(taskedit);


    taskdelete.addEventListener('click',(e)=>{
        e.stopPropagation();
        todoElement.remove();
        numli.remove()
        dateli.remove();
        taskdelete.remove();
        taskedit.remove();
        totaltask.remove()
    })

    taskedit.addEventListener('click',(e)=>{
        e.stopPropagation();
        const newText = prompt('Enter new text');
        todoElement.textContent = newText;
        
    })


}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
})
