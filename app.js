require('dotenv').config();

const express = require('express');

const http =  require('http');
const url = require('url');
const logger = require('morgan');
const dbConnect = require('./service/ConnectDBService');
const CRUDService = require('./service/CRUDService');

const app = express();

app.use(logger('dev'));

require('./routes')(app);



async function initApp() {

    await dbConnect.connect();

    let user = new CRUDService({login: "admin", pass: "123456789"});

    await user.createOneUser();


}



initApp();




/**
 * 404 ошибка
 */
app.use(function(req, res, next) {
    let err = {};
    err.status = 404;
    next(err);

});




/**
 * Отдать ошибку
 */
app.use(function(err, req, res, next) {
    res.status(err.status);
    res.json({"code": 1});
});



module.exports = app;