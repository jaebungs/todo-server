import Sequelize from 'sequelize';
import { sequelize} from '../sequelize.js';

const Todo = sequelize.define('Todo', {
    title: Sequelize.STRING,
    description: Sequelize.STRING
});

const createTodo = async (req, res) => {
    const {todo, description} = req.body;
    try {
        sequelize.sync().then(()=>{
            Todo.create({
                title: todo,
                description: description
            }).then((data)=>{
                res.status(200).json({data})
                console.log('Todo added');
            }).catch(()=>{
                console.log('Todo creating failed. Something wrong.');
            })
        })    
    } catch (err) {
        res.status(500).json({message: 'Creat Todo Failed.'})
        console.log(err)
    }
    
}
const getTodo = async (req, res) => {
    try {
        Todo.findAll({
            attribute: ['title']
        }).then(data => {
            data = data.map(value => value)
            for (let i=0; i < data.length; i++){
                console.log(data[i])
            }
        })
    } catch (err) {
        res.status(500).json({ message: 'Creat Todo Failed.' });
        console.log(err);
    }
}

export{ createTodo, getTodo }