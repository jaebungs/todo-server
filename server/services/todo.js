import Todo from '../models/todo'

const createTodo = (todo) => {
    return Todo.create({
            title: todo.title,
            description: todo.description
        });
}

const getTodos = () => {
    return Todo.findAll();
}

const deleteTodo = (id) => {
    return Todo.destroy({
            where: {id}
        });
}

const updateTodo = (id, newTodo) => {
    return Todo.update({
            title: newTodo.title,
            description: newTodo.description
        }, {
            where: {id}
        });
}

export{ createTodo, getTodos, deleteTodo, updateTodo }