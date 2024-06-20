inp = {
    tablename:'',
    keys:[{nama:"nama"}]
}
backuptable = (obj,callback) => {
    sql = 'drop table if exists '+obj.tablename+'; '
    sql+= 'create table '+obj.tablename +' '
    sql+= '('+obj.keys+')'
}
create = (obj) => {
    sql = 'insert into '+obj.tableName+' '
    sql+= '('+obj.cols.map(col=>{return col.key}).join()+') '
    sql+= 'values '
    sql+= '("'+obj.cols.map(col=>{return col.val}).join('","')+'") '
    console.log('sql',sql)
    return(sql)
}
update = (obj) => {
    sql = 'update '+obj.tableName+' '
    sql+= 'set '
    sql+= obj.cols.map(col=>{
        return col.key + '="' +col.val+ '" '
    }).join()
    sql+= 'where '+obj.conditions.map(cond=>{
        return cond.key+'="'+cond.val+'" '
    }).join()
    console.log('SQL',sql)
    return sql
}
module.exports = {
    backuptable:backuptable,create:create,update:update
}