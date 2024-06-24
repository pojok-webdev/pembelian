var express = require('express'),
app = new express(),
setting = require('./appSetting'),
con = require('./connection'),
logging = require('./../assets/app/logging'),
crud = require('./../models/crud'),
sha1 = require('sha1'),
sessions = require('express-session'),
bodyParser = require('body-parser'),
users = require('./../models/users'),
products = require('./../models/products'),
productparents = require('./../models/productparents'),
productdetails = require('./../models/productdetails'),
summary = require('./../models/summary'),
cookieParser = require('cookie-parser'),
listRoute = require('./listRoute'),
libText = require('./../libraries/text'),
select2 = require('./../routers/select2'),
select2b = require('./../routers/select2b'),
select2datafactory3 = require('./../routers/select2datafactory3'),
master = require("./../routers/master")
app.set('views', './views');
app.set('view engine','ejs')
app.use(express.static(__dirname + '/..'));
app.use(bodyParser.json({'limit':'10mb',extended:true}))
app.use(bodyParser.urlencoded({'limit':'10mb',extended:true}))
app.use(cookieParser())
app.use(sessions({
    secret:'haha',
    saveUninitialized:true,
    cookie:{maxAge:1000*24*60*60},
    resave:false
}))
console.log("DIRNAME",__dirname)
module.exports = {
    app:app,
    setting:setting,
    con:con,
    sha1:sha1,
    logging:logging,
    listRoute:listRoute,
    libText:libText,
    select2:select2,select2b:select2b,select2datafactory3:select2datafactory3,master:master,
    users:users,
    products:products,productparents:productparents,productdetails:productdetails,
    summary:summary,
    crud:crud
}