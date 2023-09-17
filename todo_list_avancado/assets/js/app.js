/* element selection */
const cancel_edit_button = document.querySelector('[data_cancel_edit_button]');
const todo_input = document.querySelector('[data_todo_input]');
const edit_input = document.querySelector('[data_edit_input]');
const todo_form = document.querySelector('[data_todo_form]');
const todo_list = document.querySelector('[data_todo_list]');
const edit_form = document.querySelector('[data_edit_form]');

/* functions */
const saveTodo = (text) => {
    const todo = document.createElement('div');
    todo.classList.add('todo');
    todo.setAttribute('data_todo', '');

    const todo_title = document.createElement('h3');
    todo_title.innerText = text;
    todo.appendChild(todo_title);

    const done_button = document.createElement('button');
    done_button.classList.add('finish_todo');
    done_button.setAttribute('data_finish_todo', '');
    done_button.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(done_button);

    const edit_button = document.createElement('button');
    edit_button.classList.add('edit_button');
    edit_button.setAttribute('data_edit_todo', '');
    edit_button.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(edit_button);

    const remove_button = document.createElement('button');
    remove_button.classList.add('remove_button');
    remove_button.setAttribute('data_remove_todo', '');
    remove_button.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(remove_button);

    todo_list.appendChild(todo);
    todo_input.value = '';
    todo_input.focus();
    
};

/* events */
todo_form.addEventListener('click', (event) => {
    event.preventDefault();
    const input_value = todo_input.value;

    if (input_value) {
        saveTodo(input_value);
    };
});