/* element selection */
const cancel_edit_button = document.querySelector('#cancel_edit_button');
const filter_select = document.querySelector('#filter_select');
const search_input = document.querySelector('#search_input');
const erase_button = document.querySelector('#erase_button');
const todo_input = document.querySelector('#todo_input');
const edit_input = document.querySelector('#edit_input');
const todo_form = document.querySelector('#todo_form');
const todo_list = document.querySelector('#todo_list');
const edit_form = document.querySelector('#edit_form');
let old_input_value;

/* functions */
const saveTodo = (text) => {
    const todo = document.createElement('div');
    todo.classList.add('todo');

    const todo_title = document.createElement('h3');
    todo_title.innerText = text;
    todo.appendChild(todo_title);

    const done_button = document.createElement('button');
    done_button.classList.add('finish_todo');
    done_button.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(done_button);

    const edit_button = document.createElement('button');
    edit_button.classList.add('edit_todo');
    edit_button.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(edit_button);

    const remove_button = document.createElement('button');
    remove_button.classList.add('remove_todo');
    remove_button.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(remove_button);

    todo_list.appendChild(todo);
    todo_input.value = '';
    todo_input.focus();
};

/* */
const toggleForms = () => {
    edit_form.classList.toggle('hide');
    todo_form.classList.toggle('hide');
    todo_list.classList.toggle('hide');
};

/* */
const updateTodo = (text) => {
    const todos = document.querySelectorAll('.todo');

    todos.forEach((todo) => {
        let todo_title = todo.querySelector('h3');

        if (todo_title.innerText === old_input_value) {
            todo_title.innerText = text;
        };
    });
};

/* */
const getSearchTodos = (search) => {
    const todos = document.querySelectorAll('.todo');

    todos.forEach((todo) => {
        let todo_title = todo.querySelector('h3').innerText.toLowerCase();
        const normalized_search = search.toLowerCase();

        todo.style.display = 'flex';

        if (!todo_title.includes(normalized_search)) {
            todo.style.display = 'none';
         };
    });
};

/* events */
todo_form.addEventListener('click', (event) => {
    event.preventDefault();
    const input_value = todo_input.value;

    if (input_value) {
        saveTodo(input_value);
    };
});

/* */
document.addEventListener('click', (event) => {
    const target_element = event.target;
    const parent_element = target_element.closest('div');
    let todo_title;

    if (parent_element && parent_element.querySelector('h3')) {
        todo_title = parent_element.querySelector('h3').innerText;
    };

    if (target_element.classList.contains('finish_todo')) {
        parent_element.classList.toggle('done');
    };

    if (target_element.classList.contains('remove_todo')) {
        parent_element.remove();
    };

    if (target_element.classList.contains('edit_todo')) {
        toggleForms();
        edit_input.value = todo_title;
        old_input_value = todo_title;
    };
});

/* */
cancel_edit_button.addEventListener('click', (event) => {
    event.preventDefault();
    toggleForms();
});

/* */
edit_form.addEventListener('submit', (event) => {
    event.preventDefault();
    const edit_input_value = edit_input.value;

    if (edit_input_value) {
        updateTodo(edit_input_value);
    };

    toggleForms();
});

/* */
search_input.addEventListener('keyup', (event) => {
    const search = event.target.value;
    getSearchTodos(search);
});

/* */
erase_button.addEventListener('click', (event) => {
    event.preventDefault();
    search_input.value = '';
    search_input.dispatchEvent(new Event('keyup'));
});