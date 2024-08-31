

const inputTodo = document.querySelector('#inputtodo');
const submitTodo = document.querySelector('#submitTodo');
const todoList = document.querySelector('#todoList');
const form = document.querySelector('form');

let totaltask = document.querySelector('#totalTasks');
let compleatetask = document.querySelector('#completedTasks');
let remainingtask = document.querySelector('#remainingTasks');
totaltask.textContent = 0
compleatetask.textContent = 0
remainingtask.textContent = 0

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

    const todoElement = document.createElement('li');
    todoElement.textContent = text;
    todoArray.push(todoElement); 
    totaltask.textContent = todoArray.length
   
    
    const dateli = document.createElement('li');
    const dateTime = new Date(); //get the current date and time
    const dateTimeString = `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`; // format the date and time as a string
    dateli.innerHTML = `<h1>${dateTimeString}</h1>`; 

    const taskdelete = document.createElement('button');
    taskdelete.type = 'submit';
    taskdelete.id = 'deletebtn';
    taskdelete.className = 'px-12 py-2 rounded font-bold bg-red-600 hover:bg-green-500 ';
    taskdelete.textContent = 'Delete';

    const taskedit = document.createElement('button');
    taskedit.type = 'submit';
    taskedit.id = 'editbtn';
    taskedit.className = 'px-12 py-2  rounded font-bold bg-yellow-600 hover:bg-green-500 ';
    taskedit.textContent = 'Edit';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'ml-4';
    checkbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            todoElement.classList.add('line-through');
        } else {
            todoElement.classList.remove('line-through');
        }
        
        compleatetask.textContent = todoArray.filter(todo => todo.classList.contains('line-through')).length;
        let total = parseInt(totaltask.textContent);
        let complete = parseInt(compleatetask.textContent);
        remainingtask.textContent = total - complete;
    });

    let total = parseInt(totaltask.textContent);
    let complete = parseInt(compleatetask.textContent);
    remainingtask.textContent = total - complete;

   

    ul.appendChild(numli);
    ul.appendChild(todoElement);
    ul.appendChild(dateli);
    ul.appendChild(taskdelete);
    ul.appendChild(taskedit);
    ul.appendChild(checkbox);

    
    

    taskdelete.addEventListener('click',(e)=>{
        e.stopPropagation();
        numli.remove()
        todoElement.remove();
        dateli.remove();
        taskdelete.remove();
        taskedit.remove();
        totaltask.remove()
        checkbox.remove();
    })

    taskedit.addEventListener('click',(e)=>{
        e.stopPropagation();
        const newText = prompt('Enter new text',todoElement.textContent);
        if(newText){
            todoElement.textContent = newText;
        }
        
    });


}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
})
