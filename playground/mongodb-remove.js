var { ObjectID } = require('mongodb');
var { mongoose } = require('./../server/db/mongoose');
var { Todo } = require('./../server/models/todo');
var { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findByIdAndRemove('59e669e1d8f08ebc2f4b17e4').then((todo) => {
    console.log(todo);
});

Todo.findOneAndRemove({ _id: '59e669e1d8f08ebc2f4b17e4' }).then((todo) => {

});