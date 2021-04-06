import Sequelize from 'sequelize';
import { sequelize} from '../sequelize.js';

const Todo = sequelize.define('Todo', {
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    }
});

const createTodo = async (req, res) => {
    try {
        sequelize.sync().then(()=>{
            Todo.create({
                title: req.body.title,
                description: req.body.description
            }).then((data)=>{
                res.send(data);
                console.log('Todo added');
            }).catch(()=>{
                res.status(500).json({ message: 'Creat Todo Failed.' });
                console.log('Todo creating failed. Something wrong.');
            })
        })
    } catch (err) {
        res.status(500).json({message: 'Creat Todo Failed.'});
        console.log(err);
    }
}

const getTodo = async (req, res) => {
    try {
        Todo.findAll().then(data => {
            res.status(200).json(data);
        })
    } catch (err) {
        res.status(500).json({ message: 'Creat Todo Failed.' });
        console.log(err);
    }
}

const deleteTodo = async (req, res) => {
    try {
        Todo.destroy({
            where: {id: req.body.id}
        })
        .then(()=>{
            res.status(200).send({message: `Deleting ${req.body.id} was succssful.`});
        })
    } catch (err) {
        res.status(500).json({ message: 'Delete Todo Failed.' });
        console.log(err)
    }
}

const updateTodo = async (req, res) => {
    try {
        Todo.update({
            title: req.body.title,
            description: req.body.description
        }, {
            where: {id: req.body.id}
        })
        .then((data)=>{
            res.status(200).json(data)
        })
    } catch (err) {
        res.status(500).json({ message: 'Delete Todo Failed.' });
    }
}

export{ createTodo, getTodo, deleteTodo, updateTodo }