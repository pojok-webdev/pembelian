gets = (obj,callback) => {
    sql = 'select c.id,c.username,c.email,d.name grp,group_concat(b.name) urole from ';
    sql+= 'roles_users a '
    sql+= 'left outer join roles b on b.id=a.role_id '
    sql+= 'left outer join users c on c.id=a.user_id '
    sql+= 'left outer join groups d on d.id=c.group_id '
    sql+= 'where c.status="1" and c.active="1" '
    sql+= 'group by a.user_id,c.username'
    doQuery(sql,result=>{
        callback(result)
    })
}
getprivileges = (obj,callback) => {
    sql = 'select a.id,a.username,a.email,b.cancreateticket,b.isadmin,b.canverifyserver from ';
    sql+= 'users a '
    sql+= 'left outer join userprivileges b on b.id=a.id '
    sql+= 'where a.status="1" and a.active="1" '
    sql+= 'and b.id is not null '
    console.log('privileges',sql)
    doQuery(sql,result=>{
        callback(result)
    })
}
getprivilege = (obj,callback) => {
    sql = 'select a.id,a.username,a.email,b.cancreateticket,b.isadmin,b.canverifyserver from ';
    sql+= 'users a '
    sql+= 'left outer join userprivileges b on b.id=a.id '
    sql+= 'where a.email="'+obj.email+'" and a.status="1" and a.active="1" '
    
    console.log('privileges',sql)
    doQuery(sql,result=>{
        callback(result)
    })
}
module.exports = {
    gets:gets,getprivileges:getprivileges,getprivilege:getprivilege
}