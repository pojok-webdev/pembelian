doEdit = (obj,callback) => {
    switch(obj.type){
        case 'users':
            obj.i.users.update({},result=>{})
        break
    }
}
module.exports = {
    doEdit:doEdit
}