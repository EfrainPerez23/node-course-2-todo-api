let _ = require('lodash');
let express = require('express');
let bodyParser = require('body-parser');
let { ObjectID } = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();
let port = process.env.PORT || 3000;

app.use(bodyParser.json());


app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.status(200).send({ success: true, message: "Well done!", data: doc });
    }, (error) => {
        res.status(400).send({ success: false, message: "Something is wrong", data: error });
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.status(200).send({ success: true, message: "Well done!", data: todos });
    }, (error) => {
        res.status(400).send({ success: false, message: "Something is wrong", data: error });
    });


});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    }
    Todo.findById(id).then((todo) => {
        if (todo) {
            res.status(200).send({ todo });
        }
        res.status(404).send();
    }, (error) => {
        res.status(404).json(error);
    }).catch((e) => {
        res.status(400).send();
    });
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if (todo) {
            return res.status(200).send({ todo });
        }
        return res.status(404).send();
    }, (error) => {
        res.status(400).send();
    }).catch((err) => {
        res.status(400).send();
    });
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'complete']);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    if (_.isBoolean(body.complete) && body.complete) {
        body.completeAt = new Date().getTime();
    } else {
        body.complete = false;
        body.completeAt = null;
    }

    Todo.findByIdAndUpdate(id, { $set: body }, { new: true }).then((todo) => {
        if (todo) {
            return res.status(200).send({ todo });
        }
        return res.status(404).send();
    }).catch((err) => {
        return res.status(404).send();
    })

});

app.use((req, res, next) => {
    res.status(400).send({ success: false, message: "Something is wrong", data: {} });
});

app.listen(port, () => {
    console.log('Started on port ', port);
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