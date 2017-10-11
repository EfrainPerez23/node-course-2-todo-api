var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();

app.use(bodyParser.json());


app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.status(200).send(doc);
    }, (error) => {
        res.status(400).send({ success: false, message: "Something is wrong", data: error });
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.status(200).send({ todos });
    }, (error) => {
        res.status(400).send(error)
    });

});

app.listen(3000, () => {
    console.log('Started on port 3000');
})

module.exports = { app };






// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Save to do', doc);
// }, (err) => {
//     console.log('Unable to save toDo', err);
// });

// var newTodo2 = new Todo({
//     text: 'Efrain Perez',
//     complete: true,
//     completeAt: 21
// });

//WITHOUT PARAMETERS

// var newTodo2 = new Todo({
//     text: ' Edit this video.   '
// });



// newTodo2.save().then((doc) => {
//     console.log('Save to do', doc);
// }, (err) => {
//     console.log('Unable to save toDo', err);
// });



// var userSave = new User({
//     name: 'Efrain Perez',
//     email: '   efrain.abperez23@gmail.com    ',
//     password: 'xopa'
// })

// userSave.save().then((doc) => {
//     console.log('Save to do', doc);
// }, (err) => {
//     console.log('Unable to save toDo', err);
// });