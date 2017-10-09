let { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //BUSCAR TODOS LOS DATOS DE UNA COLLECTION EN MONGO DB
    // db.collection('Todos').find().toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos ', err);
    // });

    //BUSCAR DATOS CON QUERY O SEA 1 O VARIOS EN ESPECIFICO
    // db.collection('Todos').find({ completed: false }).toArray().then((docs) => {
    //     console.log('Todos completed');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos ', err);
    // });

    // BUSCAR DATOS CON QUERY POR ID
    // db.collection('Todos').find({
    //     _id: new ObjectID('59dbdb1542da1154d8bb58d6')
    // }).toArray().then((docs) => {
    //     console.log('Todos completed');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos ', err);
    // });

    // USANDO COUNT = trae la cantidad de datos de la base de datos, sin usar query

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Count: ${count}`);
    // }, (err) => {
    //     console.log(`Error: ${err}`);
    // });

    // USANDO COUNT = trae la cantidad de datos de la base de datos, usando query
    // db.collection('Todos').find({ completed: false }).count().then((count) => {
    //     console.log(`Count: ${count}`);
    // }, (err) => {
    //     console.log(`Error: ${err}`);
    // });

    db.collection('User').find({ name: 'Doris Gomez' }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log(err);
    });

    db.close();
});