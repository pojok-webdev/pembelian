getpage = (obj) => {
    switch(obj.type){
        case "products":
            return "masters/products"
        break
        case "productparents":
            return "masters/productparents"
        break
        case "productdetails":
            return "masters/productdetails"
        break
        default:
            return "masters/productparents"
        break
    }
}
getdata = (obj,callback)=> {
    switch(obj.type){
        case "products":
            obj.i.products.gets({},result=>{
                callback(result.map(obj=>{
                    return [obj.id,obj.name]
                  }))
            })
        break
        case "productparents":
            obj.i.productparents.gets({},result=>{
                callback(result.map(obj=>{
                    return [obj.id,obj.name]
                  }))
            })
        break
        case "productdetails":
            obj.i.productdetails.gets({},result=>{
                callback(result.map(obj=>{
                    return [obj.id,obj.name,obj.partnumber,obj.brand,obj.description]
                  }))
            })
        break
        case "users":
            obj.i.users.getprivileges({},result=>{
                callback(result.map(obj=>{
                    return [obj.id,obj.username,obj.email,obj.isadmin,obj.cancreateticket,obj.canverifyserver]
                  }))
            })
        break
    }
}
module.exports = {
    getpage:getpage,getdata:getdata
}