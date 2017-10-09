let { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    //findOneAndUpdate

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('59dbec5e42da1154d8bb5da3')

    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })


    // UTILIZANDO EL OPERADOR $inc = para aumentar una cantidad especifica el dato en la base de datos

    db.collection('User').findOneAndUpdate({
        _id: new ObjectID('59daea0dba5d998d5a43c872')
    }, {
        $set: {
            name: 'Mi viejo'
        },
        $inc: {
            age: 5
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })
    db.close();
});