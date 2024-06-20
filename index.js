var i = require('./js/appInit')
i.app.post('/doauth',(req,res)=>{
  params = req.body
  i.auth.doLogin({
    i:i,params:params,res:res,req,req,redirpath:'/tickets/view/42000'
  },result=>{
    if(result.authenticated){
      i.logging.writeLog({
        createuser:result.username,subject:'Login '+result.email,description:'Login '+result.email,i:i
      },logresult=>{
        i.users.getprivilege({email:result.email},privilege=>{
          if(privilege.length>0){
            console.log('privilege',privilege)
            res.cookie('cancreateticket',privilege[0].cancreateticket)
            res.cookie('isadmin',privilege[0].isadmin)
            res.cookie('canverifyserver',privilege[0].canverifyserver)
          }else{
            console.log('should set privilege')
            console.log('can not create ticket2')
            res.cookie('cancreateticket','0')
            res.cookie('canverifyserver',0)
          }
        })
        i.odoo.getOdooSession(session_id=>{
          res.cookie('session_id',mysubstr)
          res.cookie('username',result.username)
          res.cookie('email',result.email)
          res.redirect('/tickets/view/42000')
        })
      })
    }else{
      res.redirect('/login')
    }
  })
})
i.app.post('/select2datafactory3',(req,res)=>{
  params = req.body
  console.log('Model params',params)
  i.select2datafactory3.getData({
    params:params,i:i
  },result=>{
    console.log('factory result',result)
    res.send(result)
  })
})
i.app.get('/login',(req,res)=>{
  res.render('commons/login')
})
i.app.get('/logout',(req,res)=>{
  i.logging.writeLog({
    createuser:req.cookies.username
    ,subject:'Logout '+req.cookies.email
    ,description:'Logout '+req.cookies.email,i:i
  },h=>{
    res.render('commons/login')
  })
})
i.app.post('/loginhandler',(req,res)=>{
  params = req.body
  res.send(params)
})
i.app.get('/getcookies',(req,res)=>{
    console.log('Req Cookies',req.cookies.session_id)
    res.send({'cookie':req.cookies})
})
i.app.get('/getdata/:type/:params/:filter',(req,res)=>{
  params = req.params
  i.reportRoute.getData({type:params.type,i:i,filter:params.filter},result=>{
    res.send({"data":result})
  })
})
i.app.post('/getdata',(req,res)=>{
  params = req.body
  console.log('ParamAwal',params)
  i.reportRoute.getData({type:params.filter.type,i:i,filter:params.filter},result=>{
    console.log('result',result)
    res.send({"data":result})
  })
})
i.app.get('/lists/:mode/:model',(req,res)=>{
  params = req.params
  switch(params.mode){
    case 'view':
      res.render('lists/table',{
        title:'lists',path:'/lists/data/'+params.model,
        mode:params.mode,
        columns:i.listRoute.getColumns({type:params.model})
      })
    break
    case 'data':
      i.listRoute.getData({type:params.model,i:i,session_id:req.cookies.session_id},result=>{
        res.send({'data':result})
      })
    break
}
})
i.app.get('/testsession',(req,res)=>{
  console.log('req session',req.session)
  console.log('session',req.cookies.session_id)
  res.send({session:req.cookies.session_id})
})
i.app.get('/master/:type/:mode',(req,res)=>{
  params = req.params
  console.log('cookies',req.cookies)
  switch(params.mode){
    case "data":
      i.master.getdata({type:params.type,i:i,session_id:req.cookies.session_id},objs=>{
        //console.log("objs",objs)
        res.send({"data":objs})
      })    
    break
    case "view":
      res.render(i.master.getpage({type:params.type}),{
        title:i.libText.UpFirstLetter({text:params.type}),
        pagename:params.type,
        type:params.type,
        email:'',//req.cookies.email,
        cookies:req.cookies,
        //username:i.libText.UpFirstLetter({text:req.cookies.username})
      })    
    break
  }
})
i.app.post('/crud',(req,res)=>{
  params = req.body
  console.log("User Params",params)
  switch(params.crudtype)
  {
    case 'update':
      i.con.doQuery(
      i.crud.update({
      tableName:params.tableName,
      cols:params.cols,
      conditions:params.conditions
    }),result=>{
      console.log('update result',result)
      res.send(result)
    })
    break
    case 'create':
      i.con.doQuery(
        i.crud.create({
          tableName:params.tableName,
          cols:params.cols
        }),result=>{
          console.log('create result',result)
          res.send(result)
        }
      )
    break
    case 'gets':
      i.con.doQuery(
        i.crud.gets({
          tableName:'applogs',
          cols:["id","subject","description"],
          orderby:[{key:"id",order:"desc"}],
          conditions:[{key:"1",val:"1"}]
        })
      )
    break
  }
})
i.app.get('/viewlogs/:mode',(req,res)=>{
  params = req.params
  switch(params.mode){
    case 'view':
      res.render('viewlogs',{
        title:'Logs',
        pagename:'Logs',
        email:req.cookies.email,
      })
    break
    case 'data':
      sql = i.crud.gets({
        tableName:'applogs',
        cols:["id","subject","description","createuser","createdate"],
        orderby:[{key:"id",order:"desc"}],
        conditions:[{key:"1",val:"1"}]
      })
      console.log('sql',sql)
      i.con.doQuery(sql
       ,result=>{
          res.send({"data":result.map(o=>{
            return [o.id,o.subject,o.description,o.createuser,o.createdate]
          })})
      })
    break
  }

})
i.app.get('/calendar',(req,res)=>{
  res.render('calendar')
})
i.app.listen(i.setting.port,_=>{
    console.log('PadiTech Pembelian start at port ',i.setting.port)
})