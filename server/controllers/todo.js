import * as todoService from '../services/todo';

const createTodo = async (req, res) => {
    try {
        const todo = await todoService.createTodo(req.body);
        res.json(todo);
    } catch (err) {
        res.status(500).json({message: 'Creat Todo Failed.' + err});
    }
}

const getTodos = async (req, res) => {
    try {
        const todos =await todoService.getTodos();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: 'Creat Todo Failed.' });
        console.log(err);
    }
}

const deleteTodo = async (req, res) => {
    try {
        await todoService.deleteTodo(req.params.id);
        res.status(200).send({message: `Deleting ${req.body.id} was succssful.`});
    } catch (err) {
        res.status(500).json({ message: 'Delete Todo Failed.' });
        console.log(err)
    }
}

const updateTodo = async (req, res) => {
    try {
        const todo = await todoService.updateTodo(req.body.id, req.body);
        res.status(200).json(todo);
    } catch (err) {
        res.status(500).json({ message: 'Update todo Failed.' });
    }
}

export{ createTodo, getTodos, deleteTodo, updateTodo };