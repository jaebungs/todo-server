import Sequelize from 'sequelize';
import { sequelize} from '../sequelize.js';

const Todo = sequelize.define('Todo', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }        
});

const createTodo = async (req, res) => {
    const {todo, description} = req.body;
    try {
        sequelize.sync().then(()=>{
            Todo.create({
                title: todo,
                description: description
            }).then((data)=>{
                res.status(200).json({data});
                res.send('todo created')
                console.log('Todo added');
            }).catch(()=>{
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
            res.send(data);
            console.log(data)
        })
    } catch (err) {
        res.status(500).json({ message: 'Creat Todo Failed.' });
        console.log(err);
    }
}

export{ createTodo, getTodo }