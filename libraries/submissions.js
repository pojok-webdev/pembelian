getCountInYear = (obj,callback) =>{
    $.ajax({
        url:'/crud',
        type:'post',
        data:{
          tableName:obj.tableName,
          crudtype:'gets',
          cols:["year","count(id) cnt"],
          conditions:[
            {key:'year',val:'2020'}
          ],
          groupby:[
            "year"
          ]
        }
      })
      .done(res=>{
        console.log('getCount res',res)
        callback(res[0].cnt)
      })
      .fail(err=>{
        console.log('getCount err',err)
      })
  }
  getMaxNum = (obj,callback) => {
    $.ajax({
      url:'/crud',
      type:'post',
      data:{
        tableName:obj.tableName,
        crudtype:'gets',
        cols:["year(createdate)","max(id)mx"],
        conditions:[{key:"year(createdate)",val:"2024"}],
        groupby:["year(createdate)"]
      }
    })
    .done(res=>{
      console.log('getMax res',res)
      callback(res[0].mx)
    })
    .fail(err=>{
      console.log('getMax err',err)
      callback(err)
    })
  }
  lpad = obj => {
    mylen = obj.num.length
    return (obj.num).toString().padStart(mylen,"0")
  }
