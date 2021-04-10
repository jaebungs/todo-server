import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(process.env.SQL_DATABASE, process.env.SQL_USER, process.env.SQL_PASSWORD, {
  host: process.env.SQL_HOST,
  dialect: 'postgres',
  port: 5432,
  dialectOptions: {
    ssl: { rejectUnauthorized: false }
  }
});

sequelize.sync()
.then(()=>{
  console.log('connection has been established.');
})
.catch((err)=>{
  console.log('Unable to connect to the database', err);
})

