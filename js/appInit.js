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
summarypanji = require('./../models/summarypanji'),
productparents = require('./../models/productparents'),
productdetails = require('./../models/productdetails'),
summary = require('./../models/summary'),
//auth = require('./../models/auth'),
//_auth = require('./../models/_auth'),
pauth = require('./../models/pauth'),
odooproductcategories = require('./../models/odooproductcategories'),
odooproducts = require('./../models/odooproducts'),
oribudgeting = require('./../models/oribudgeting'),
odoowithnosites = require('./../models/odoowithnosites'),
cookieParser = require('cookie-parser'),
listRoute = require('./listRoute'),
libText = require('./../libraries/text'),
select2 = require('./../routers/select2'),
select2b = require('./../routers/select2b'),
select2datafactory3 = require('./../routers/select2datafactory3'),
master = require("./../routers/master"),
submissions = require("./../models/submissions"),
submission_details = require("./../models/submission_details"),
odoorouter = require('./../routers/odooRouter')
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
    //auth:auth,_auth:_auth,
    pauth:pauth,
    users:users,
    products:products,productparents:productparents,productdetails:productdetails,
    summarypanji:summarypanji,
    summary:summary,
    odoorouter:odoorouter,oribudgeting:oribudgeting,
    odooproducts:odooproducts,odooproductcategories:odooproductcategories,
    odoowithnosites:odoowithnosites,
    crud:crud,
    submission_details:submission_details,submissions:submissions
}