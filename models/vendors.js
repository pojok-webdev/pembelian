const { doQuery } = require("../js/connection")

getsbytype = (obj,callback) => {
    sql = 'select * from vendors '
    sql+= 'where vtype="'+obj.vtype+'" '
    console.log('sql',sql)
    doQuery(sql,result=>{
        callback(result)
    })
}
module.exports = {
    getsbytype:getsbytype
}