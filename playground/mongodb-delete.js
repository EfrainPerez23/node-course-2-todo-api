let { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    //deleteMany 
    // db.collection('Todos').deleteMany({ text: 'Luch today' }).then((result) => {
    //     console.log(result);
    // }, (err) => {

    // });

    // deleteOne

    // db.collection('Todos').deleteOne({ text: 'eat lunch' }).then((result) => {
    //     console.log(result);
    // }, (err) => {})

    // findOneAndDelete = lo elimina y lo retorna

    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // });

    db.collection('User').deleteMany({ name: 'Doris Gomez' }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log(err);
    })

    db.collection('User').findOneAndDelete({ _id: new ObjectID('59daebdcca696b8d805ed06a') }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log(err);
    });


    db.close();
});