// let MongoClient = require('mongodb').MongoClient;
let { MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = { name: 'Efra', age: 21 };
// var { name } = user;

// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // insertar un campo en un collection (tabla) de mongoDB
    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    // INSERTA UN CAMPO EN LA COLLECTION ESPECTIFICA PERO AHORA PUEDES ACCEDER AL ID Y HORA EN QUE FUE CREADO LA COLLECCION
    // db.collection('User').insertOne({
    //     name: 'Doris Gomez',
    //     age: 71,
    //     location: 'Arraijan, Panama'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert that User');
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });


    db.close();
});