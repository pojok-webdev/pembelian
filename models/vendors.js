const { doQuery } = require("../js/connection")

getsbytype = (obj,callback) => {
    sql = 'select * from vendors '
    sql+= 'where vtype="'+obj.vtype+'" '
    console.log('sql',sql)
    doQuery(sql,result=>{
        callback(result)
    })
}
getbysubmissiondetail = (obj,callback) => {
    sql = 'select * from fakesubmissiondetails_vendors a '
    sql+= 'left outer join vendors b on b.id=a.vendor_id '
    sql+= 'where submission_detail_id='+obj.submission_detail_id+' '
    doQuery(sql,result=>{
        callback(result)
    })
}
module.exports = {
    getsbytype:getsbytype,
    getbysubmissiondetail:getbysubmissiondetail
}