var path = require("path");
var mysql = require("mysql");
// var net = require('net');
// const XlsxPopulate = require('xlsx-populate');
// var moment = require('moment');
// var xlsx = require('xlsx'); //shubham
// var nodemailer = require('nodemailer'); //shubham
var sockets = [];
//var hostIp=require('./js/ip_port')
var express = require("express"),
    app = require("express")(),
    http = require("http").Server(app),
    io = require("socket.io")(http),
    util = require("util"),
    fs = require("fs");

    var connection = mysql.createConnection({
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'didital_fifo',
    });

// connection.connect();
http.listen(5500, function () {
    console.log("Connected to :5500");
});

app.use(express.static(__dirname));

app.get('/index', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});