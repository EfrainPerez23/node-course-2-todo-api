let { ObjectID } = require('mongodb');
let { mongoose } = require('./../server/db/mongoose');
let { Todo } = require('./../server/models/todo');
let { User } = require('./../server/models/user');
let id = '59dd03dcfac915a24c433801';

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos ', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo ', todo);
// });

// if (!ObjectID.isValid(id)) {
//     return console.log('Id not valid');
// }
// Todo.findById(id).then((todoById) => {
//     if (todoById) {
//         return console.log('Todo by ID ', todoById);
//     }
//     return console.log('Id not found');
// }).catch((error) => {
//     console.log('Error ', error);
// });

// buscar por ID en user collection
User.findById(id).then((user) => {
    if (user) {
        return console.log('User = ', user);
    }
    return console.log('User not found by ID');
}).catch((error) => {
    return console.log('Error ', error);
})