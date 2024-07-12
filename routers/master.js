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
        case "productspanji":
            return "masters/productspanji"
        break
        case "productparentspanji":
            return "masters/productparentspanji"
        break
        case "categories":
            return "masters/categories"
        break
        case "odoowithnosites":
            return "masters/odoowithnosites"
        break
        case "odoowithsites":
            return "masters/odoowithsites"
        break
        case "odooallsites":
            return "masters/odooallsites"
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
                    return [obj.id,obj.product_id,obj.name,obj.partnumber,obj.brand,obj.description]
                }))
            })
        break
        case "productspanji":
            obj.i.con.doQuery( obj.i.crud.gets({
                tableName:'productspanji',
                cols:['id','sku','nama','categorypath','pcategory','ptype'],
                conditions:[{key:'1',val:'1'}]
            }),result=>{
                callback(result.map(obj=>{
                    return [obj.id,obj.sku,obj.nama,obj.categorypath,obj.pcategory,obj.ptype]
                }))
            }
            )
        break
        case 'productparentspanji':
            obj.i.con.doQuery( obj.i.crud.gets({
                tableName:'productparentspanji',
                cols:['pcategory','categorypath'],
                conditions:[{key:'1',val:'1'}]
            }),result=>{
                callback(result.map(obj=>{
                    return [obj.pcategory,obj.categorypath]
                }))
            }
            )
        break
        case 'categories':
            obj.i.con.doQuery( obj.i.crud.gets({
                tableName:'categories',
                cols:['id','name','description','status','createdate','createuser'],
                conditions:[{key:'1',val:'1'}]
            }),result=>{
                callback(result.map(obj=>{
                    return [obj.id,obj.name,obj.description,obj.status,obj.createdate,obj.createuser]
                }))
            }
            )
        break
        case "users":
            obj.i.users.getprivileges({},result=>{
                callback(result.map(obj=>{
                    return [obj.id,obj.username,obj.email,obj.isadmin,obj.cancreateticket,obj.canverifyserver]
                }))
            })
        break
        case 'odoowithnosites_':
            obj.i.odoowithnosites.gets({},result=>{
                callback(result.result.map(obj=>{
                    return [
                        obj.id,
                        obj.name,
                        obj.customer_number,
                        obj.partner_id.name,
                        obj.recurring_invoice_line_ids.map(ln=>{return ln.name}).join()
                    ]
                }))
            })
        break
        case 'odoowithnosites':
            obj.i.odoowithnosites.gets({},result=>{
                x = result.result.map(obj=>{
                    return obj.recurring_invoice_line_ids.map(ln=>{
                        return [obj.id,obj.name,obj.customer_number,obj.partner_id.name,obj.user_id.name,ln.name,ln.product_id.product_tmpl_id.default_code,ln.site_location_id.id,ln.site_location_id.address]
                    })
                    
                })
                callback([].concat(...x))
            })
        break
        case 'odoowithsites':
            obj.i.odoowithnosites.getwithsites({},result=>{
                x = result.result.map(obj=>{
                    return obj.recurring_invoice_line_ids.map(ln=>{
                        return [obj.id,obj.name,obj.customer_number,obj.partner_id.name,obj.user_id.name,ln.name,ln.product_id.product_tmpl_id.default_code,ln.site_location_id.id,ln.site_location_id.address]
                    })
                    
                })
                callback([].concat(...x))
            })
        break
        
        case 'odooallsites':
            obj.i.odoowithnosites.getall({},result=>{
                x = result.result.map(obj=>{
                    return obj.recurring_invoice_line_ids.map(ln=>{
                        return [obj.id,obj.name,obj.customer_number,obj.partner_id.name,obj.user_id.name,ln.name,ln.product_id.product_tmpl_id.default_code,ln.site_location_id.id,ln.site_location_id.address]
                    })
                    
                })
                callback([].concat(...x))
            })
        break
    }
}
module.exports = {
    getpage:getpage,getdata:getdata
}