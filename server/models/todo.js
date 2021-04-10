import Sequelize from 'sequelize';
import { sequelize} from '../sequelize.js';

const Todo = sequelize.define('Todo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    }
});

export default Todo;