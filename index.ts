import { Person } from './person.model';
import {Sequelize} from 'sequelize-typescript';

const sequelize = new Sequelize({
    database: 'db',
    dialect: 'sqlite',
    username: 'root',
    password: '',
    storage: ':memory:',
});

sequelize.addModels([Person]);
const person = new Person({name: 'bob', age: 99});

console.log(person);
