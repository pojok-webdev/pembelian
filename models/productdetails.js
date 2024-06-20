gets = (obj,callback) => {
    sql = 'select a.id,b.id product_id,b.name,a.partnumber,a.brand,a.description '
        +'from productdetails a  '
        +'left outer join productparents b  '
        +'on b.id=a.product_id '
    doQuery(sql,result=>{
        console.log('Get Cores Result',result)
        callback(result)
    })
}
getbyproduct = (obj,callback) => {
    sql = 'select a.id,b.id product_id,b.name,a.partnumber,a.brand,a.description '
        +'from productdetails a  '
        +'left outer join productparents b  '
        +'on b.id=a.product_id '
        +'where b.id='+obj.product_id+' '
    doQuery(sql,result=>{
        console.log('Get Cores Result',result)
        callback(result)
    })
}
module.exports = {
    gets:gets,getbyproduct:getbyproduct
}