gets = (obj,callback) => {
    sql = 'select id,name from products '
    doQuery(sql,result=>{
        console.log('Get Cores Result',result)
        callback(result)
    })
}
module.exports = {
    gets:gets
}