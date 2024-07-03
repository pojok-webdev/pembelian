var i = require('./js/appInit')
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
  i.pauth.login(params,result=>{
    if(result.message==="ok"){
      res.cookie('email',result.email)
      res.redirect('/summary/view/42000')
    }else{
      res.send({"comment":"Password tidak cocok"})
    }
//    res.send(result)
  })
//  res.send(params)
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
i.app.get('/lists/:mode/:model/:filter',(req,res)=>{
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
      i.listRoute.getData({
        type:params.model,
        i:i,
        session_id:req.cookies.session_id,
        filter:params.filter
      },result=>{
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
i.app.get('/summary/:mode/:id',(req,res)=>{
  params = req.params
  switch(params.mode){
    case 'view':
      res.render('summary',{
        title:'Summary',pagename:'Summary',email:req.cookies.email,
        type:params.mode
      })
      break
    case 'data':
      i.con.doQuery(i.summary.gets({}),result=>{
        res.send({data:result.map(oj=>{
          return [
            oj.submission_date,
            oj.budgeting_number,
            oj.createuser,
            oj.itemname,
            oj.category,
            oj.amount,
            oj.proposed_totalprice,
            oj.placement_location,
            oj.status,
            oj.implementation_target,
            oj.subject,
            oj.purchase_target,
            oj.totalprice,
            oj.staff_name,
            oj.submission_id,
            oj.submission_detail_id
          ]
        })})
      })
    break
      default:

  }
})
i.app.get('/submissiondetail/:submission_id/:submission_detail_id',(req,res)=>{
  params = req.params
  i.con.doQuery(i.oribudgeting.getSubmissionDetails({submission_id:params.submission_id}),result=>{
    console.log('submissiondetails',result)
    i.con.doQuery(i.oribudgeting.getSubmissionDetailVendor({submission_detail_id:params.submission_detail_id}),vendors=>{
      console.log('Vendors',vendors)
      res.render('submissions/detail',{
        title:'Submissiondetail',pagename:'Submissiondetail',email:'',itemname:'WRT54GL',
        result:result[0],vendors:vendors,
        submission_id:params.submission_id,
        submission_detail_id:params.submission_detail_id
      })
    })

  })

})
i.app.get('/finalprice/:mode/:submission_id',(req,res)=>{
  params = req.params
  i.con.doQuery(i.oribudgeting.getSubmissionById({id:params.submission_id}),result=>{
    switch(params.mode){
      case 'data':
        console.log('Result',result)
        res.send({obj:result})      
      break
      case 'view':
        res.render('submissions/finalPrice',{
          obj:result
        })
    }
  })
})
i.app.get('/kampret/:mode/:type',(req,res)=>{
  params = req.params
  console.log('Params',params)
  switch(params.mode){
    case 'data':
      i.odoorouter.getData({i:i,type:params.type},result=>{
        console.log("recuLt",result)
        res.send({"data":result})
      })
    break
    case 'view':
      res.render('odoo/table',{
        title:params.type,
        pagename:params.type,email:'',type:params.type
      })
    break
  }
})
i.app.get('/calendar',(req,res)=>{
  res.render('calendar')
})
i.app.get('/slogin',(req,res)=>{
  
})
i.app.listen(i.setting.port,_=>{
    console.log('PadiTech Pembelian start at port ',i.setting.port)
})