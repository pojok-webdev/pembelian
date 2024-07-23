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
  res.render('commons/login',{
    curpath:'/login'
  })
})
i.app.get('/logout',(req,res)=>{
  i.logging.writeLog({
    createuser:req.cookies.username
    ,subject:'Logout '+req.cookies.email
    ,description:'Logout '+req.cookies.email,i:i
  },h=>{
    res.clearCookie('email')
    res.clearCookie('username')
    res.render('commons/login',{
      curpath:'/logout'
    })
  })
})
i.app.post('/loginhandler',(req,res)=>{
  params = req.body
  console.log("params got",params)
  i.pauth.login(params,result=>{
    console.log('LoginHandler',result)
    
    if(result.message==="ok"){
      i.users.getroles({user_id:result.id},roles=>{
        res.cookie('roles',roles.map(role=>{
          return role.role_id
        }))
        res.cookie('email',result.email)
        res.cookie('username',result.username)
        res.cookie('level', result.level)
        res.cookie('role', result.role)
        res.cookie('roleclass', result.roleclass)
        res.cookie('division_id', result.division_id)
        res.cookie('defaultRoute', result.defaultRoute)
        if(params.hasOwnProperty('curpath')){
          switch(params.curpath){
            case '/login':
              res.redirect('/summary/view/42000')
            break
            case '/logout':
              res.redirect('/summary/view/42000')
            break
            default:
              console.log('curpath',params.curpath)
              res.redirect(params.curpath)
            break
          }
        }else{
          res.redirect('/summary/view/42000')
        }
      })
    }else{
      res.send({"comment":"Password tidak cocok"})
    }
  })
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
  if(req.cookies.hasOwnProperty('email')){
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
          email:req.cookies.email,
          cookies:req.cookies,
          username:i.libText.UpFirstLetter({text:req.cookies.username})
        })    
      break
    }
  }else{
    res.render('commons/login',{
      curpath:'/master/'+params.type+'/'+params.mode
    })
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
    /*case 'gets':
      i.con.doQuery(
        i.crud.gets({
          tableName:'applogs',
          cols:["id","subject","description"],
          orderby:[{key:"id",order:"desc"}],
          conditions:[{key:"1",val:"1"}]
        })
      )
    break*/
    case 'gets':
      i.con.doQuery(
        i.crud.gets({
          tableName:params.tableName,
          cols:params.cols,
          orderby:[{key:"id",order:"desc"}],
          groupby:params.groupby,
          conditions:params.conditions
        }),result=>{
          res.send(result)
        }
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
    case "catatandeveloper":
      res.render("catatandeveloper",{
        pagename:"Catatan Developer",
        title:"Catatan Developer",email:req.cookies.email
      })
    break
  }

})
i.app.get('/summary/:mode/:id',(req,res)=>{
  params = req.params
  switch(params.mode){
    case 'viewpanji':
      console.log('view panji')
      res.render('summarypanji',{
        title:'Summary',pagename:'Summary',
        email:req.cookies.email,
        username:req.cookies.username,
        type:params.mode
      })
    break
    case 'view':
      console.log('roles',req.cookies.roles)
      res.render('summary',{
        title:'Summary',pagename:'Summary',email:req.cookies.email,username:req.cookies.username,
        type:params.mode,roles:req.cookies.roles
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
            oj.submission_detail_id,
            oj.product_id,
            oj.pcategory,
            oj.purchase_reason
          ]
        })})
      })
    break
      default:

  }
})
i.app.get('/submissiondetail/:type/:submission_id/:submission_detail_id',(req,res)=>{
  params = req.params
  switch(params.type){
    case 'detail':
      i.con.doQuery(i.oribudgeting.getSubmissionDetails({submission_id:params.submission_id}),result=>{
        console.log('submissiondetails',result)
        i.con.doQuery(i.oribudgeting.getSubmissionDetailVendor({submission_detail_id:params.submission_detail_id}),vendors=>{
          console.log('Vendors',vendors)
          res.render('submissions/detail',{
            title:'Submissiondetail',pagename:'Submissiondetail',
            email:req.cookies.email,
            username:req.cookies.username,
            result:result[0],vendors:vendors,
            submission_id:params.submission_id,
            submission_detail_id:params.submission_detail_id
          })
        })
    
      })
      break
    case 'verified':
      i.con.doQuery(i.oribudgeting.getSubmissionDetails({submission_id:params.submission_id}),result=>{
        console.log('submissiondetails',result)
        i.con.doQuery(i.oribudgeting.getSubmissionDetailVendor({submission_detail_id:params.submission_detail_id}),vendors=>{
          console.log('Vendors',vendors)
          res.render('submissions/verified',{
            title:'Submissiondetail',pagename:'Submissiondetail',
            email:req.cookies.email,
            username:req.cookies.username,
            result:result[0],vendors:vendors,
            submission_id:params.submission_id,
            submission_detail_id:params.submission_detail_id
          })
        })
    
      })
      break
    case 'info':
      i.con.doQuery(i.oribudgeting.getSubmissionDetails({submission_id:params.submission_id}),result=>{
      res.render('submissions/info',{
        title:'Submissiondetail',pagename:'Submissiondetail',
        email:req.cookies.email,
        username:req.cookies.username,
        result:result[0],
        submission_id:params.submission_id,
        submission_detail_id:params.submission_detail_id
      })
    })
    break
    case 'bought':
      i.con.doQuery(i.oribudgeting.getSubmissionDetails({submission_id:params.submission_id}),result=>{
      res.render('submissions/bought',{
        title:'Submissiondetail',pagename:'Submissiondetail',
        email:req.cookies.email,
        username:req.cookies.username,
        result:result[0],
        submission_id:params.submission_id,
        submission_detail_id:params.submission_detail_id
      })
    })
    break
    case 'pending':
      i.con.doQuery(i.oribudgeting.getSubmissionDetails({submission_id:params.submission_id}),result=>{
        console.log('resulte',result)
        res.render('submissions/pending',{
          title:'Submissiondetail',pagename:'Submissiondetail',
          email:req.cookies.email,
          username:req.cookies.username,
          result:result[0],
          submission_id:params.submission_id,
          submission_detail_id:params.submission_detail_id
        })
      })  
    break
    case 'finalprice':
      i.con.doQuery(i.oribudgeting.getSubmissionDetails({submission_id:params.submission_id}),result=>{
        console.log('submissiondetails',result)
        i.con.doQuery(i.oribudgeting.getSubmissionDetailVendor({submission_detail_id:params.submission_detail_id}),vendors=>{
          console.log('Vendors',vendors)
          res.render('submissions/final-price',{
            title:'Submissiondetail',pagename:'Submissiondetail',
            email:req.cookies.email,
            username:req.cookies.username,
            result:result[0],vendors:vendors,
            submission_id:params.submission_id,
            submission_detail_id:params.submission_detail_id
          })
        })
    
      })
    break
    case 'received':
      i.con.doQuery(i.oribudgeting.getSubmissionDetails({submission_id:params.submission_id}),result=>{
        console.log('submissiondetails',result)
        i.con.doQuery(i.oribudgeting.getSubmissionDetailVendor({submission_detail_id:params.submission_detail_id}),vendors=>{
          console.log('Vendors',vendors)
          res.render('submissions/received',{
            title:'Submissiondetail',pagename:'Submissiondetail',
            email:req.cookies.email,
            username:req.cookies.username,
            result:result[0],vendors:vendors,
            submission_id:params.submission_id,
            submission_detail_id:params.submission_detail_id
          })
        })
    
      })
    break
    case 'goodreceived':
      i.con.doQuery(i.oribudgeting.getSubmissionDetails({submission_id:params.submission_id}),result=>{
        console.log('submissiondetails',result)
        i.con.doQuery(i.oribudgeting.getSubmissionDetailVendor({submission_detail_id:params.submission_detail_id}),vendors=>{
          console.log('Vendors',vendors)
          res.render('submissions/goodreceived',{
            title:'Submissiondetail',pagename:'Submissiondetail',
            email:req.cookies.email,
            username:req.cookies.username,
            result:result[0],vendors:vendors,
            submission_id:params.submission_id,
            submission_detail_id:params.submission_detail_id
          })
        })
    
      })
    break
  }

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
    case 'select2':
      i.odoorouter.getData({i:i,type:params.type},result=>{
        res.send({results:result.map(r=>{
          return {id:r[0],text:r[1]}
        })
      })
    })
    break
  }
})
i.app.get('/dobackupremove/:type/:id',(req,res)=>{
  params = req.params
  switch(params.type){
    case 'submission_details':
      i.con.doQuery(i.summary.storeSubmissionDetail({id:params.id}),stored=>{
        console.log('submission detail id',stored,'stored')
        i.con.doQuery(i.summary.getbysubmissiondetailid({id:params.id}),submission_id=>{
          i.con.doQuery(i.summary.removeSubmissionDetail({id:params.id}),removed=>{
            console.log('submission detail id',removed,'removed')
            res.send({id:submission_id})
          })
        })
      })
    break
    case 'submissions':
      i.con.doQuery(i.summary.storeSubmission({id:params.id}),stored=>{
        console.log('submission id',stored,'stored')
        i.con.doQuery(i.summary.removeSubmission({id:params.id}),removed=>{
          console.log('submission id',removed,'removed')
        })
      })
    break
  }
})
i.app.get('/calendar',(req,res)=>{
  res.render('calendar')
})
i.app.get('/odoowithnosites',(req,res)=>{
  i.master.getdata({type:'odoowithnosites',i:i,session_id:req.cookies.session_id},objs=>{
    //console.log("objs",objs)
    res.send({"data":objs})
  }) 
})
i.app.listen(i.setting.port,_=>{
    console.log('PadiTech Pembelian start at port ',i.setting.port)
})