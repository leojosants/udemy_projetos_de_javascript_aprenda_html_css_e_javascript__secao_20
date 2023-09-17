/* element selection */
const cancel_edit_button = document.querySelector('[data_cancel_edit_button]');
const todo_input = document.querySelector('[data_todo_input]');
const edit_input = document.querySelector('[data_edit_input]');
const todo_form = document.querySelector('[data_todo_form]');
const todo_list = document.querySelector('[data_todo_list]');
const edit_form = document.querySelector('[data_edit_form]');

/* functions */

/* events */
todo_form.addEventListener('click', (event) => {
    event.preventDefault();
    const input_value = todo_input.value;

    if (input_value) {
        console.log(input_value);
    };
});